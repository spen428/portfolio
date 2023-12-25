FROM node:20.10

USER root
WORKDIR /opt/app
COPY . .

RUN npm install -g pnpm && chown -R node:node /opt/app

USER node
ENV VITE_API_URL=http://api:15000

RUN pnpm install && pnpm run build:prod

HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -f http://localhost:5173 || exit 1

ENTRYPOINT pnpm run prod
