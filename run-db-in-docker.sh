#!/usr/bin/env bash

set -e

name=petstore-mongodb

echo "============================="
echo "REMOVE OLD CONTAINER"
echo "============================="
docker rm -vf ${name} || true

echo "============================="
echo "RUN CONTAINER"
echo "============================="
docker run -d \
  -p 27017:27017 \
  --name "$name" \
  -v petstore-mongo-data:/data/db \
  mongo:3.6.13-xenial

echo "============================="
echo "LOGS"
echo "============================="
docker logs -f ${name}
