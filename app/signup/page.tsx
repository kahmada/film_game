"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Gamepad2, Mail, Lock, Eye, EyeOff, User, Github, Calendar } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    agreeToTerms: false,
    newsletter: true
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("handleSignup called:", formData)
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service")
      return
    }
    
    try {
      const response = await fetch('http://localhost:8081/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
          newsletter: formData.newsletter
        }),
      })
      
      if (response.ok) {
        const result = await response.json()
        alert("Account created successfully!")
        console.log("User created:", result)
        // Redirect to login page
        window.location.href = '/login'
      } else {
        const error = await response.text()
        alert("Error creating account: " + error)
      }
    } catch (error) {
      console.error("Signup error:", error)
      alert("Network error. Please try again.")
    }
  }

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/Home' })
  }

  const handleGitHubSignUp = () => {
    // Mode démo - OAuth non configuré
    alert("🚧 OAuth GitHub non configuré\n\nPour activer :\n1. Consultez OAUTH_SETUP.md\n2. Configurez vos clés dans .env.local\n3. Redémarrez le serveur")
  }

  const benefits = [
    {
      icon: "🎮",
      title: "Access Exclusive Games",
      description: "Get early access to new releases and member-only content"
    },
    {
      icon: "🏆",
      title: "Track Achievements",
      description: "Monitor your gaming progress and unlock special rewards"
    },
    {
      icon: "👥",
      title: "Join Community",
      description: "Connect with fellow gamers and share your experiences"
    },
    {
      icon: "💰",
      title: "Special Discounts",
      description: "Enjoy member-exclusive discounts on games and DLCs"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/store" className="text-gray-300 hover:text-white">
                Store
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Join <span className="text-[#06E193]">Prime Gaming</span> Today
              </h1>
              <p className="text-xl text-gray-300">
                Create your account and unlock the ultimate gaming experience with exclusive content and features.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#06E193]/20 rounded-lg flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-3 text-[#06E193]">Why Choose Prime Gaming?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#06E193] rounded-full mr-3"></span>
                  Over 3,000+ games available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#06E193] rounded-full mr-3"></span>
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#06E193] rounded-full mr-3"></span>
                  Regular exclusive content updates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#06E193] rounded-full mr-3"></span>
                  Cross-platform compatibility
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
                <p className="text-gray-400 text-center">
                  Join millions of gamers worldwide
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  {/* Username Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Choose a username"
                        value={formData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Birth Date Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Birth Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>Password must contain:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• At least 8 characters</li>
                      <li>• One uppercase letter</li>
                      <li>• One lowercase letter</li>
                      <li>• One number</li>
                    </ul>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        className="mt-1"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-300">
                        I agree to the{" "}
                        <Link href="/terms" className="text-[#06E193] hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#06E193] hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="mt-1"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-300">
                        Subscribe to newsletter for gaming news and exclusive offers
                      </label>
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-[#06E193] hover:bg-orange-600 text-white"
                    disabled={!formData.agreeToTerms}
                  >
                    Create Account
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800 text-gray-400">Or sign up with</span>
                  </div>
                </div>

                {/* Social Signup Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={handleGoogleSignUp}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                    type="button"
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
                    Google
                  </Button>

                  <Button
                    onClick={handleGitHubSignUp}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                    type="button"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#06E193] hover:underline font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-sm font-medium text-[#06E193] mb-2">🔒 Your Data is Secure</h3>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• All data is encrypted and securely stored</p>
                <p>• We never share your personal information</p>
                <p>• You can delete your account anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
