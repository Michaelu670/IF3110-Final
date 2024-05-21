FROM maven:3.3-jdk-8-alpine AS maven
ENV HOME=/app
RUN mkdir -p $HOME
COPY . $HOME
WORKDIR $HOME
RUN mvn clean package assembly:single

FROM amazoncorretto:8
ENV MAVEN_HOME=/app
ENV JAR_FILE="${MAVEN_HOME}/target/SOAP-service-1.0-SNAPSHOT-jar-with-dependencies.jar"
RUN mkdir -p /app
COPY --from=maven $JAR_FILE /app/service.jar
EXPOSE 8067
ENTRYPOINT java -jar /app/service.jar


