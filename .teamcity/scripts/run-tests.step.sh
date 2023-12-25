#!/bin/bash

projectName=$(< /proc/sys/kernel/random/uuid)

function dc() {
  docker-compose --project-name $projectName -f compose.test.yml "$@"
}

cd "$(dirname "$0")/../../docker" || exit 4
export VR_VOLUME_NAME=$(< /proc/sys/kernel/random/uuid)

dc build
docker volume rm "$VR_VOLUME_NAME" || true
dc up --abort-on-container-exit vr || true
container=$(dc run --rm --detach --volume="$VR_VOLUME_NAME" --entrypoint "sleep infinity" vr)
docker cp $container:/src/visual_regressions/ci_report    ../web/visual_regressions
docker cp $container:/src/visual_regressions/html_report  ../web/visual_regressions
docker cp $container:/src/visual_regressions/bitmaps_test ../web/visual_regressions
docker cp $container:/src/visual_regressions/pdf_test ../web/visual_regressions
docker cp $container:/src/bin ../web
dc down
docker volume rm "$VR_VOLUME_NAME" || true

if [ ! -r "../web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi
