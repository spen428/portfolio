#!/bin/bash
dc() {
  docker-compose --project-name "$PROJECT_NAME" -f compose.test.yml "$@"
}

start_stack() {
  dc build || exit 5
  docker volume rm "$VR_VOLUME_NAME" || echo "It is safe to ignore the above error."
  dc up --abort-on-container-exit vr || exit 6
}

stop_stack() {
  dc down || exit 9
  docker volume rm "$VR_VOLUME_NAME" || exit 10
}

copy_results_to_host() {
  rm -rfv ../web/{bin,html_report,ci_report,pdf_test}
  container=$(dc run --rm --detach --volume="$VR_VOLUME_NAME" --entrypoint "sleep infinity" vr || exit 7)
  docker cp $container:/src/visual_regressions/ci_report ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/html_report ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/bitmaps_test ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/pdf_test ../web/visual_regressions && \
    docker cp $container:/src/bin ../web || exit 8
}

export PROJECT_NAME="$(< /proc/sys/kernel/random/uuid)"
export VR_VOLUME_NAME="$(< /proc/sys/kernel/random/uuid)"

cd "$(dirname "$0")/../../docker" || exit 4

start_stack
copy_results_to_host
stop_stack

if [ ! -r "../web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi
