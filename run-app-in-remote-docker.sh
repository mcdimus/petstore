#!/usr/bin/env bash

set -e

user=$USER
name=petstore
warName=${name}

echo "============================="
echo "BUILD"
echo "============================="
./gradlew fatWar

echo "============================="
echo "REMOVE OLD CONTAINER"
echo "============================="
ssh ${user}@afha.webmedia.int docker rm -vf ${name} || true

echo "============================="
echo "RUN CONTAINER"
echo "============================="
ssh ${user}@afha.webmedia.int docker run -d \
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

scp ${warName}.war ${user}@afha.webmedia.int:/home/${user}
ssh ${user}@afha.webmedia.int docker cp /home/${user}/${warName}.war ${name}:/usr/local/tomcat/webapps/${warName}.war

cd -

echo "============================="
echo "LOGS"
echo "============================="
ssh ${user}@afha.webmedia.int docker logs -f ${name}
