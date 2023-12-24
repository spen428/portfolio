#!/bin/bash
cp -r /src/* /app
cd /app || exit

npm install -g pnpm
pnpm install
pnpm run build:prod

pnpm run prod
