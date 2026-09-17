import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "WerkDeck | The Ultimate Execution Arena",
  description: "Plataforma de reclutamiento técnico basada en la ejecución real de código.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es" className="dark">
        <body className="bg-black text-white antialiased selection:bg-emerald-500 selection:text-black min-h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}