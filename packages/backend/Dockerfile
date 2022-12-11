FROM node:18

WORKDIR /usr/sample-repo

COPY ./yarn.lock ./

COPY ./packages/api ./api
COPY ./packages/backend ./backend

RUN yarn
