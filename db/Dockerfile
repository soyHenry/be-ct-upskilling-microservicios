FROM node:18

WORKDIR /app

COPY *.json ./

RUN npm i

COPY . .

EXPOSE 8004

CMD [ "npm", "start" ]