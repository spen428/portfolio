#!/bin/bash
source "$(dirname "$0")/common.sh"
export DATA_PATH="dummy"
export IMAGE_TAG="$COMMIT_HASH-test"

source "$(dirname "$0")/run-tests.step.sh"
docker image rm "portfolio-web:$IMAGE_TAG" "portfolio-api:$IMAGE_TAG"
