## Create the Dockerfile environments

Client dockerfile

Navigate to the client folder, create a new file and name it Dockerfile.

We will add the following to this file:

FROM node:alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

CMD ["yarn","start"]

> docker build -f Dockerfile -t yob-frontend .

> docker run -it -p 4001:3000 yob-frontend

> docker images -a // list all the available images of docker

## To enter inside yob-frontend docker images

> docker run -it yob-frontend /bin/sh

Refrence

https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
