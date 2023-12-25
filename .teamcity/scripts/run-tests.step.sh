#!/bin/bash
function dc() {
  docker-compose -f compose.test.yml "$@"
}

cd "$(dirname "$0")/../../docker" || exit 4

dc build && \
  dc up --abort-on-container-exit vr || true && \
  dc run --rm --detach --name=post_vr --volume=vr_volume --entrypoint "sleep infinity" vr && \
  docker cp post_vr:/src/visual_regressions/ci_report    ../web/visual_regressions && \
  docker cp post_vr:/src/visual_regressions/html_report  ../web/visual_regressions && \
  docker cp post_vr:/src/visual_regressions/bitmaps_test ../web/visual_regressions && \
  dc down
result=$?

if [ ! -r "../web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi

exit $result
