FROM node:18
WORKDIR /app
RUN chmod 777 /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]