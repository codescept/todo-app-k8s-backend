FROM node:16-alpine
LABEL maintainer="Abdullah"
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV NODE_ENV=production
CMD ["npm", "start"]