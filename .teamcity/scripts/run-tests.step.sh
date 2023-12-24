#!/bin/bash
source "$(dirname "$0")/common.step.sh"

export DEBUG=express:router
export SERVER_PORT=15000

pnpm run test
result=$?

if [ ! -r "web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi

exit $result
