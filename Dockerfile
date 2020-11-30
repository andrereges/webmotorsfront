FROM node:12-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

VOLUME . /usr/app

RUN yarn

RUN yarn build

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
