FROM node:latest

WORKDIR /webapp
ADD webapp .

RUN npm install

RUN npm run build:prod

EXPOSE 8080

CMD ["npm", "run", "server:prod"]
