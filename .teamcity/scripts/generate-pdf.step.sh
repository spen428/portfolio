#!/bin/bash
export DEBUG=express:router
export DATA_PATH=data
export NODE_ENV=production
export SERVER_PORT=15000
pnpm run run:prod &
pid=$!

while true; do
  echo "Waiting for API to start..."
  curl -s "http://localhost:${SERVER_PORT}" > /dev/null
  [ $? -ne 0 ] || break
  sleep 1
done
while true; do
  echo "Waiting for Vite to start..."
  curl -s "http://localhost:5173" > /dev/null
  [ $? -ne 0 ] || break
  sleep 1
done
echo "Ready."

pnpm run --filter web pdf
result=$?

kill -INT $pid || true
sleep 1

while [ -n "$(ps | grep $pid)" ]; do
  kill -KILL $pid || true
  sleep 1
done

if [ $result -ne 0 ]; then
  exit $result
fi

DATE=$(date '+%Y-%m-%d')
mv web/bin/CV.pdf "web/bin/[${DATE}] CV.pdf"
