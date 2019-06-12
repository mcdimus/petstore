#!/usr/bin/env bash

set -e

name=petstore-mongodb
user=$USER

echo "============================="
echo "REMOVE OLD CONTAINER"
echo "============================="
ssh ${user}@afha.webmedia.int docker rm -vf ${name} || true

echo "============================="
echo "RUN CONTAINER"
echo "============================="
ssh ${user}@afha.webmedia.int docker run -d \
  -p 27017:27017 \
  --name "$name" \
  -v petstore-mongo-data:/data/db \
  mongo:3.6.13-xenial

echo "============================="
echo "LOGS"
echo "============================="
ssh ${user}@afha.webmedia.int docker logs -f ${name}
