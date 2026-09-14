"use client"

import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="h-screen w-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black flex flex-col justify-between px-8 md:px-16 py-6 overflow-hidden">
      
      {/* Pure Minimalist Navigation */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase font-medium">WerkDeck</span>
        </div>
        
        <button 
          onClick={() => router.push("/onboarding")}
          className="font-mono text-xs tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors uppercase py-2 px-4 border border-zinc-900 hover:border-emerald-500/40 rounded-full"
        >
          Iniciar Sesión
        </button>
      </header>

      {/* Hero Section: Single Viewport Precision */}
      <main className="max-w-6xl mx-auto w-full my-auto space-y-8 py-2">
        
        <div className="space-y-4">
          <div className="inline-block font-mono text-[10px] tracking-[0.3em] text-emerald-400 uppercase bg-emerald-950/20 px-3 py-1 border border-emerald-500/20 rounded-sm">
            La Meritocracia Absoluta
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white">
            El currículum ha muerto.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500">
              Habla el código.
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed tracking-tight">
          Cero entrevistas teóricas. WerkDeck conecta la ejecución real de tus repositorios con empresas que pujan en vivo por tu talento.
        </p>

        {/* Magnetic Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button 
            onClick={() => router.push("/onboarding")}
            className="group relative bg-white hover:bg-emerald-400 text-black font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex items-center justify-center gap-4 rounded-full"
          >
            <span>Conectar GitHub Signal</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => router.push("/dashboard/arenas")}
            className="font-mono text-xs tracking-[0.15em] text-zinc-400 hover:text-white transition-colors uppercase px-6 py-4 border border-zinc-800 hover:border-zinc-600 rounded-full flex items-center justify-center"
          >
            Explorar el Coliseo
          </button>
        </div>

        {/* Immersive Value Pillars - Compacted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-zinc-900/80 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">01 / SEÑAL PURA</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Auditoría de repositorios mediante OAuth. Sin ruido, solo la verdad técnica.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">02 / SUELO PROTEGIDO</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Define tu umbral salarial mínimo. El kernel rechaza ofertas por debajo de tu valor.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">03 / ARENAS 24/7</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Coliseos aislados para demostrar maestría en código puro o flujos de IA.
            </p>
          </div>
        </div>

      </main>

      {/* Ultra Clean Footer */}
      <footer className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-zinc-600 gap-2 pt-2">
        <div>SYS.SECURE // ENCRYPTED KERNEL</div>
        <div className="text-zinc-500">WERKDECK GLOBAL INFRASTRUCTURE © 2026</div>
      </footer>

    </div>
  )
}