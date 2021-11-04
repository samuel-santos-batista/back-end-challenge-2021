FROM node:12.16.1-alpine3.11

# Create app directory
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package*.json ./

#RUN npm install -g migrate-mongo
#RUN npm install -g nodemon
#RUN npm install mongoose-seed
RUN npm install

# Bundle app source
COPY . .


CMD [ "npm", "run", "dev" ]