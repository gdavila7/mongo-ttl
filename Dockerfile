FROM node:14
WORKDIR /usr/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 7000
CMD ["pm2-runtime start npm -- run start"]