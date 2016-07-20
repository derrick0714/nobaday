FROM node:latest

WORKDIR /apps
ADD src .

RUN npm install && npm run typings install
EXPOSE 3000
