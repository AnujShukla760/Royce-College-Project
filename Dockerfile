FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/AI-Assistant-0.0.1-SNAPSHOT.jar  AI-Assistant-0.0.1-SNAPSHOT.jar
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
ENTRYPOINT ["/wait-for-it.sh", "db:3306", "--timeout=60", "--", "java", "-jar", "AI-Assistant-0.0.1-SNAPSHOT.jar"]