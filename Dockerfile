FROM node:21-alpine3.19

COPY package.json /app/

COPY src /app/

WORKDIR /app/

RUN npm install

# WORKDIR /app/src

CMD ["node", "server.js"]