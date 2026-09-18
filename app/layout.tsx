import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SafeClerkProvider } from "@/components/clerk-safe";
import "@/app/globals.css";

export const dynamic = "force-dynamic";

const fontDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WerkDeck | Sistema de Ejecución",
  description: "Sistema HUD e Identidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SafeClerkProvider>
      <html lang="es" className={`${fontDisplay.variable} ${fontMono.variable} dark`}>
        <body className="font-display bg-oasis-dark text-white antialiased selection:bg-oasis-emerald selection:text-black min-h-screen">
          {children}
        </body>
      </html>
    </SafeClerkProvider>
  );
}