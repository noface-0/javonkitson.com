FROM node:14.18.1
COPY build/* /app
COPY package*.json /app
RUN yarn install
WORKDIR /app
CMD ["yarn", "serve"]
