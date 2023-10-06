FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["yarn", "run", "dev"]
EXPOSE 3000