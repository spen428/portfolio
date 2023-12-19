#!/bin/bash
source "$(dirname "$0")/common.step.sh"

export DEBUG=express:router
export DATA_PATH=data
export NODE_ENV=production
export SERVER_PORT=15000

start_services $SERVER_PORT 5173

pnpm run --filter web pdf
result=$?

stop_services

if [ $result -ne 0 ]; then
  exit $result
fi

mv web/bin/CV.pdf "web/bin/[$(date '+%Y-%m-%d')] CV.pdf"
