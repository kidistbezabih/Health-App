FROM node:22-alpine

WORKDIR /user/src/app
COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build
EXPOSE 4000

CMD ["npm", "start"]

