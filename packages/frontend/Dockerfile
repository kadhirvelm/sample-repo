FROM node:18

WORKDIR /usr/sample-repo

COPY ./yarn.lock ./

COPY ./packages/api ./api
COPY ./packages/scss-modules ./scss-modules

COPY ./packages/frontend ./frontend

RUN yarn
