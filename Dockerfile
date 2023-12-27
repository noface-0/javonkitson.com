FROM node:14.18.1
WORKDIR /app
COPY build/* ./
COPY package*.json ./
RUN yarn install
EXPOSE 80
CMD ["yarn", "serve", "-s", "-l", "80"]
