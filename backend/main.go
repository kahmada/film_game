package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "strings"
    "time"

    "github.com/gorilla/mux"
    "github.com/rs/cors"
)

// Game represents a game in our system
type Game struct {
    ID          int     `json:"id"`
    Title       string  `json:"title"`
    Description string  `json:"description"`
    Rating      float64 `json:"rating"`
    Year        int     `json:"year"`
    Genre       string  `json:"genre"`
    Platform    string  `json:"platform"`
    Price       float64 `json:"price"`
    SalePrice   float64 `json:"sale_price"`
    Discount    int     `json:"discount"`
    Image       string  `json:"image"`
    Featured    bool    `json:"featured"`
}

// User represents a user in our system
type User struct {
    ID       int    `json:"id"`
    Name     string `json:"name"`
    Email    string `json:"email"`
    Password string `json:"password,omitempty"`
}

// Category represents a game category
type Category struct {
    ID          int    `json:"id"`
    Title       string `json:"title"`
    Description string `json:"description"`
    Image       string `json:"image"`
    GameCount   int    `json:"game_count"`
}

// NewsArticle represents a news article
type NewsArticle struct {
    ID          int       `json:"id"`
    Title       string    `json:"title"`
    Content     string    `json:"content"`
    Category    string    `json:"category"`
    Image       string    `json:"image"`
    PublishedAt time.Time `json:"published_at"`
}

// In-memory storage (replace with database in production)
var games []Game
var users []User
var categories []Category
var newsArticles []NewsArticle

func init() {
    // Initialize sample data
    games = []Game{
        {
            ID: 1, Title: "The Witcher 3", Description: "Open-world RPG adventure",
            Rating: 93, Year: 2015, Genre: "Action RPG", Platform: "PC, PS4, Xbox One",
            Price: 40, SalePrice: 32, Discount: 20, Featured: true,
        },
        {
            ID: 2, Title: "Black Myth Wukong", Description: "Action RPG inspired by Journey to the West",
            Rating: 81, Year: 2024, Genre: "Action RPG", Platform: "PC, PS5",
            Price: 60, SalePrice: 51, Discount: 15, Featured: true,
        },
        {
            ID: 3, Title: "Spider-Man 2", Description: "Superhero action adventure",
            Rating: 87, Year: 2023, Genre: "Action Adventure", Platform: "PS5",
            Price: 50, SalePrice: 35, Discount: 30, Featured: true,
        },
    }

    categories = []Category{
        {ID: 1, Title: "Sports & Racing", Description: "Experience real-world sports and racing", GameCount: 25},
        {ID: 2, Title: "RPG", Description: "Role-playing games", GameCount: 45},
        {ID: 3, Title: "Adventure", Description: "Adventure and exploration games", GameCount: 32},
        {ID: 4, Title: "Strategy", Description: "Strategic thinking games", GameCount: 18},
        {ID: 5, Title: "Survival", Description: "Survival and crafting games", GameCount: 22},
        {ID: 6, Title: "Action", Description: "Fast-paced action games", GameCount: 38},
    }

    newsArticles = []NewsArticle{
        {
            ID: 1, Title: "FC25 Prepares for October 2024 Release with Enhanced Realism",
            Content: "EA Sports announces major improvements to FIFA 25...",
            Category: "Sports", PublishedAt: time.Now().AddDate(0, 0, -1),
        },
        {
            ID: 2, Title: "The Witcher 4 Expected to Bring Back Fan-Favorite Characters",
            Content: "CD Projekt RED hints at returning characters...",
            Category: "RPG", PublishedAt: time.Now().AddDate(0, 0, -2),
        },
    }
}

// API Handlers

func getGames(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    // Query parameters
    category := r.URL.Query().Get("category")
    featured := r.URL.Query().Get("featured")
    
    var filteredGames []Game
    
    for _, game := range games {
        if category != "" && game.Genre != category {
            continue
        }
        if featured == "true" && !game.Featured {
            continue
        }
        filteredGames = append(filteredGames, game)
    }
    
    json.NewEncoder(w).Encode(filteredGames)
}

func getGame(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    params := mux.Vars(r)
    
    id, err := strconv.Atoi(params["id"])
    if err != nil {
        http.Error(w, "Invalid game ID", http.StatusBadRequest)
        return
    }
    
    for _, game := range games {
        if game.ID == id {
            json.NewEncoder(w).Encode(game)
            return
        }
    }
    
    http.Error(w, "Game not found", http.StatusNotFound)
}

func getCategories(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(categories)
}

func getNews(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(newsArticles)
}

func registerUser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }
    
    // Check if user already exists
    for _, existingUser := range users {
        if existingUser.Email == user.Email {
            http.Error(w, "User already exists", http.StatusConflict)
            return
        }
    }
    
    // Assign ID and add user
    user.ID = len(users) + 1
    users = append(users, user)
    
    // Don't return password
    user.Password = ""
    json.NewEncoder(w).Encode(map[string]interface{}{
        "message": "User registered successfully",
        "user":    user,
    })
}

func loginUser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    var loginData struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    
    if err := json.NewDecoder(r.Body).Decode(&loginData); err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }
    
    // Find user
    for _, user := range users {
        if user.Email == loginData.Email && user.Password == loginData.Password {
            // Don't return password
            user.Password = ""
            json.NewEncoder(w).Encode(map[string]interface{}{
                "message": "Login successful",
                "user":    user,
            })
            return
        }
    }
    
    http.Error(w, "Invalid credentials", http.StatusUnauthorized)
}

func searchGames(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    query := r.URL.Query().Get("q")
    if query == "" {
        json.NewEncoder(w).Encode([]Game{})
        return
    }
    
    var results []Game
    queryLower := strings.ToLower(query)
    
    for _, game := range games {
        titleLower := strings.ToLower(game.Title)
        descLower := strings.ToLower(game.Description)
        genreLower := strings.ToLower(game.Genre)
        
        if strings.Contains(titleLower, queryLower) || 
           strings.Contains(descLower, queryLower) || 
           strings.Contains(genreLower, queryLower) {
            results = append(results, game)
        }
    }
    
    json.NewEncoder(w).Encode(results)
}

// Helper function to check if string contains substring (case-insensitive) - NOT USED ANYMORE
func contains(s, substr string) bool {
    return strings.Contains(strings.ToLower(s), strings.ToLower(substr))
}

func main() {
    r := mux.NewRouter()
    
    // API routes
    api := r.PathPrefix("/api").Subrouter()
    
    // Games endpoints (order matters - more specific routes first)
    api.HandleFunc("/search/games", searchGames).Methods("GET")
    api.HandleFunc("/games", getGames).Methods("GET")
    api.HandleFunc("/games/{id}", getGame).Methods("GET")
    
    // Categories endpoint
    api.HandleFunc("/categories", getCategories).Methods("GET")
    
    // News endpoint
    api.HandleFunc("/news", getNews).Methods("GET")
    
    // User endpoints
    api.HandleFunc("/register", registerUser).Methods("POST")
    api.HandleFunc("/login", loginUser).Methods("POST")
    
    // Health check
    api.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{"status": "healthy"})
    }).Methods("GET")
    
    // CORS middleware
    c := cors.New(cors.Options{
        AllowedOrigins: []string{"http://localhost:3000", "http://localhost:3000"},
        AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowedHeaders: []string{"*"},
    })
    
    handler := c.Handler(r)
    
    fmt.Println("Server starting on :8081")
    log.Fatal(http.ListenAndServe(":8081", handler))
}
