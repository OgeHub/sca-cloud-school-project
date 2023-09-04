FROM node:18-alpine3.17

WORKDIR /home

COPY package*.json ./

COPY ./src .

RUN npm install

EXPOSE 3003

CMD [ "node", "server.js" ]