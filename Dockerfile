# Create image based on the official Node 6 image from dockerhub
FROM node:alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY . /usr/src/app

# Proxy for prod
RUN mv /usr/src/app/proxy.conf.prod.json /usr/src/app/proxy.conf.json

# Install dependecies
RUN yarn

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
