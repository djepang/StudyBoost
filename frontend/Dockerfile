FROM node:14 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]