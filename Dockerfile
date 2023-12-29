FROM node:14.18.1
WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80

CMD ["yarn", "serve", "-s", "build", "-l", "80"]
