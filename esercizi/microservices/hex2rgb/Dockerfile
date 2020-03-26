FROM node:alpine
COPY /dist /app/dist
WORKDIR /app/dist/hex2rgb/src
EXPOSE 3000
CMD ["node", "HttpServer.js"]
