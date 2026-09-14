"use client"

import type { ReactNode } from "react"
import { AuthenticateWithRedirectCallback, ClerkProvider, SignInButton as ClerkSignInButton, SignUpButton as ClerkSignUpButton, UserButton as ClerkUserButton, useUser } from "@clerk/nextjs"

const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

export function SafeClerkProvider({ children }: { children: ReactNode }) {
  return hasClerkKey ? <ClerkProvider>{children}</ClerkProvider> : <>{children}</>
}

export function SafeSignInButton({ children, mode = "modal" }: { children: ReactNode; mode?: "modal" | "redirect" }) {
  return hasClerkKey ? <ClerkSignInButton mode={mode} fallbackRedirectUrl="/dev/demo">{children}</ClerkSignInButton> : <>{children}</>
}

export function SafeSignUpButton({ children, forceRedirectUrl = "/dev/demo" }: { children: ReactNode; forceRedirectUrl?: "/dev/demo" | "/console" }) {
  if (!hasClerkKey) return <>{children}</>
  return <ClerkSignUpButton mode="modal" forceRedirectUrl={forceRedirectUrl} signInForceRedirectUrl={forceRedirectUrl}>{children}</ClerkSignUpButton>
}

export function SafeAuthCallback() {
  if (!hasClerkKey) return <span>AUTHENTICATION CONFIGURATION REQUIRED</span>
  return <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/dev/demo" signInForceRedirectUrl="/dev/demo" />
}

export function SafeUserButton() {
  return hasClerkKey ? <ClerkUserButton /> : <span className="clerk-fallback-user" aria-label="Authentication unavailable">MM</span>
}

function ClerkIdentity({ children }: { children: (identity: { name: string; email: string; avatarUrl: string; username: string | null }) => ReactNode }) {
  const { isLoaded, user } = useUser()
  return children({ name: isLoaded ? user?.fullName || user?.username || "Developer profile" : "Loading identity", email: user?.primaryEmailAddress?.emailAddress || "Connect GitHub to unlock verified identity", avatarUrl: user?.imageUrl || "https://github.com/mayashavin.png?size=160", username: user?.username || null })
}

export function SafeIdentity({ children }: { children: (identity: { name: string; email: string; avatarUrl: string; username: string | null }) => ReactNode }) {
  if (!hasClerkKey) return <>{children({ name: "Developer profile", email: "Connect GitHub to unlock verified identity", avatarUrl: "https://github.com/mayashavin.png?size=160", username: null })}</>
  return <ClerkIdentity>{children}</ClerkIdentity>
}
