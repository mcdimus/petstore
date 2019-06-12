#!/usr/bin/env bash

set -e

name=petstore
warName=${name}

echo "============================="
echo "BUILD"
echo "============================="
./gradlew fatWar

echo "============================="
echo "REMOVE OLD CONTAINER"
echo "============================="
docker rm -vf ${name} || true

echo "============================="
echo "RUN CONTAINER"
echo "============================="
docker run -d \
  -p 8020:8080 \
  -p 9020:49540 \
  --name "$name" \
  --link "petstore-mongodb" \
  -e "CATALINA_OPTS=-agentlib:jdwp=transport=dt_socket,address=49540,suspend=n,server=y" \
  tomcat:9-jre8-alpine

echo "============================="
echo "DEPLOY $warName.war"
echo "============================="

cd build/libs
mv ${warName}*.war ${warName}.war

jar -xvf ${warName}.war WEB-INF/classes/application.docker.properties
mv WEB-INF/classes/application.docker.properties WEB-INF/classes/application.properties
jar -uvf ${warName}.war WEB-INF/classes/application.properties

docker cp ${warName}.war ${name}:/usr/local/tomcat/webapps/${warName}.war

cd -

echo "============================="
echo "LOGS"
echo "============================="
docker logs -f ${name}
