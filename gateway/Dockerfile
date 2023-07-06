FROM node:18

WORKDIR /app

COPY *.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]