import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Star, Calendar, ChevronLeft, ChevronRight, User, Mail, Play, Trophy, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      year: 2024,
      rating: 88,
      originalPrice: 60,
      salePrice: 45,
      discount: 25,
      image: "/f1.jpg",
      description: "Experience the dark future of Night City"
    },
    {
      id: 2,
      title: "Elden Ring",
      year: 2022,
      rating: 96,
      originalPrice: 60,
      salePrice: 50,
      discount: 17,
      image: "/f2.jpg",
      description: "Epic fantasy adventure awaits"
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      year: 2022,
      rating: 94,
      originalPrice: 70,
      salePrice: 55,
      discount: 21,
      image: "/f3.jpg",
      description: "The Norse saga continues"
    }
  ]

  const gameStats = [
    {
      icon: Play,
      number: "2,500+",
      label: "Games Available",
      color: "text-[#06E193]"
    },
    {
      icon: Users,
      number: "1M+",
      label: "Active Players",
      color: "text-blue-400"
    },
    {
      icon: Trophy,
      number: "50K+",
      label: "Achievements",
      color: "text-yellow-400"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      color: "text-purple-400"
    }
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
                <Link href="/Home" className="text-[#06E193] hover:text-[#06E193]">
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
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              Welcome to <span className="text-[#06E193]">Prime Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the ultimate gaming experience with thousands of games, exclusive content, and a passionate community of gamers.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-[#06E193] hover:bg-orange-600 text-white px-8">
                Explore Games
              </Button>
              <Button size="lg" variant="outline" className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent px-8">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {gameStats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <stat.icon className={`h-12 w-12 mx-auto ${stat.color}`} />
                <div className="space-y-2">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-gray-400 text-lg">Discover the most popular and trending games</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <Card key={game.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                      <Star className="h-3 w-3 mr-1" />
                      {game.rating}/100
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{game.title}</h3>
                      <p className="text-gray-400">{game.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through">${game.originalPrice}</span>
                        <span className="font-bold text-xl">${game.salePrice}</span>
                        <Badge className="bg-[#06E193] text-xs">-{game.discount}%</Badge>
                      </div>
                      <Button className="bg-[#06E193] hover:bg-orange-600">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#06E193]/20 to-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Gaming?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of gamers worldwide and discover your next favorite game today.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-[#06E193] hover:bg-orange-600 text-white px-8">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white bg-transparent px-8">
              <Link href="/store">Browse Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
