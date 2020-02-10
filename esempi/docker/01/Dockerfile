FROM alpine

# clone repo
RUN apk add git
RUN git clone https://github.com/iBOOD/idiotlin.git

# build java application
WORKDIR /idiotlin/mastersolution
RUN apk add openjdk11-jdk gradle
RUN ./gradlew distTar

# extract binaries and execute it
EXPOSE 8080
WORKDIR /
RUN tar xvf /idiotlin/mastersolution/build/distribution/mastersolution.tar
CMD /mastersolution/bin/mastersolution
