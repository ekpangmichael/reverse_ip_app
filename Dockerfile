FROM --platform=linux/arm64 node:16-alpine
WORKDIR /app
COPY package*.json ./

COPY . .
RUN yarn install --production
RUN chown -R node:node /app
USER node
EXPOSE 4000
CMD ["node", "server.js"]

