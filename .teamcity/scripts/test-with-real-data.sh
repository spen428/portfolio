#!/bin/bash
source "$(dirname "$0")/common.sh"
export DATA_PATH="data"
export IMAGE_TAG="$COMMIT_HASH"
source "$(dirname "$0")/run-tests.step.sh"

cd "$(dirname "$0")/../.." || exit 76
echo "$IMAGE_TAG" > "image-tag.txt"
mkdir new_reference
cp web/visual_regressions/bitmaps_test/*/* new_reference/
rm new_reference/report.json new_reference/failed_diff*
