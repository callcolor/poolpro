FROM node:24.2.0

# Set environment variables
ENV PORT=5010

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Compile TypeScript files
RUN npm run build

# Command to run the application
EXPOSE 5010
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
