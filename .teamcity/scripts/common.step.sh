#!/bin/bash
function start_services() {
  local serverPort=$1
  local clientPort=$2

  pnpm run run:prod &
  echo $! > .pid

  while true; do
    echo "Waiting for API to start..."
    curl -s "http://localhost:${serverPort}" > /dev/null
    [ $? -ne 0 ] || break
    sleep 1
  done
  while true; do
    echo "Waiting for Vite to start..."
    curl -s "http://localhost:${clientPort}" > /dev/null
    [ $? -ne 0 ] || break
    sleep 1
  done
  echo "Ready."
}

function stop_services() {
  pid=$(< .pid)
  kill -INT "$pid" || true
  sleep 1

  while [ -n "$(ps | grep "$pid")" ]; do
    kill -KILL "$pid" || true
    sleep 1
  done
}
