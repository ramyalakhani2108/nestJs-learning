FROM node:23.2.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the application port
EXPOSE 3000
EXPOSE 3001

# Start the application
CMD npm run start:dev & npm run doc