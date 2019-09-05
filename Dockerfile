FROM node:stretch-slim

WORKDIR /usr/app

COPY package*json ./
RUN npm install

COPY . .
EXPOSE $PORT

CMD ["npm", "start"]