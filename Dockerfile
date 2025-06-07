FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/AI-Assistant-0.0.1-SNAPSHOT.jar  AI-Assistant-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar" ,"AI-Assistant-0.0.1-SNAPSHOT.jar"]