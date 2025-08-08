#!/bin/bash

# Deployment script for the enterprise application

# Pull the latest changes from the repository
git pull origin main

# Install any new dependencies
npm install

# Build the project
./scripts/build.sh

# Migrate the database
./scripts/migrate.sh

# Restart the application with PM2
pm2 restart enterprise-app

# Display success message
echo "Deployment completed successfully!"