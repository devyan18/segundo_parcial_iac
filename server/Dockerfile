FROM node:18-alpine

WORKDIR /segundo_parcial

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]