FROM node:14

ENV PORT 4444

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

EXPOSE 4444

# Run the app
CMD "npm" "run" "dev"
