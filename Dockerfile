# to import base img
FROM node:18

#creating working dir
WORKDIR /app

#to copy code

COPY . .

#install dependency

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]
