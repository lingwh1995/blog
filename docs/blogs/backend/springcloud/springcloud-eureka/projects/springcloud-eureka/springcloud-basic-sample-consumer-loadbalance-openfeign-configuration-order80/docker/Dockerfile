FROM java:8
VOLUME /software
MAINTAINER lingwh
COPY ${project.build.finalName}.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
