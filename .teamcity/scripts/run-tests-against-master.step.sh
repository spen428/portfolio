#!/bin/bash
source "$(dirname "$0")/common.sh"
export DATA_PATH="data"
export IMAGE_TAG="$COMMIT_HASH"
echo "$IMAGE_TAG" > "$(dirname "$0")/../../image-tag.txt"

source "$(dirname "$0")/run-tests.step.sh"

cd "$(dirname "$0")../.." || exit 76
mkdir new_reference
cp web/visual_regressions/bitmaps_test/*/* new_reference/
rm new_reference/report.json new_reference/failed_diff*
