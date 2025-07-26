"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"

export default function SessionInfo() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p className="text-gray-400">Loading...</p>
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-[#06E193]" />
          <span className="text-sm text-gray-300">
            Welcome, {session.user?.name || session.user?.email}
          </span>
        </div>
        <Button
          onClick={() => signOut({ callbackUrl: '/' })}
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-300 hover:bg-slate-700 bg-transparent"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    )
  }

  return null
}
