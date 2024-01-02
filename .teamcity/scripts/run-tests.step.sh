#!/bin/bash
dc() {
  docker-compose --project-name "$PROJECT_NAME" -f compose.test.yml "$@"
}

start_stack() {
  dc build || exit 5
  dc up --abort-on-container-exit vr || exit 6
}

stop_stack() {
  dc down --volumes --remove-orphans || exit 9
  docker image rm "vr:$IMAGE_TAG" || exit 10
}

copy_results_to_host() {
  rm -rfv ../web/{bin,html_report,ci_report,pdf_test}
  container=$(dc run --rm --detach --volume="$VR_VOLUME_NAME" --entrypoint "sleep infinity" vr || exit 7)
  docker cp $container:/src/visual_regressions/ci_report ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/html_report ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/bitmaps_test ../web/visual_regressions && \
    docker cp $container:/src/visual_regressions/pdf_test ../web/visual_regressions && \
    docker cp $container:/src/bin ../web
  if [ $? -ne 0 ]; then
     stop_stack && exit 8
  fi
}

if [ -z "$IMAGE_TAG" ]; then
  echo "You must export the IMAGE_TAG environment variable."
  exit 16
fi

export PROJECT_NAME="${PROJECT_NAME:-$(< /proc/sys/kernel/random/uuid)}"
export VR_VOLUME_NAME="$(< /proc/sys/kernel/random/uuid)"

cd "$(dirname "$0")/../../docker" || exit 4

trap 'stop_stack; exit 99' SIGINT
trap 'stop_stack; exit 99' SIGQUIT

start_stack
copy_results_to_host
stop_stack

if [ ! -r "../web/visual_regressions/ci_report/xunit.xml" ]; then
  echo "No test report could be found after running the tests."
  exit 33
fi
