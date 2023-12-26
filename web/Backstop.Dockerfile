FROM backstopjs/backstopjs:6.3.2

RUN apt-get update && \
    apt-get install -y ghostscript bash && \
    npm install -g pnpm

WORKDIR /src
VOLUME /src

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY backstop.cjs .
COPY visual_regressions/bitmaps_reference visual_regressions/bitmaps_reference
COPY visual_regressions/engine_scripts visual_regressions/engine_scripts
COPY scripts/ scripts/

ENV BASE_URL=http://web:5173
ENTRYPOINT node scripts/export-pdf.js --url="$BASE_URL" && \
    bash scripts/generate-pngs-from-pdf.sh && \
    backstop test --configPath=backstop.cjs || true
