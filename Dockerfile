FROM node:21-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN apk update
RUN yarn install
COPY . .
RUN yarn build
