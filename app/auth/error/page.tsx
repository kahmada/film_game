// app/auth/error/page.tsx
import { Suspense } from "react"
import ErrorClient from "./ErrorClient"

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div>Loading error page...</div>}>
      <ErrorClient />
    </Suspense>
  )
}
