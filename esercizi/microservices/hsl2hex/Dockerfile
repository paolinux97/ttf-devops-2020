FROM node:alpine
COPY /dist /app/dist
WORKDIR /app/dist/hsl2hex/src
EXPOSE 3000
CMD ["node", "HttpServer.js"]
