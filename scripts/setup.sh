#!/bin/bash

# Setup script for the enterprise application

# Update package lists
sudo apt-get update

# Install necessary packages
sudo apt-get install -y nodejs npm postgresql postgresql-contrib

# Install AWS CLI for managing AWS resources
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Install PM2 for process management
sudo npm install -g pm2

# Install project dependencies
npm install

# Create environment file
cat <<EOT >> .env
NODE_ENV=production
DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
JWT_SECRET=mysecretkey
AWS_ACCESS_KEY_ID=youraccesskey
AWS_SECRET_ACCESS_KEY=yoursecretkey
AWS_REGION=us-west-2
S3_BUCKET_NAME=yourbucketname
EOT

# Setup PostgreSQL database
sudo -u postgres psql -c "CREATE DATABASE mydatabase;"
sudo -u postgres psql -c "CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;"

# Run migrations
./scripts/migrate.sh

# Seed the database
./scripts/seed.sh

# Build the project
./scripts/build.sh

# Start the application
pm2 start build/index.js --name enterprise-app

# Display success message
echo "Setup completed successfully!"