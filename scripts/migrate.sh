#!/bin/bash

# Database migration script for the enterprise application

# Run database migrations
npx sequelize-cli db:migrate

# Display success message
echo "Database migration completed successfully!"