FROM node:18

WORKDIR /app

COPY *.json ./

RUN npm i

COPY . .

EXPOSE 8002

CMD [ "npm", "start" ]