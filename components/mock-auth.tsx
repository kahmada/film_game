"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail } from "lucide-react"

export function MockAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulation sans backend
    if (isSignUp) {
      setMessage(`✅ Compte créé pour ${formData.email}`)
    } else {
      setMessage(`✅ Connexion réussie pour ${formData.email}`)
    }

    // Reset form
    setFormData({ name: "", email: "", password: "" })
  }

  return (
    <div className="bg-slate-800 rounded-lg p-8">
      <div className="flex space-x-4 mb-6">
        <Button
          className={`flex-1 ${isSignUp ? "bg-orange-500 hover:bg-orange-600" : "bg-transparent border border-gray-600"}`}
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </Button>
        <Button
          className={`flex-1 ${!isSignUp ? "bg-orange-500 hover:bg-orange-600" : "bg-transparent border border-gray-600"}`}
          onClick={() => setIsSignUp(false)}
        >
          Login
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">E-Mail</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter Your E-Mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              required
            />
          </div>
        </div>

        {!isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              required
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </Button>

        {message && <div className="text-center text-green-400 mt-4">{message}</div>}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-800 text-gray-400">Or</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"
          onClick={() => setMessage("🚀 Google OAuth sera implémenté plus tard")}
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
      </form>
    </div>
  )
}
