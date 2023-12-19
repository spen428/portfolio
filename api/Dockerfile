FROM node:20.10

USER root
WORKDIR /opt/app
COPY . .

RUN npm install -g pnpm
RUN chown -R node:node /opt/app

USER node
RUN pnpm install

ENTRYPOINT pnpm run prod
