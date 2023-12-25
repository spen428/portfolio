FROM backstopjs/backstopjs:6.3.2

RUN apt-get update && \
    apt-get install -y ghostscript bash

ENV BASE_URL=http://web:5173
VOLUME /src
ENTRYPOINT find . && node scripts/export-pdf.js --url="$BASE_URL" && \
             bash scripts/generate-pngs-from-pdf.sh && \
             backstop test --configPath=backstop.cjs
