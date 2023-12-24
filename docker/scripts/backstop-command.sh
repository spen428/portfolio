#!/bin/bash
apt-get update && apt-get install -y ghostscript

npm install -g pnpm
pnpm install

node scripts/export-pdf.js --url="$BASE_URL" && \
  . scripts/generate-pngs-from-pdf.sh && \
  backstop test --configPath=backstop.cjs
