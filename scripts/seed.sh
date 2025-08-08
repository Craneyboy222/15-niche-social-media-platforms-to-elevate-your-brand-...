#!/bin/bash

# Database seeding script for the enterprise application

# Seed the database with initial data
npx sequelize-cli db:seed:all

# Display success message
echo "Database seeding completed successfully!"