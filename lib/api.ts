const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api"

export interface Game {
  id: number
  title: string
  description: string
  rating: number
  year: number
  genre: string
  platform: string
  price: number
  sale_price: number
  discount: number
  image: string
  featured: boolean
}

export interface Category {
  id: number
  title: string
  description: string
  image: string
  game_count: number
}

export interface NewsArticle {
  id: number
  title: string
  content: string
  category: string
  image: string
  published_at: string
}

export interface User {
  id: number
  name: string
  email: string
}

// Games API
export const gamesApi = {
  getAll: async (params?: { category?: string; featured?: boolean }): Promise<Game[]> => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append("category", params.category)
    if (params?.featured) searchParams.append("featured", "true")

    const response = await fetch(`${API_BASE_URL}/games?${searchParams}`)
    if (!response.ok) throw new Error("Failed to fetch games")
    return response.json()
  },

  getById: async (id: number): Promise<Game> => {
    const response = await fetch(`${API_BASE_URL}/games/${id}`)
    if (!response.ok) throw new Error("Failed to fetch game")
    return response.json()
  },

  searchGames: async (query: string): Promise<Game[]> => {
    const response = await fetch(`${API_BASE_URL}/search/games?q=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error("Failed to search games")
    return response.json()
  }
}

// Categories API
export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await fetch(`${API_BASE_URL}/categories`)
    if (!response.ok) throw new Error("Failed to fetch categories")
    return response.json()
  },
}

// News API
export const newsApi = {
  getAll: async (): Promise<NewsArticle[]> => {
    const response = await fetch(`${API_BASE_URL}/news`)
    if (!response.ok) throw new Error("Failed to fetch news")
    return response.json()
  },
}

// User API
export const userApi = {
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    if (!response.ok) {
      const error = await response.text()
      throw new Error(error || "Failed to register")
    }
    return response.json()
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    if (!response.ok) {
      const error = await response.text()
      throw new Error(error || "Failed to login")
    }
    return response.json()
  },
}
