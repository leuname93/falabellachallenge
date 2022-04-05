# ---- Base Node ----
FROM node:lts-alpine 

# Set working directory
WORKDIR /usr/src/app

# Copy project files
COPY package*.json .

# install node packages
RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]