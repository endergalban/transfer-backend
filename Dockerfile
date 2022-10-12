FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./.env.example ./.env

RUN npm run build

CMD [ "node", "dist/main.js" ]