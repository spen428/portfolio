FROM node:20.10 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PUPPETEER_SKIP_DOWNLOAD="true"
RUN corepack enable
USER root


FROM base as build
WORKDIR /src

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

RUN pnpm run build:prod && \
    mkdir /app && \
    pnpm deploy --filter web /app/web && \
    pnpm deploy --prod --filter api /app/api


FROM base as web
ENV VITE_API_URL=http://api:15000
WORKDIR /app
COPY --from=build /app/web .
HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -f http://localhost:5173 || exit 1
EXPOSE 5173
ENTRYPOINT pnpm run prod


FROM base as api
ENV NODE_ENV=production
ENV CORS_ORIGINS=http://web:5173
ENV SERVER_HOSTNAME=0.0.0.0
ENV SERVER_PORT=15000
ENV DEBUG=express:router
ENV DATA_PATH=dummy
WORKDIR /app
COPY --from=build /app/api .
HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -s http://localhost:$SERVER_PORT | grep 'OK' || exit 1
EXPOSE $SERVER_PORT
ENTRYPOINT pnpm run prod


FROM backstopjs/backstopjs:6.3.3 as vr-base
VOLUME /src
WORKDIR /src
RUN apt-get update && \
    apt-get install -y ghostscript bash && \
    chown -R node /src
USER node

FROM vr-base as vr
COPY --from=build --chown=node /app/web /src/
COPY --from=build --chown=node /src/web/visual_regressions /src/visual_regressions/
COPY --from=build --chown=node /src/web/scripts /src/scripts/
COPY --from=build --chown=node /src/web/backstop.cjs /src/
ENV BASE_URL=http://web:5173
ENTRYPOINT node scripts/export-pdf.js --url="$BASE_URL" && \
    bash scripts/generate-pngs-from-pdf.sh && \
    backstop test --configPath=backstop.cjs || true
