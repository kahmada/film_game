"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gamepad2, Search, Clock, User, Eye, ThumbsUp, BookOpen, Video, FileText, Star, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const guideCategories = [
    { id: "all", name: "All Guides", count: 156 },
    { id: "beginner", name: "Beginner", count: 45 },
    { id: "intermediate", name: "Intermediate", count: 67 },
    { id: "advanced", name: "Advanced", count: 32 },
    { id: "tips", name: "Tips & Tricks", count: 89 },
    { id: "walkthroughs", name: "Walkthroughs", count: 23 }
  ]

  const featuredGuides = [
    {
      id: 1,
      title: "Complete Cyberpunk 2077 Beginner's Guide",
      description: "Everything you need to know to start your journey in Night City",
      author: "GameMaster Pro",
      readTime: "15 min read",
      views: "125K",
      likes: "4.2K",
      rating: 4.8,
      image: "/f1.jpg",
      type: "Article",
      category: "Beginner",
      featured: true
    },
    {
      id: 2,
      title: "Elden Ring Boss Battle Strategies",
      description: "Master the toughest bosses with our comprehensive combat guide",
      author: "SoulsBorne Expert",
      readTime: "22 min read",
      views: "89K",
      likes: "3.1K",
      rating: 4.9,
      image: "/f2.jpg",
      type: "Video",
      category: "Advanced",
      featured: true
    },
    {
      id: 3,
      title: "Building the Perfect Gaming Setup",
      description: "Hardware recommendations and setup tips for every budget",
      author: "TechGuru",
      readTime: "18 min read",
      views: "67K",
      likes: "2.8K",
      rating: 4.7,
      image: "/f3.jpg",
      type: "Article",
      category: "Tips",
      featured: true
    }
  ]

  const allGuides = [
    {
      id: 4,
      title: "God of War Ragnarök Trophy Guide",
      description: "Get 100% completion with our detailed trophy walkthrough",
      author: "Trophy Hunter",
      readTime: "12 min read",
      views: "45K",
      likes: "1.9K",
      rating: 4.6,
      image: "/f4.jpg",
      type: "Article",
      category: "Walkthroughs"
    },
    {
      id: 5,
      title: "Competitive Gaming: From Casual to Pro",
      description: "Transform your gaming skills and climb the ranks",
      author: "Pro Player",
      readTime: "25 min read",
      views: "78K",
      likes: "3.5K",
      rating: 4.8,
      image: "/f5.jpg",
      type: "Video",
      category: "Advanced"
    },
    {
      id: 6,
      title: "Best Gaming Keyboard Shortcuts",
      description: "Essential hotkeys every gamer should know",
      author: "KeyMaster",
      readTime: "8 min read",
      views: "34K",
      likes: "1.2K",
      rating: 4.4,
      image: "/f1.jpg",
      type: "Article",
      category: "Tips"
    },
    {
      id: 7,
      title: "Spider-Man 2 Complete Collectibles Guide",
      description: "Find every collectible in Marvel's Spider-Man 2",
      author: "Web Crawler",
      readTime: "30 min read",
      views: "92K",
      likes: "4.1K",
      rating: 4.9,
      image: "/f2.jpg",
      type: "Walkthrough",
      category: "Walkthroughs"
    },
    {
      id: 8,
      title: "Gaming Ergonomics: Stay Healthy While Gaming",
      description: "Prevent injuries and game comfortably for hours",
      author: "Health Expert",
      readTime: "14 min read",
      views: "23K",
      likes: "987",
      rating: 4.5,
      image: "/f3.jpg",
      type: "Article",
      category: "Tips"
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "video":
        return <Video className="h-4 w-4" />
      case "walkthrough":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
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
                <Link href="/review" className="text-gray-300 hover:text-white flex items-center">
                  Review <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/guides" className="text-[#06E193] hover:text-[#06E193] flex items-center">
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
              Gaming <span className="text-[#06E193]">Guides</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master your favorite games with our comprehensive guides, tips, and walkthroughs
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search guides, games, or topics..."
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
            {guideCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === "all" ? "default" : "outline"}
                className={category.id === "all" ? "bg-[#06E193] hover:bg-orange-600" : "border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Guides</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <Card key={guide.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-[#06E193] text-black">Featured</Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300 bg-black/50">
                        {getTypeIcon(guide.type)}
                        <span className="ml-1">{guide.type}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {guide.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-[#06E193] text-[#06E193]">
                        {guide.category}
                      </Badge>
                      <h3 className="text-xl font-bold line-clamp-2">{guide.title}</h3>
                      <p className="text-gray-400 line-clamp-2">{guide.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{guide.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{guide.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{guide.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{guide.likes}</span>
                        </div>
                      </div>
                      <Button className="bg-[#06E193] hover:bg-orange-600">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">All Guides</h2>
            <div className="flex items-center space-x-4">
              <select className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded">
                <option>Sort by: Most Popular</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Most Views</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((guide) => (
              <Card key={guide.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      width={300}
                      height={150}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-gray-600 text-gray-300 bg-black/50">
                        {getTypeIcon(guide.type)}
                        <span className="ml-1">{guide.type}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {guide.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-[#06E193] text-[#06E193] text-xs">
                        {guide.category}
                      </Badge>
                      <h3 className="font-bold line-clamp-2">{guide.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{guide.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{guide.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{guide.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{guide.likes}</span>
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

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent">
              Load More Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest guides and gaming tips delivered to your inbox
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
