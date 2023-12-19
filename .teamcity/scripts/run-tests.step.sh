#!/bin/bash
source "$(dirname "$0")/common.step.sh"

export DEBUG=express:router
export SERVER_PORT=15000

start_services $SERVER_PORT 5173

pnpm run test
result=$?

stop_services

exit $result
