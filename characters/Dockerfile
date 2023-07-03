FROM node:18

WORKDIR /app

COPY *.json ./

RUN npm i

COPY . .

EXPOSE 8001

CMD [ "npm", "start" ]