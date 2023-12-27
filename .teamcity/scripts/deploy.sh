#!/bin/bash
source "$(dirname "$0")/common.sh"
PORTAINER_ACCESS_TOKEN="ptr_NykXmtGTIcypnRvukiwC42rJUO66M5vDwsBZvsRx6Uo="
PORTAINER_STACK_NAME="portfolio"
DATA_PATH="${DATA_PATH:-"data"}"
IMAGE_TAG="$COMMIT_HASH"

if [ -z "$PORTAINER_ACCESS_TOKEN" ]; then
  echo "You must export the PORTAINER_ACCESS_TOKEN environment variable."
  exit 1
fi

echo "Getting endpoints..."
endpoints="$(curl -X GET "https://portainer.lykat.co.uk/api/endpoints?excludeSnapshots=true" -H "X-API-Key: $PORTAINER_ACCESS_TOKEN")"
echo "$endpoints"
PORTAINER_ENDPOINT_ID=$(node -e "console.log(JSON.parse('$endpoints')[0].Id);")
echo "We will deploy to endpointId $PORTAINER_ENDPOINT_ID"

echo "Getting stacks..."
stacks=$(curl -X GET "https://portainer.lykat.co.uk/api/stacks" -H "X-API-Key: $PORTAINER_ACCESS_TOKEN")
echo "$stacks"

if [ "$stacks" != "[]" ]; then
  echo "Deleting stack..."
  stackId=$(node -e "console.log(JSON.parse('$stacks')[0].Id);")
  endpointId=$(node -e "console.log(JSON.parse('$stacks')[0].EndpointId);")
  curl --fail-with-body -X DELETE "https://portainer.lykat.co.uk/api/stacks/$stackId?endpointId=$endpointId" \
     -H "X-API-Key: $PORTAINER_ACCESS_TOKEN" || exit 3
  echo "Successfully deleted existing stack $stackId"
fi

echo "Creating stack '$PORTAINER_STACK_NAME' on endpoint $PORTAINER_ENDPOINT_ID..."
dockerComposeFilePath="$(dirname "$0")/../../docker/compose.host.yml"
curl --fail-with-body -X POST "https://portainer.lykat.co.uk/api/stacks/create/standalone/file?endpointId=$PORTAINER_ENDPOINT_ID" \
   -H "X-API-Key: $PORTAINER_ACCESS_TOKEN" \
   -F "Name=$PORTAINER_STACK_NAME" \
   -F "Env=[{\"name\":\"DATA_PATH\",\"value\":\"$DATA_PATH\"},{\"name\":\"IMAGE_TAG\",\"value\":\"$IMAGE_TAG\"}]" \
   -F "file=@$dockerComposeFilePath" || exit 4

echo "Deployment complete"
