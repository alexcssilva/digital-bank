FROM node:16-alpine

WORKDIR /digital-bank

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3001

CMD ["npm", "start"]