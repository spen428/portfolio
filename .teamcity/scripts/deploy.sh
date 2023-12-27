#!/bin/bash
PORTAINER_STACK_NAME="portfolio"
DATA_PATH="${DATA_PATH:-"data"}"
IMAGE_TAG="$(< image-tag.txt)"

if [ -z "$PORTAINER_ACCESS_TOKEN" ]; then
  echo "You must export the PORTAINER_ACCESS_TOKEN environment variable."
  exit 1
fi

if [ -z "$CORS_ORIGINS" ]; then
  echo "You must export the CORS_ORIGINS environment variable."
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
  status_code=$(curl -w '%{http_code}' -o body.txt -X DELETE "https://portainer.lykat.co.uk/api/stacks/$stackId?endpointId=$endpointId" \
     -H "X-API-Key: $PORTAINER_ACCESS_TOKEN")
  cat body.txt && rm body.txt
  if [ $status_code -ge 400 ]; then
    echo "curl returned HTTP $status_code"
    exit 3
  fi
  echo "Successfully deleted existing stack $stackId"
fi

echo "Creating stack '$PORTAINER_STACK_NAME' on endpoint $PORTAINER_ENDPOINT_ID..."

sed 's#$DATA_PATH#'"${DATA_PATH}#" "$(dirname "$0")/../../docker/compose.host.yml" \
  | sed 's#${IMAGE_TAG}#'"${IMAGE_TAG}#" \
  | sed 's#$CORS_ORIGINS#'"${CORS_ORIGINS}#" > compose.yml

echo "Deploying the following docker-compose body:"
cat compose.yml

status_code=$(curl -w '%{http_code}' -o body.txt -X POST "https://portainer.lykat.co.uk/api/stacks/create/standalone/file?endpointId=$PORTAINER_ENDPOINT_ID" \
   -H "X-API-Key: $PORTAINER_ACCESS_TOKEN" \
   -F "Name=$PORTAINER_STACK_NAME" \
   -F "Env=[{\"name\":\"DATA_PATH\",\"value\":\"$DATA_PATH\"},{\"name\":\"IMAGE_TAG\",\"value\":\"$IMAGE_TAG\"}]" \
   -F "file=@compose.yml")

rm compose.yml
cat body.txt && rm body.txt
if [ $status_code -ge 400 ]; then
  echo "curl returned HTTP $status_code"
  exit 4
fi

echo "Deployment complete"
