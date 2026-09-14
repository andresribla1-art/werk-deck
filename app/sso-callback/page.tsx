"use client"

import { SafeAuthCallback } from "../../components/clerk-safe"
export default function SsoCallbackPage() {
  return <main className="auth-callback"><SafeAuthCallback /></main>
}
