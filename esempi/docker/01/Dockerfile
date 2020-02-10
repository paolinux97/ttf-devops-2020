FROM alpine AS clone_repo
# clone repo
RUN apk add git
RUN git clone https://github.com/iBOOD/idiotlin.git

FROM alpine AS build_java
# build java application
COPY --from=clone_repo /idiotlin/mastersolution .
RUN apk add openjdk11-jdk gradle
RUN ./gradlew distTar

FROM alpine
# extract binaries and execute it
EXPOSE 8080
COPY --from=build_java /idiotlin/mastersolution/build/distributions/mastersolution.tar .
RUN tar xvf /mastersolution.tar
CMD /mastersolution/bin/mastersolution
