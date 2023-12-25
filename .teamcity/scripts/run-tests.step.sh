#!/bin/bash
source "$(dirname "$0")/common.step.sh"

export DEBUG=express:router
export SERVER_PORT=15000
composeFile="compose.test.yml"

#pnpm run test
cd docker || exit 4
docker-compose -f $composeFile build && \
  docker-compose -f $composeFile up --abort-on-container-exit vr
result=$?

docker-compose -f $composeFile down

if [ ! -r "web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi

exit $result
