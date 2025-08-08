#!/bin/bash

# Test script for the enterprise application

# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Display success message
echo "All tests completed successfully!"