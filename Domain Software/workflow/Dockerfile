FROM node:carbon-alpine AS build-env

# Upgrade OS dependencies
RUN apk update && apk upgrade

# Set the working directory to the location of our app
WORKDIR /opt/app

#Timezone
RUN apk add tzdata && cp /usr/share/zoneinfo/UTC /etc/localtime
RUN echo "UTC" > /etc/timezone
RUN date && apk del tzdata

# Copy Node.js App dependency manifest
COPY package.json ./package.json
# Install Node.js dependencies
RUN npm install

# Copy source files
COPY . .

CMD ["npm", "run", "start"]
