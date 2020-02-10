FROM alpine

RUN apk add git
RUN git clone https://github.com/iBOOD/idiotlin.git
WORKDIR /idiotlin/mastersolution
EXPOSE 8080
RUN apk add openjdk11-jdk gradle

RUN ./gradlew distTar
WORKDIR /
RUN tar xvf /idiotlin/mastersolution/build/distribution/mastersolution.tar
CMD /mastersolution/bin/mastersolution
