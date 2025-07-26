#!/bin/bash

BASE_URL="http://localhost:8080/api"

echo "🚀 Testing Prime Gaming API..."
echo "================================"

# Test Health Check
echo "1. Testing Health Check..."
curl -s -X GET "$BASE_URL/health" | jq '.'
echo -e "\n"

# Test Get All Games
echo "2. Testing Get All Games..."
curl -s -X GET "$BASE_URL/games" | jq '.[0:2]'  # Show first 2 games
echo -e "\n"

# Test Get Featured Games
echo "3. Testing Get Featured Games..."
curl -s -X GET "$BASE_URL/games?featured=true" | jq '.[0:1]'  # Show first featured game
echo -e "\n"

# Test Get Single Game
echo "4. Testing Get Single Game (ID: 1)..."
curl -s -X GET "$BASE_URL/games/1" | jq '.'
echo -e "\n"

# Test Search Games
echo "5. Testing Search Games (query: Witcher)..."
curl -s -X GET "$BASE_URL/games/search?q=Witcher" | jq '.'
echo -e "\n"

# Test Get Categories
echo "6. Testing Get Categories..."
curl -s -X GET "$BASE_URL/categories" | jq '.[0:2]'  # Show first 2 categories
echo -e "\n"

# Test Get News
echo "7. Testing Get News..."
curl -s -X GET "$BASE_URL/news" | jq '.[0:1]'  # Show first news article
echo -e "\n"

#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:8081/api"

echo -e "${YELLOW}Testing Prime Gaming API...${NC}\n"

# Function to test endpoint
test_endpoint() {
    local method=$1
    local endpoint=$2
    local data=$3
    local description=$4
    
    echo -e "${YELLOW}Testing: $description${NC}"
    echo "Endpoint: $method $BASE_URL$endpoint"
    
    if [ -n "$data" ]; then
        echo "Data: $data"
        response=$(curl -s -X $method -H "Content-Type: application/json" -d "$data" "$BASE_URL$endpoint")
    else
        response=$(curl -s -X $method "$BASE_URL$endpoint")
    fi
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Success${NC}"
        echo "Response: $response"
    else
        echo -e "${RED}✗ Failed${NC}"
    fi
    echo "----------------------------------------"
}

# Test health check
test_endpoint "GET" "/health" "" "Health Check"

# Test get all games
test_endpoint "GET" "/games" "" "Get All Games"

# Test get specific game
test_endpoint "GET" "/games/1" "" "Get Game by ID"

# Test get categories
test_endpoint "GET" "/categories" "" "Get Categories"

# Test get news
test_endpoint "GET" "/news" "" "Get News Articles"

# Test search games
test_endpoint "GET" "/games/search?q=witcher" "" "Search Games (witcher)"

# Test user registration
test_endpoint "POST" "/register" '{"name":"Test User","email":"test@example.com","password":"password123"}' "Register User"

# Test user login
test_endpoint "POST" "/login" '{"email":"test@example.com","password":"password123"}' "Login User"

# Test invalid login
test_endpoint "POST" "/login" '{"email":"invalid@example.com","password":"wrongpassword"}' "Invalid Login"

echo -e "\n${GREEN}API testing completed!${NC}"

# Test Invalid Login
echo "10. Testing Invalid Login..."
INVALID_LOGIN=$(curl -s -X POST "$BASE_URL/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "wrong@example.com",
    "password": "wrongpassword"
  }')
echo "$INVALID_LOGIN"
echo -e "\n"

echo "✅ API Testing Complete!"
