#!/bin/bash
source "$(dirname "$0")/common.sh"
export DATA_PATH="data"
export IMAGE_TAG="$COMMIT_HASH"
source "$(dirname "$0")/run-tests.step.sh"
