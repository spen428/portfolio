#!/bin/bash
export DATA_PATH=data
export NODE_ENV=production
source "$(dirname "$0")/run-tests.step.sh"
