#!/bin/bash

echo "Stopping existing Go server..."
pkill -f "go run"

echo "Starting Go server..."
cd backend
go run . &

echo "Server restarted successfully!"
