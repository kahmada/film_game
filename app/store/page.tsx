"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Search, Filter, Grid, List, Star, Calendar, ShoppingCart, Heart, ChevronRight, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", name: "All Games", count: 2456, active: true },
    { id: "action", name: "Action", count: 567 },
    { id: "rpg", name: "RPG", count: 445 },
    { id: "sports", name: "Sports", count: 234 },
    { id: "indie", name: "Indie", count: 678 },
    { id: "horror", name: "Horror", count: 123 },
    { id: "racing", name: "Racing", count: 189 },
    { id: "puzzle", name: "Puzzle", count: 345 }
  ]

  const featuredDeals = [
    {
      id: 1,
      title: "Cyberpunk 2077: Ultimate Edition",
      originalPrice: 79.99,
      salePrice: 39.99,
      discount: 50,
      rating: 8.5,
      image: "/f1.jpg",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox"],
      endDate: "2024-01-20",
      featured: true
    },
    {
      id: 2,
      title: "Spider-Man 2 Deluxe Edition",
      originalPrice: 79.99,
      salePrice: 59.99,
      discount: 25,
      rating: 9.2,
      image: "/f2.jpg",
      category: "Action",
      platform: ["PS5"],
      endDate: "2024-01-18",
      featured: true
    },
    {
      id: 3,
      title: "Elden Ring Game of the Year",
      originalPrice: 59.99,
      salePrice: 47.99,
      discount: 20,
      rating: 9.6,
      image: "/f3.jpg",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox", "PS4"],
      endDate: "2024-01-22",
      featured: true
    }
  ]

  const games = [
    {
      id: 4,
      title: "God of War Ragnarök",
      originalPrice: 69.99,
      salePrice: 55.99,
      discount: 20,
      rating: 9.0,
      image: "/f4.jpg",
      category: "Action",
      platform: ["PS5", "PS4"],
      releaseDate: "2022-11-09",
      isNew: false
    },
    {
      id: 5,
      title: "Hogwarts Legacy",
      originalPrice: 59.99,
      salePrice: 47.99,
      discount: 20,
      rating: 8.3,
      image: "/f5.jpg",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox"],
      releaseDate: "2023-02-10",
      isNew: false
    },
    {
      id: 6,
      title: "Dead Space",
      originalPrice: 59.99,
      salePrice: 29.99,
      discount: 50,
      rating: 8.8,
      image: "/f1.jpg",
      category: "Horror",
      platform: ["PC", "PS5", "Xbox"],
      releaseDate: "2023-01-27",
      isNew: false
    },
    {
      id: 7,
      title: "Forza Motorsport",
      originalPrice: 69.99,
      salePrice: 69.99,
      discount: 0,
      rating: 8.1,
      image: "/f2.jpg",
      category: "Racing",
      platform: ["PC", "Xbox"],
      releaseDate: "2023-10-10",
      isNew: true
    },
    {
      id: 8,
      title: "Pizza Tower",
      originalPrice: 19.99,
      salePrice: 15.99,
      discount: 20,
      rating: 8.7,
      image: "/f3.jpg",
      category: "Indie",
      platform: ["PC", "Switch"],
      releaseDate: "2023-01-26",
      isNew: false
    },
    {
      id: 9,
      title: "Resident Evil 4",
      originalPrice: 59.99,
      salePrice: 44.99,
      discount: 25,
      rating: 9.1,
      image: "/f4.jpg",
      category: "Horror",
      platform: ["PC", "PS5", "Xbox", "PS4"],
      releaseDate: "2023-03-24",
      isNew: false
    },
    {
      id: 10,
      title: "Diablo IV",
      originalPrice: 69.99,
      salePrice: 59.99,
      discount: 14,
      rating: 8.4,
      image: "/f5.jpg",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox", "PS4"],
      releaseDate: "2023-06-06",
      isNew: false
    },
    {
      id: 11,
      title: "Alan Wake 2",
      originalPrice: 59.99,
      salePrice: 49.99,
      discount: 17,
      rating: 8.6,
      image: "/f1.jpg",
      category: "Horror",
      platform: ["PC", "PS5", "Xbox"],
      releaseDate: "2023-10-27",
      isNew: true
    }
  ]

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 8) return "text-yellow-400"
    if (rating >= 7) return "text-orange-400"
    return "text-red-400"
  }

  const formatTimeRemaining = (endDate: string) => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = end.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return `${days} days left`
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Gamepad2 className="h-8 w-8 text-[#06E193]" />
                <div>
                  <span className="text-sm text-[#06E193]">Prime</span>
                  <br />
                  <span className="text-lg font-bold text-[#06E193]">Gaming</span>
                </div>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/Home" className="text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="/news" className="text-gray-300 hover:text-white flex items-center">
                  News <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/store" className="text-[#06E193] hover:text-[#06E193] flex items-center">
                  Store <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/review" className="text-gray-300 hover:text-white flex items-center">
                  Review <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/guides" className="text-gray-300 hover:text-white flex items-center">
                  Guides <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
              <Button className="bg-[#06E193] hover:bg-orange-600 text-white"><Link href="/signup">Sign Up</Link></Button>
              <Button
                variant="outline"
                className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Game <span className="text-[#06E193]">Store</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover thousands of games at unbeatable prices. From AAA blockbusters to indie gems.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search for games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-slate-800 border-slate-700 text-white placeholder-gray-400 text-lg"
                  />
                </div>
                <Button variant="outline" className="border-slate-700 text-gray-300 hover:bg-slate-700 bg-transparent">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </Button>
                <div className="flex border border-slate-700 rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-[#06E193] hover:bg-orange-600" : "text-gray-300 hover:bg-slate-700"}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-[#06E193] hover:bg-orange-600" : "text-gray-300 hover:bg-slate-700"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.active ? "default" : "outline"}
                className={category.active ? "bg-[#06E193] hover:bg-orange-600" : "border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">🔥 Featured Deals</h2>
            <Link href="/deals" className="text-[#06E193] hover:underline flex items-center">
              View All Deals <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDeals.map((game) => (
              <Card key={game.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={400}
                      height={225}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-red-600 text-white">-{game.discount}% OFF</Badge>
                      <Badge className="bg-[#06E193] text-black">FEATURED</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-black/70 text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {game.rating}/10
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-[#06E193] text-[#06E193]">
                        {game.category}
                      </Badge>
                      <h3 className="text-xl font-bold line-clamp-1">{game.title}</h3>
                      <div className="flex gap-1 flex-wrap">
                        {game.platform.map((platform) => (
                          <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 line-through">${game.originalPrice}</span>
                          <span className="font-bold text-2xl text-[#06E193]">${game.salePrice}</span>
                        </div>
                      </div>
                      <div className="text-sm text-orange-400">
                        ⏰ {formatTimeRemaining(game.endDate)}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-[#06E193] hover:bg-orange-600">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Games */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">All Games</h2>
            <div className="flex items-center space-x-4">
              <select 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Best Deals</option>
              </select>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={game.image}
                        alt={game.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                      {game.discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                          -{game.discount}%
                        </Badge>
                      )}
                      {game.isNew && (
                        <Badge className="absolute top-2 left-2 bg-green-600 text-white">
                          NEW
                        </Badge>
                      )}
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Badge className="absolute bottom-2 right-2 bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {game.rating}
                      </Badge>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div className="space-y-1">
                        <Badge variant="outline" className="border-[#06E193] text-[#06E193] text-xs">
                          {game.category}
                        </Badge>
                        <h3 className="font-bold line-clamp-2 text-sm">{game.title}</h3>
                        <div className="flex gap-1 flex-wrap">
                          {game.platform.slice(0, 2).map((platform) => (
                            <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {platform}
                            </Badge>
                          ))}
                          {game.platform.length > 2 && (
                            <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              +{game.platform.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          {game.discount > 0 ? (
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400 line-through text-sm">${game.originalPrice}</span>
                              <span className="font-bold text-[#06E193]">${game.salePrice}</span>
                            </div>
                          ) : (
                            <span className="font-bold">${game.originalPrice}</span>
                          )}
                        </div>
                        <Button size="sm" className="w-full bg-[#06E193] hover:bg-orange-600">
                          <ShoppingCart className="h-3 w-3 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {games.map((game) => (
                <Card key={game.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-6 gap-0">
                      <div className="md:col-span-1 relative">
                        <Image
                          src={game.image}
                          alt={game.title}
                          width={200}
                          height={100}
                          className="w-full h-24 md:h-full object-cover"
                        />
                        {game.discount > 0 && (
                          <Badge className="absolute top-1 left-1 bg-red-600 text-white text-xs">
                            -{game.discount}%
                          </Badge>
                        )}
                        {game.isNew && (
                          <Badge className="absolute top-1 left-1 bg-green-600 text-white text-xs">
                            NEW
                          </Badge>
                        )}
                      </div>
                      <div className="md:col-span-5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="border-[#06E193] text-[#06E193] text-xs">
                                {game.category}
                              </Badge>
                              <Badge className="bg-yellow-500 text-black text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                {game.rating}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold">{game.title}</h3>
                            <div className="flex gap-1">
                              {game.platform.map((platform) => (
                                <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right space-y-2 min-w-[150px]">
                            <div>
                              {game.discount > 0 ? (
                                <div className="space-y-1">
                                  <div className="text-gray-400 line-through text-sm">${game.originalPrice}</div>
                                  <div className="font-bold text-xl text-[#06E193]">${game.salePrice}</div>
                                </div>
                              ) : (
                                <div className="font-bold text-xl">${game.originalPrice}</div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-[#06E193] hover:bg-orange-600">
                                <ShoppingCart className="h-3 w-3 mr-1" />
                                Add to Cart
                              </Button>
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent">
                                <Heart className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent">
              Load More Games
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Never Miss a Deal</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about exclusive sales, new releases, and limited-time offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-slate-800 border-slate-700 text-white placeholder-gray-400"
            />
            <Button className="bg-[#06E193] hover:bg-orange-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
