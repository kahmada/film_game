package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"

    "github.com/gorilla/mux"
)

func TestGetGames(t *testing.T) {
    req, err := http.NewRequest("GET", "/api/games", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(getGames)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var games []Game
    if err := json.Unmarshal(rr.Body.Bytes(), &games); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if len(games) == 0 {
        t.Error("Expected games to be returned")
    }
}

func TestGetGame(t *testing.T) {
    req, err := http.NewRequest("GET", "/api/games/1", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    
    // Create router to handle path variables
    router := mux.NewRouter()
    router.HandleFunc("/api/games/{id}", getGame).Methods("GET")
    router.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var game Game
    if err := json.Unmarshal(rr.Body.Bytes(), &game); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if game.ID != 1 {
        t.Errorf("Expected game ID 1, got %d", game.ID)
    }
}

func TestGetGameNotFound(t *testing.T) {
    req, err := http.NewRequest("GET", "/api/games/999", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    
    router := mux.NewRouter()
    router.HandleFunc("/api/games/{id}", getGame).Methods("GET")
    router.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusNotFound {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusNotFound)
    }
}

func TestRegisterUser(t *testing.T) {
    user := User{
        Name:     "Test User",
        Email:    "test@example.com",
        Password: "password123",
    }

    jsonData, _ := json.Marshal(user)
    req, err := http.NewRequest("POST", "/api/register", bytes.NewBuffer(jsonData))
    if err != nil {
        t.Fatal(err)
    }
    req.Header.Set("Content-Type", "application/json")

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(registerUser)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var response map[string]interface{}
    if err := json.Unmarshal(rr.Body.Bytes(), &response); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if response["message"] != "User registered successfully" {
        t.Error("Expected success message")
    }
}

func TestLoginUser(t *testing.T) {
    // First register a user
    user := User{
        Name:     "Login Test",
        Email:    "login@example.com",
        Password: "password123",
    }
    users = append(users, user)

    loginData := map[string]string{
        "email":    "login@example.com",
        "password": "password123",
    }

    jsonData, _ := json.Marshal(loginData)
    req, err := http.NewRequest("POST", "/api/login", bytes.NewBuffer(jsonData))
    if err != nil {
        t.Fatal(err)
    }
    req.Header.Set("Content-Type", "application/json")

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(loginUser)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var response map[string]interface{}
    if err := json.Unmarshal(rr.Body.Bytes(), &response); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if response["message"] != "Login successful" {
        t.Error("Expected login success message")
    }
}

func TestSearchGames(t *testing.T) {
    req, err := http.NewRequest("GET", "/api/games/search?q=Witcher", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(searchGames)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var games []Game
    if err := json.Unmarshal(rr.Body.Bytes(), &games); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if len(games) == 0 {
        t.Error("Expected search results")
    }
}

func TestGetCategories(t *testing.T) {
    req, err := http.NewRequest("GET", "/api/categories", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(getCategories)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    var categories []Category
    if err := json.Unmarshal(rr.Body.Bytes(), &categories); err != nil {
        t.Errorf("Could not parse response: %v", err)
    }

    if len(categories) == 0 {
        t.Error("Expected categories to be returned")
    }
}
