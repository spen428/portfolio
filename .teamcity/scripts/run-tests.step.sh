#!/bin/bash
source "$(dirname "$0")/common.step.sh"

export DEBUG=express:router
export SERVER_PORT=15000

cd docker || exit 4
alias dc="docker-compose -f compose.test.yml"
dc build && \
  dc run --rm -detach --name=pre_vr --entrypoint "sleep infinity" vr && \
  docker cp ../web/backstop.cjs       pre_vr:/src && \
  docker cp ../web/scripts            pre_vr:/src && \
  docker cp ../web/visual_regressions pre_vr:/src && \
  dc down && \
  dc up --abort-on-container-exit vr && \
  dc run --rm -detach --name=pre_vr --entrypoint "sleep infinity" vr && \
  docker cp pre_vr:/src/visual_regressions/ci_report    ../web/visual_regressions && \
  docker cp pre_vr:/src/visual_regressions/html_report  ../web/visual_regressions && \
  docker cp pre_vr:/src/visual_regressions/bitmaps_test ../web/visual_regressions && \
  dc down
result=$?

if [ ! -r "../web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi

exit $result
