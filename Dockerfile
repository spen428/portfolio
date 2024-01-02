FROM node:20.10 as pnpm
USER root
RUN npm install -g pnpm


FROM pnpm as base
WORKDIR /src
COPY . .
ENV VITE_API_URL=abc
RUN PUPPETEER_SKIP_DOWNLOAD=true \
    pnpm install && \
    pnpm run build:prod
RUN mkdir /app && \
    pnpm deploy --filter web /app/web && \
    pnpm deploy --prod --filter api /app/api


FROM pnpm as web
WORKDIR /app
COPY --from=base /app/web .
HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -f http://localhost:5173 || exit 1
EXPOSE 5173
ENTRYPOINT pnpm run prod


FROM pnpm as api
ENV NODE_ENV=production
ENV CORS_ORIGINS=http://web:5173
ENV SERVER_HOSTNAME=0.0.0.0
ENV SERVER_PORT=15000
ENV DEBUG=express:router
ENV DATA_PATH=dummy
WORKDIR /app
COPY --from=base /app/api .
HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -s http://localhost:$SERVER_PORT | grep 'OK' || exit 1
EXPOSE $SERVER_PORT
ENTRYPOINT pnpm run prod


FROM backstopjs/backstopjs:6.3.2 as vr-base
RUN apt-get update && \
    apt-get install -y ghostscript bash && \
    npm install -g pnpm


FROM vr-base as vr
VOLUME /src
WORKDIR /src
COPY --from=base /app/web /src/
COPY --from=base /src/web/visual_regressions /src/visual_regressions/
COPY --from=base /src/web/scripts /src/scripts/
COPY --from=base /src/web/backstop.cjs /src/
ENV BASE_URL=http://web:5173
ENTRYPOINT node scripts/export-pdf.js --url="$BASE_URL" && \
    bash scripts/generate-pngs-from-pdf.sh && \
    backstop test --configPath=backstop.cjs || true
