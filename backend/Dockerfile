FROM node:16

WORKDIR /usr/test/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm rebuild bcrypt --build

EXPOSE 5000

CMD ["npm", "start"]
