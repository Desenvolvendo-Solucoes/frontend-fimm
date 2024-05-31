FROM node:18

WORKDIR /www/app

COPY . /www/app

RUN npm install

RUN npm run build

RUN 

EXPOSE 3000

CMD [ "npm", "start" ]