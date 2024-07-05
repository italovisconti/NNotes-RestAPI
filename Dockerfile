FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENV DB_URI=mongodb://mongodb:27017/
ENV PORT=3001

# Deberia ser start en lugar de dev
CMD ["npm", "run", "dev"]