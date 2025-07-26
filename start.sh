#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎮 Prime Gaming Website - Quick Start${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo -e "${RED}❌ Go is not installed. Please install Go first.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing dependencies...${NC}"

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

echo -e "\n${YELLOW}🚀 Starting backend server...${NC}"

# Start backend in background
cd backend
go mod download
echo "Starting backend on port 8081..."
go run . &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Test if backend is running
if curl -s http://localhost:8081/api/health > /dev/null; then
    echo -e "${GREEN}✅ Backend server started successfully!${NC}"
else
    echo -e "${RED}❌ Backend server failed to start!${NC}"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

cd ..

echo -e "\n${YELLOW}🌐 Starting frontend server...${NC}"

# Start frontend
echo "Starting frontend..."
npm run dev &
FRONTEND_PID=$!

# Wait a bit for frontend to start
sleep 5

echo -e "\n${GREEN}🎉 Both servers are running!${NC}"
echo -e "${BLUE}📱 Frontend:${NC} http://localhost:3000 (or 3000 if 3000 is busy)"
echo -e "${BLUE}🔧 Backend API:${NC} http://localhost:8081/api"
echo -e "\n${YELLOW}📝 Available API endpoints:${NC}"
echo "  • GET  /api/health - Health check"
echo "  • GET  /api/games - Get all games"
echo "  • GET  /api/categories - Get categories"
echo "  • GET  /api/news - Get news articles"
echo "  • POST /api/register - Register user"
echo "  • POST /api/login - Login user"

echo -e "\n${YELLOW}💡 To stop the servers:${NC}"
echo "  Press Ctrl+C to stop this script"
echo "  Or run: killall node && killall prime-gaming-backend"

echo -e "\n${GREEN}🚀 Happy coding!${NC}\n"

# Function to cleanup background processes
cleanup() {
    echo -e "\n${YELLOW}🛑 Stopping servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✅ Servers stopped successfully!${NC}"
    exit 0
}

# Trap SIGINT (Ctrl+C) to cleanup
trap cleanup SIGINT

# Wait for user to press Ctrl+C
while true; do
    sleep 1
done
