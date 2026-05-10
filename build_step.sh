#!/bin/bash

echo "===== Starting Render Build ====="

# Install dependencies
echo "Installing npm packages..."
npm install

# Build React app with webpack
echo "Building React app..."
npm run build

echo "===== Build Complete ====="
echo "Your app will start with: npm start"