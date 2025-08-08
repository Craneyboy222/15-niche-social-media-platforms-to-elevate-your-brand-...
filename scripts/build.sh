#!/bin/bash

# Build script for the enterprise application

# Clean previous builds
rm -rf build

# Compile the application
npm run build

# Display success message
echo "Build completed successfully!"