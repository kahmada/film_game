"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Search, Calendar, User, Eye, MessageCircle, ChevronRight, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All News", active: true },
    { id: "releases", name: "New Releases" },
    { id: "updates", name: "Game Updates" },
    { id: "esports", name: "Esports" },
    { id: "reviews", name: "Reviews" },
    { id: "industry", name: "Industry" }
  ]

  const featuredNews = {
    id: 1,
    title: "PlayStation 6 Officially Announced: Revolutionary Gaming Experience Coming 2026",
    excerpt: "Sony reveals groundbreaking features including 8K gaming, advanced haptic feedback, and AI-powered game optimization that will redefine console gaming.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    views: "125K",
    comments: "1.2K",
    image: "/f1.jpg",
    category: "Industry",
    trending: true
  }

  const breakingNews = [
    {
      id: 2,
      title: "Cyberpunk 2077: Phantom Liberty DLC Sets New Standards",
      excerpt: "The highly anticipated expansion delivers on promises with incredible storytelling and technical improvements.",
      author: "Mike Rodriguez",
      date: "2024-01-14",
      readTime: "3 min read",
      views: "89K",
      comments: "645",
      image: "/f2.jpg",
      category: "Reviews"
    },
    {
      id: 3,
      title: "Elden Ring Wins Game of the Year at Global Gaming Awards",
      excerpt: "FromSoftware's masterpiece takes home the top honor, beating strong competition from other AAA titles.",
      author: "Alex Johnson",
      date: "2024-01-13",
      readTime: "4 min read",
      views: "67K",
      comments: "892",
      image: "/f3.jpg",
      category: "Industry"
    },
    {
      id: 4,
      title: "Epic Games Store Announces Massive Winter Sale",
      excerpt: "Up to 80% off on popular titles including AAA games and indie gems. Sale runs through January.",
      author: "Emma Williams",
      date: "2024-01-12",
      readTime: "2 min read",
      views: "45K",
      comments: "234",
      image: "/f4.jpg",
      category: "Industry"
    }
  ]

  const latestNews = [
    {
      id: 5,
      title: "Spider-Man 3 Game Officially Confirmed by Insomniac",
      excerpt: "The beloved web-slinger returns with enhanced graphics and new gameplay mechanics in the highly anticipated sequel.",
      author: "Tom Parker",
      date: "2024-01-11",
      readTime: "6 min read",
      views: "78K",
      comments: "567",
      image: "/f5.jpg",
      category: "Releases"
    },
    {
      id: 6,
      title: "Valve Teases Steam Deck 2 with OLED Display",
      excerpt: "Leaked documents suggest the next-generation handheld will feature improved battery life and performance.",
      author: "Lisa Wang",
      date: "2024-01-10",
      readTime: "4 min read",
      views: "92K",
      comments: "1.1K",
      image: "/f1.jpg",
      category: "Industry"
    },
    {
      id: 7,
      title: "World Championship Esports Tournament Announces $5M Prize Pool",
      excerpt: "The largest esports event of the year will feature teams from 32 countries competing in multiple game titles.",
      author: "Carlos Martinez",
      date: "2024-01-09",
      readTime: "5 min read",
      views: "34K",
      comments: "445",
      image: "/f2.jpg",
      category: "Esports"
    },
    {
      id: 8,
      title: "AMD Launches New Graphics Card Optimized for 4K Gaming",
      excerpt: "The RTX competitor promises 20% better performance and improved ray tracing capabilities at a competitive price point.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      views: "56K",
      comments: "332",
      image: "/f3.jpg",
      category: "Industry"
    },
    {
      id: 9,
      title: "Nintendo Direct Announces Five New First-Party Titles",
      excerpt: "The gaming giant reveals exciting new games including a Zelda spin-off and Mario Kart 9 coming this year.",
      author: "Jennifer Lee",
      date: "2024-01-07",
      readTime: "8 min read",
      views: "145K",
      comments: "2.3K",
      image: "/f4.jpg",
      category: "Releases"
    },
    {
      id: 10,
      title: "Cloud Gaming Market Reaches New Milestone",
      excerpt: "Subscription services see 300% growth as more gamers embrace streaming technology for instant access to games.",
      author: "Robert Chen",
      date: "2024-01-06",
      readTime: "3 min read",
      views: "29K",
      comments: "178",
      image: "/f5.jpg",
      category: "Industry"
    }
  ]

  const trendingTopics = [
    "PlayStation 6 Announcement",
    "Cyberpunk 2077 DLC",
    "Elden Ring GOTY",
    "Steam Winter Sale",
    "Nintendo Direct",
    "Esports Championship"
  ]

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
                <Link href="/news" className="text-[#06E193] hover:text-[#06E193] flex items-center">
                  News <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/store" className="text-gray-300 hover:text-white flex items-center">
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
              Gaming <span className="text-[#06E193]">News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest gaming news, reviews, and industry insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search news, games, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-slate-800 border-slate-700 text-white placeholder-gray-400 text-lg"
                />
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
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured News */}
            <section>
              <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <Image
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        width={500}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-red-600 text-white">BREAKING</Badge>
                        <Badge className="bg-[#06E193] text-black">FEATURED</Badge>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <Badge variant="outline" className="border-[#06E193] text-[#06E193]">
                          {featuredNews.category}
                        </Badge>
                        <h2 className="text-2xl font-bold leading-tight">{featuredNews.title}</h2>
                        <p className="text-gray-400">{featuredNews.excerpt}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{featuredNews.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredNews.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{featuredNews.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{featuredNews.comments}</span>
                          </div>
                        </div>
                        <Button className="bg-[#06E193] hover:bg-orange-600">
                          Read Full Article
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Breaking News */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Breaking News</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {breakingNews.map((article) => (
                  <Card key={article.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                        <Badge 
                          variant="outline" 
                          className="absolute top-2 left-2 border-[#06E193] text-[#06E193] bg-black/50"
                        >
                          {article.category}
                        </Badge>
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-bold line-clamp-2">{article.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{article.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{article.comments}</span>
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

            {/* Latest News */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Latest News</h2>
              <div className="space-y-6">
                {latestNews.map((article) => (
                  <Card key={article.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-4 gap-0">
                        <div className="relative">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={250}
                            height={150}
                            className="w-full h-32 md:h-full object-cover"
                          />
                          <Badge 
                            variant="outline" 
                            className="absolute top-2 left-2 border-[#06E193] text-[#06E193] bg-black/50 text-xs"
                          >
                            {article.category}
                          </Badge>
                        </div>
                        <div className="md:col-span-3 p-4 space-y-3">
                          <h3 className="text-lg font-bold">{article.title}</h3>
                          <p className="text-gray-400">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(article.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 text-sm text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{article.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>{article.comments}</span>
                                </div>
                              </div>
                              <Button size="sm" className="bg-[#06E193] hover:bg-orange-600">
                                Read More
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
                  Load More Articles
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Topics */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-[#06E193]" />
                  <h3 className="text-lg font-bold">Trending Topics</h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-700 rounded">
                      <span className="text-sm">{topic}</span>
                      <Badge variant="outline" className="border-[#06E193] text-[#06E193] text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-lg font-bold">Stay Updated</h3>
                <p className="text-gray-400 text-sm">
                  Get the latest gaming news delivered to your inbox
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Button className="w-full bg-[#06E193] hover:bg-orange-600">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Popular This Week</h3>
                <div className="space-y-4">
                  {latestNews.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#06E193] rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm font-medium line-clamp-2">{article.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
