FROM --platform=linux/arm64/v8 node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .
RUN chown -R node:node /app
USER node
EXPOSE 4000
CMD ["node", "server.js"]
