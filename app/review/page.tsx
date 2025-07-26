"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Gamepad2, Search, Star, Calendar, User, ThumbsUp, ThumbsDown, MessageCircle, Filter, ChevronRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReviewPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Reviews", count: 245, active: true },
    { id: "action", name: "Action", count: 67 },
    { id: "rpg", name: "RPG", count: 45 },
    { id: "sports", name: "Sports", count: 32 },
    { id: "indie", name: "Indie", count: 89 },
    { id: "horror", name: "Horror", count: 23 }
  ]

  const featuredReview = {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    game: "Cyberpunk 2077: Phantom Liberty",
    rating: 8.5,
    author: "Alex Rodriguez",
    date: "2024-01-15",
    readTime: "12 min read",
    views: "125K",
    likes: "4.2K",
    comments: "892",
    image: "/f1.jpg",
    excerpt: "CD Projekt Red delivers a masterclass in storytelling with Phantom Liberty, proving that Cyberpunk 2077 has finally reached its true potential.",
    pros: ["Exceptional storytelling", "Improved graphics", "Better performance"],
    cons: ["Still some minor bugs", "Limited replay value"],
    category: "RPG",
    platform: ["PC", "PS5", "Xbox Series X"],
    featured: true
  }

  const topReviews = [
    {
      id: 2,
      title: "Spider-Man 2: Web-Slinging Perfection",
      game: "Marvel's Spider-Man 2",
      rating: 9.2,
      author: "Sarah Chen",
      date: "2024-01-14",
      readTime: "10 min read",
      views: "89K",
      likes: "3.1K",
      comments: "567",
      image: "/f2.jpg",
      excerpt: "Insomniac Games has crafted the definitive Spider-Man experience with improved mechanics and an engaging story.",
      category: "Action",
      platform: ["PS5"]
    },
    {
      id: 3,
      title: "Elden Ring: A Masterpiece Evolved",
      game: "Elden Ring",
      rating: 9.6,
      author: "Mike Johnson",
      date: "2024-01-13",
      readTime: "15 min read",
      views: "156K",
      likes: "5.8K",
      comments: "1.2K",
      image: "/f3.jpg",
      excerpt: "FromSoftware's latest offering sets a new standard for open-world action RPGs with its intricate design.",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox Series X", "PS4", "Xbox One"]
    },
    {
      id: 4,
      title: "God of War Ragnarök: Epic Conclusion",
      game: "God of War Ragnarök",
      rating: 9.0,
      author: "Jennifer Lee",
      date: "2024-01-12",
      readTime: "14 min read",
      views: "112K",
      likes: "4.5K",
      comments: "743",
      image: "/f4.jpg",
      excerpt: "Santa Monica Studio delivers an emotionally satisfying conclusion to Kratos and Atreus's Norse adventure.",
      category: "Action",
      platform: ["PS5", "PS4"]
    }
  ]

  const recentReviews = [
    {
      id: 5,
      title: "Hogwarts Legacy: Magic Meets Open World",
      game: "Hogwarts Legacy",
      rating: 8.3,
      author: "Tom Wilson",
      date: "2024-01-11",
      readTime: "11 min read",
      views: "78K",
      likes: "2.9K",
      comments: "445",
      image: "/f5.jpg",
      excerpt: "A faithful recreation of the Wizarding World with engaging gameplay, though it lacks some magical spark.",
      category: "RPG",
      platform: ["PC", "PS5", "Xbox Series X"]
    },
    {
      id: 6,
      title: "Dead Space Remake: Terrifyingly Good",
      game: "Dead Space",
      rating: 8.8,
      author: "Lisa Wang",
      date: "2024-01-10",
      readTime: "9 min read",
      views: "65K",
      likes: "3.2K",
      comments: "321",
      image: "/f1.jpg",
      excerpt: "EA Motive has successfully reimagined the classic horror game with modern technology and enhanced scares.",
      category: "Horror",
      platform: ["PC", "PS5", "Xbox Series X"]
    },
    {
      id: 7,
      title: "Forza Motorsport: Racing Redefined",
      game: "Forza Motorsport",
      rating: 8.1,
      author: "Carlos Martinez",
      date: "2024-01-09",
      readTime: "8 min read",
      views: "43K",
      likes: "1.8K",
      comments: "267",
      image: "/f2.jpg",
      excerpt: "Turn 10 Studios brings realistic racing simulation with impressive graphics and improved physics.",
      category: "Sports",
      platform: ["PC", "Xbox Series X"]
    },
    {
      id: 8,
      title: "Pizza Tower: Indie Excellence",
      game: "Pizza Tower",
      rating: 8.7,
      author: "Emma Davis",
      date: "2024-01-08",
      readTime: "6 min read",
      views: "34K",
      likes: "2.1K",
      comments: "189",
      image: "/f3.jpg",
      excerpt: "A delightfully chaotic platformer that proves indie games can compete with AAA titles in creativity.",
      category: "Indie",
      platform: ["PC", "Nintendo Switch"]
    }
  ]

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 8) return "text-yellow-400"
    if (rating >= 7) return "text-orange-400"
    return "text-red-400"
  }

  const getRatingBadgeColor = (rating: number) => {
    if (rating >= 9) return "bg-green-500"
    if (rating >= 8) return "bg-yellow-500"
    if (rating >= 7) return "bg-orange-500"
    return "bg-red-500"
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
                <Link href="/store" className="text-gray-300 hover:text-white flex items-center">
                  Store <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/review" className="text-[#06E193] hover:text-[#06E193] flex items-center">
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
              Game <span className="text-[#06E193]">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Honest, in-depth reviews from gaming experts to help you discover your next favorite game
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search reviews, games, or genres..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-slate-800 border-slate-700 text-white placeholder-gray-400 text-lg"
                  />
                </div>
                <Button variant="outline" className="border-slate-700 text-gray-300 hover:bg-slate-700 bg-transparent">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </Button>
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Review */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Featured Review</h2>
              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative">
                      <Image
                        src={featuredReview.image}
                        alt={featuredReview.game}
                        width={400}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-[#06E193] text-black">FEATURED</Badge>
                        <Badge className={`${getRatingBadgeColor(featuredReview.rating)} text-white`}>
                          <Star className="h-3 w-3 mr-1" />
                          {featuredReview.rating}/10
                        </Badge>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-[#06E193] text-[#06E193]">
                            {featuredReview.category}
                          </Badge>
                          <div className="flex gap-1">
                            {featuredReview.platform.map((platform) => (
                              <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{featuredReview.title}</h3>
                        <p className="text-gray-400">{featuredReview.excerpt}</p>
                      </div>

                      {/* Rating Breakdown */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-400 mb-2">Pros</h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            {featuredReview.pros.map((pro, index) => (
                              <li key={index} className="flex items-center">
                                <ThumbsUp className="h-3 w-3 mr-2 text-green-400" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-red-400 mb-2">Cons</h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            {featuredReview.cons.map((con, index) => (
                              <li key={index} className="flex items-center">
                                <ThumbsDown className="h-3 w-3 mr-2 text-red-400" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{featuredReview.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(featuredReview.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className={`text-2xl font-bold ${getRatingColor(featuredReview.rating)}`}>
                          {featuredReview.rating}/10
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{featuredReview.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{featuredReview.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{featuredReview.comments}</span>
                          </div>
                        </div>
                        <Button className="bg-[#06E193] hover:bg-orange-600">
                          Read Full Review
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Top Rated Reviews */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Top Rated Reviews</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {topReviews.map((review) => (
                  <Card key={review.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={review.image}
                          alt={review.game}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className={`${getRatingBadgeColor(review.rating)} text-white`}>
                            <Star className="h-3 w-3 mr-1" />
                            {review.rating}/10
                          </Badge>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="absolute top-2 left-2 border-[#06E193] text-[#06E193] bg-black/50"
                        >
                          {review.category}
                        </Badge>
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-bold line-clamp-2">{review.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{review.excerpt}</p>
                        
                        <div className="flex gap-1 flex-wrap">
                          {review.platform.map((platform) => (
                            <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{review.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{review.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{review.likes}</span>
                            </div>
                          </div>
                          <Button size="sm" className="bg-[#06E193] hover:bg-orange-600">
                            Read
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Reviews */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
              <div className="space-y-6">
                {recentReviews.map((review) => (
                  <Card key={review.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-4 gap-0">
                        <div className="relative">
                          <Image
                            src={review.image}
                            alt={review.game}
                            width={250}
                            height={150}
                            className="w-full h-32 md:h-full object-cover"
                          />
                          <Badge 
                            variant="outline" 
                            className="absolute top-2 left-2 border-[#06E193] text-[#06E193] bg-black/50 text-xs"
                          >
                            {review.category}
                          </Badge>
                          <Badge 
                            className={`absolute top-2 right-2 ${getRatingBadgeColor(review.rating)} text-white text-xs`}
                          >
                            {review.rating}/10
                          </Badge>
                        </div>
                        <div className="md:col-span-3 p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold">{review.title}</h3>
                              <p className="text-gray-400 mt-1">{review.excerpt}</p>
                            </div>
                            <div className={`text-xl font-bold ml-4 ${getRatingColor(review.rating)}`}>
                              {review.rating}/10
                            </div>
                          </div>
                          
                          <div className="flex gap-1 flex-wrap">
                            {review.platform.map((platform) => (
                              <Badge key={platform} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{review.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(review.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 text-sm text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{review.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{review.likes}</span>
                                </div>
                              </div>
                              <Button size="sm" className="bg-[#06E193] hover:bg-orange-600">
                                Read Review
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent">
                  Load More Reviews
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Rated Games */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Top Rated Games</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topReviews.slice(0, 5).map((review, index) => (
                  <div key={review.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#06E193] rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-1">{review.game}</h4>
                      <div className={`text-sm font-bold ${getRatingColor(review.rating)}`}>
                        {review.rating}/10
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Review Stats */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Review Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Excellent (9-10)</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Good (8-8.9)</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average (7-7.9)</span>
                    <span>20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Below Average (6-6.9)</span>
                    <span>5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Write a Review CTA */}
            <Card className="bg-gradient-to-br from-[#06E193]/20 to-orange-500/20 border-[#06E193]/50">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-lg font-bold">Share Your Opinion</h3>
                <p className="text-gray-300 text-sm">
                  Have you played a game recently? Share your thoughts with the community!
                </p>
                <Button className="w-full bg-[#06E193] hover:bg-orange-600">
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
