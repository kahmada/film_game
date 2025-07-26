"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Star, Calendar, ChevronLeft, ChevronRight, User, Mail } from "lucide-react"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/Home' })
  }

  const trendingGames = [
    {
      id: 1,
      title: "Black Myth Wukong",
      year: 2024,
      rating: 81,
      originalPrice: 60,
      salePrice: 51,
      discount: 15,
      image: "/f4.jpg",
    },
    {
      id: 2,
      title: "Alan Wake 2",
      year: 2024,
      rating: 86,
      originalPrice: 40,
      salePrice: 32,
      discount: 20,
      image: "/f2.jpg",
    },
    {
      id: 3,
      title: "Mortal Combat 11",
      year: 2023,
      rating: 72,
      originalPrice: 62,
      salePrice: 54,
      discount: 13,
      image: "/f3.jpg",
    },
    {
      id: 4,
      title: "Spider-Man 2",
      year: 2023,
      rating: 87,
      originalPrice: 50,
      salePrice: 35,
      discount: 30,
      image: "/f1.jpg",
    },
    {
      id: 5,
      title: "The Witcher 3",
      year: 2015,
      rating: 93,
      originalPrice: 40,
      salePrice: 32,
      discount: 20,
      image: "/f4.jpg",
    },
  ]

  const popularGames = [
    { title: "The Witcher 3", image: "/f1.jpg" },
    { title: "Red Dead Redemption", image: "/f2.jpg" },
    { title: "The Last of Us Part II", image: "/f3.jpg" },
    { title: "Ghost of Tsushima", image: "/f4.jpg" },
    { title: "God of War Ragnarok", image: "/f5.jpg" },
  ]

  const gameCategories = [
    {
      title: "Sports & Racing",
      description: "Experience The Real-World Sports And High-Speed Racing Challenges",
      image: "/f1.jpg",
      featured: true,
    },
    {
      title: "RPG",
      image: "/f2.jpg",
    },
    {
      title: "Adventure",
      image: "/f3.jpg",
    },
    {
      title: "Strategy",
      image: "/f4.jpg",
    },
    {
      title: "Survival",
      image: "/f5.jpg",
    },
    {
      title: "Action",
      image: "/f2.jpg",
    },
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
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Gamming Web Site</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold">93</span>
                  <span className="text-gray-400">/100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">May 19, 2015</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Available For:</h3>
                    <p className="text-gray-400">Pc - Ps4 - Xbox One</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Genre:</h3>
                    <p className="text-gray-400">Action RPG</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Pc
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Ps 4
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Xbox One
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-[#06E193] hover:bg-orange-600 text-white px-8">Buy Now</Button>
                <Button
                  variant="outline"
                  className="border-[#06E193] text-[#06E193] hover:bg-[#06E193] hover:text-white px-8 bg-transparent"
                >
                  Game review
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/f5.jpg"
                alt="The Witcher 3"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Popular Games Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                The Most <span className="text-[#06E193]">Popular</span> Games
              </h2>
              <div className="flex space-x-2">
                <Button size="icon" variant="outline" className="border-gray-600 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {popularGames.map((game, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Image
                      src={game.image || "/f1.jpg"}
                      alt={game.title}
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-medium text-center">{game.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Games Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Trending Games</h2>
            <div className="flex items-center space-x-4">
              <Link href="/games" className="text-[#06E193] hover:text-[#06E193] flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <div className="flex space-x-2">
                <Button size="icon" variant="outline" className="border-gray-600 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" className="bg-[#06E193] hover:bg-orange-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trendingGames.map((game) => (
              <Card key={game.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={game.image || "/f1.jpg"}
                      alt={game.title}
                      width={200}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
                      <Star className="h-3 w-3 mr-1" />
                      {game.rating}/100
                    </Badge>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-bold text-lg">{game.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{game.year}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through">${game.originalPrice}</span>
                        <span className="font-bold text-lg">${game.salePrice}</span>
                        <Badge className="bg-[#06E193] text-xs">-{game.discount}%</Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-[#06E193] hover:bg-orange-600">Buy Now →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game of the Month */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Game Of The Month</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Black Myth Wukong</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Trailer & Gallery</h3>
              <div className="flex space-x-2">
                <Button size="icon" variant="outline" className="border-gray-600 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" className="bg-[#06E193] hover:bg-orange-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/f1.jpg"
                  alt="Black Myth Wukong"
                  width={500}
                  height={300}
                  className="w-full rounded-lg"
                />
                <Button
                  size="icon"
                  className="absolute inset-0 m-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full"
                >
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Game Categories</h2>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="border-gray-600 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-[#06E193] hover:bg-orange-600">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer overflow-hidden ${
                  category.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-0 relative">
                  <Image
                    src={category.image || "/f1.jpg"}
                    alt={category.title}
                    width={category.featured ? 400 : 300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    {category.description && <p className="text-sm text-gray-300">{category.description}</p>}
                    {category.featured && (
                      <Link
                        href={`/category/${category.title.toLowerCase().replace(" & ", "-")}`}
                        className="text-[#06E193] hover:text-[#06E193] text-sm flex items-center mt-2"
                      >
                        View All <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Unlock The Ultimate <span className="text-[#06E193]">Gaming Experience</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Sign Up Now To Dive Into Exclusive Content, Track Your Progress, And Connect With A Global Community Of
                Gamers. Don't Miss Out On Special Offers Made Just For You!
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Access <span className="text-[#06E193]">Exclusive Games</span>
                  </h3>
                  <p className="text-gray-400">
                    Get early access to new releases and hidden gems, only for registered members. Be the first to play!
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Track <span className="text-[#06E193]">Stats & Achievements</span>
                  </h3>
                  <p className="text-gray-400">
                    Monitor gameplay stats, track achievements, and share your progress with fellow gamers easily
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Join Our <span className="text-[#06E193]">Community</span>
                  </h3>
                  <p className="text-gray-400">
                    Connect with a passionate community of gamers. Share tips, strategies, and gaming experiences
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Exclusive <span className="text-[#06E193]">Discounts & Offers</span>
                  </h3>
                  <p className="text-gray-400">
                    Enjoy member-only discounts on top-rated games, DLCs, and in-game items. Save on your favorites!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-8">
              <div className="flex space-x-4 mb-6">
                <Button className="bg-[#06E193] hover:bg-orange-600 flex-1"><Link href="/signup">Sign Up</Link></Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 flex-1 bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter Your Name"
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter Your E-Mail"
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <Button className="w-full bg-[#06E193] hover:bg-orange-600 text-white">Sign Up</Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800 text-gray-400">Or</span>
                  </div>
                </div>

                <Button
                  onClick={handleGoogleSignUp}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign Up With Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
