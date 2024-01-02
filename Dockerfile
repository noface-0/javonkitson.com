FROM node:14.18.1
WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "80"]

EXPOSE 80
