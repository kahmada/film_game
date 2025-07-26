import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Star, Calendar, ChevronLeft, ChevronRight, Users, Target, Heart, Award, Globe, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/p1.jpeg",
      description: "Passionate gamer with 15+ years in the gaming industry"
    },
    {
      name: "Sarah Chen",
      role: "Head of Game Development",
      image: "/p2.jpeg",
      description: "Former AAA game developer with expertise in RPGs"
    },
    {
      name: "Mike Rodriguez",
      role: "Community Manager",
      image: "/p1.jpeg",
      description: "Building bridges between gamers and developers"
    },
    {
      name: "Emma Williams",
      role: "UI/UX Designer",
      image: "/p2.jpeg",
      description: "Creating intuitive gaming experiences"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Gaming",
      description: "We live and breathe games, understanding what makes them special",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our community is at the heart of everything we do",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "We curate only the best games and content for our users",
      color: "text-[#06E193]"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting gamers from all around the world",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Ensuring a secure and fair gaming environment for all",
      color: "text-yellow-400"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our platform",
      color: "text-orange-400"
    }
  ]

  const achievements = [
    { number: "5M+", label: "Happy Gamers" },
    { number: "3,000+", label: "Games Available" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime" }
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
                <Link href="/about" className="text-[#06E193] hover:text-[#06E193]">
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
              About <span className="text-[#06E193]">Prime Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're passionate gamers building the ultimate gaming platform for players worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 2020 by a group of passionate gamers, Prime Gaming started as a small dream to create 
                the perfect gaming platform. We believed that gaming should be accessible, enjoyable, and bring 
                people together from all corners of the world.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we've grown into a global community of millions of gamers, offering thousands of games, 
                exclusive content, and cutting-edge features that enhance the gaming experience for everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#06E193]">{achievement.number}</div>
                    <div className="text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/f5.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <value.icon className={`h-12 w-12 mx-auto ${value.color}`} />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-lg">The passionate people behind Prime Gaming</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#06E193]">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-[#06E193]/20 to-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            "To create the world's most inclusive and innovative gaming platform where every player 
            can discover, connect, and experience the joy of gaming."
          </p>
          <Button size="lg" className="bg-[#06E193] hover:bg-orange-600 text-white px-8">
            <Link href="/signup">Join Our Community</Link>
          </Button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-[#06E193]">contact@primegaming.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-[#06E193]">support@primegaming.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Press</h3>
                <p className="text-[#06E193]">press@primegaming.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
