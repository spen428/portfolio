FROM node:20.10 as pnpm
USER root
WORKDIR /opt/app
RUN npm install -g pnpm && chown -R node:node /opt/app
USER node

FROM pnpm
COPY package.json pnpm-lock.yaml
RUN pnpm install

COPY . .
ENV VITE_API_URL=http://api:15000
RUN pnpm run build:prod

HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -f http://localhost:5173 || exit 1

ENTRYPOINT pnpm run prod
