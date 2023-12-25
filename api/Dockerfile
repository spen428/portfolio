FROM node:20.10 as pnpm
USER root
WORKDIR /opt/app
RUN npm install -g pnpm && chown -R node:node /opt/app
USER node

FROM pnpm
COPY package.json pnpm-lock.yaml /opt/app/
RUN pnpm install

COPY . .
ENV CORS_ORIGINS=http://web:5173
ENV SERVER_HOSTNAME=0.0.0.0
ENV SERVER_PORT=15000
ENV DEBUG=express:router
RUN pnpm run build:prod

HEALTHCHECK --interval=10s --timeout=5s \
    CMD curl -s http://localhost:$SERVER_PORT | grep 'OK' || exit 1

ENTRYPOINT pnpm run prod
