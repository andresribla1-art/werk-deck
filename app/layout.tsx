import type { Metadata, Viewport } from "next"
import { DM_Mono, Geist } from "next/font/google"
import "./globals.css"
import { SafeClerkProvider } from "../components/clerk-safe"

const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dm-mono" })
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const viewport: Viewport = {
  themeColor: "#050505",
}

export const metadata: Metadata = {
  title: "WerkDeck — Dein Code spricht für sich",
  description: "Die erste Plattform wo Fähigkeiten durch echte Evidenz verifiziert werden.",
  openGraph: {
    title: "WerkDeck",
    description: "Tu Código Habla por Ti",
    locale: "de_DE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${dmMono.variable} ${geist.variable}`}><SafeClerkProvider>{children}</SafeClerkProvider></body>
    </html>
  )
}
