#!/bin/bash
export COMMIT_HASH="$(git log -n 1 --pretty=format:"%h")"
