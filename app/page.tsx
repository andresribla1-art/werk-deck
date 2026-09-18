"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { SafeSignInButton } from "@/components/clerk-safe";

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="h-screen w-screen bg-black text-white font-sans antialiased selection:bg-emerald-500 selection:text-black flex flex-col overflow-hidden relative">
      
      {/* Cinematic Oasis Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_60%)] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] z-0 pointer-events-none" />

      {/* Top Bar */}
      <header className="absolute top-0 w-full px-8 md:px-12 py-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#10b981]" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase">System Active</span>
        </div>
        
        <div>
          {isLoaded && !isSignedIn && (
            <SafeSignInButton>
              <button className="font-mono text-[10px] tracking-[0.2em] text-zinc-300 hover:text-emerald-400 transition-all uppercase py-2.5 px-6 border border-zinc-800 hover:border-emerald-500/50 rounded-full bg-black/50 backdrop-blur-md cursor-pointer">
                Iniciar Sesión
              </button>
            </SafeSignInButton>
          )}

          {isLoaded && isSignedIn && (
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard/feed"
                className="font-mono text-[10px] tracking-[0.2em] text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10 transition-all uppercase py-2 px-4 rounded-full cursor-pointer"
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Center Monolith */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 w-full max-w-5xl mx-auto mt-12">
        
        <div className="inline-block font-mono text-[9px] tracking-[0.5em] text-emerald-400 uppercase mb-8 border border-emerald-500/20 px-4 py-1.5 rounded-full bg-emerald-950/20 backdrop-blur-sm">
          The Ultimate Execution Arena
        </div>
        
        <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-medium tracking-tight text-white leading-none drop-shadow-2xl">
          Werk<span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600">Deck</span>
        </h1>

        <p className="mt-8 text-2xl md:text-4xl font-light tracking-tight text-zinc-300 max-w-3xl">
          Demuestra quién eres. <br className="md:hidden" />
          <span className="text-emerald-400 font-normal">El mundo es tuyo.</span>
        </p>

        <p className="mt-6 text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-2xl tracking-wide">
          Cero currículums. Cero entrevistas teóricas. Conectamos la ejecución real de tu código con un ecosistema global donde las empresas pujan por tu talento.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-12">
          {isLoaded && !isSignedIn && (
            <>
              <SafeSignInButton>
                <button className="group relative bg-white hover:bg-emerald-400 text-black font-sans text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] rounded-full flex items-center gap-3 overflow-hidden cursor-pointer">
                  <span className="relative z-10">Conectar Señal GitHub</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </SafeSignInButton>

              <SafeSignInButton>
                <button className="font-sans text-xs font-medium tracking-[0.15em] text-zinc-400 hover:text-white transition-colors uppercase px-10 py-4 border border-zinc-800 hover:border-zinc-500 rounded-full backdrop-blur-sm bg-zinc-950/30 cursor-pointer">
                  Entrar al Coliseo
                </button>
              </SafeSignInButton>
            </>
          )}

          {isLoaded && isSignedIn && (
            <>
              <Link 
                href="/dashboard/feed"
                className="group relative bg-emerald-500 hover:bg-emerald-400 text-black font-sans text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] rounded-full flex items-center gap-3 cursor-pointer"
              >
                <span className="relative z-10">Ir a la Terminal</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link 
                href="/dashboard/arenas"
                className="font-sans text-xs font-medium tracking-[0.15em] text-zinc-400 hover:text-white transition-colors uppercase px-10 py-4 border border-zinc-800 hover:border-zinc-500 rounded-full backdrop-blur-sm bg-zinc-950/30 cursor-pointer"
              >
                Entrar al Coliseo
              </Link>
            </>
          )}
        </div>
      </main>

      {/* Structural Base */}
      <footer className="w-full border-t border-zinc-900/50 bg-black/40 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] uppercase block">01 // Verificación Pura</span>
            <p className="text-zinc-500 font-light text-xs leading-relaxed tracking-wide">
              Auditoría OAuth de solo lectura. El sistema audita la matemática de tu código, no tus palabras.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] uppercase block">02 // Suelo Criptográfico</span>
            <p className="text-zinc-500 font-light text-xs leading-relaxed tracking-wide">
              Fija tu valor. El kernel rechaza de forma implacable cualquier oferta por debajo de tu umbral mínimo.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <span className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] uppercase block">03 // Arenas 24/7</span>
            <p className="text-zinc-500 font-light text-xs leading-relaxed tracking-wide">
              Resuelve sandboxes en entornos aislados. Escala en el ranking y reclama recompensas en tiempo real.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}