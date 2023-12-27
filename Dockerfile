FROM node:14.18.1
WORKDIR /app
COPY build/* ./
COPY package*.json ./
RUN yarn install
CMD ["yarn", "serve", "-s", "build"]
