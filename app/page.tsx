"use client"

import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black flex flex-col justify-between px-8 md:px-20 py-10">
      
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

      {/* Hero Section: Obsession with Perfection */}
      <main className="max-w-6xl mx-auto w-full my-auto py-20 space-y-12">
        
        <div className="space-y-6">
          <div className="inline-block font-mono text-[11px] tracking-[0.3em] text-emerald-400 uppercase bg-emerald-950/20 px-3 py-1 border border-emerald-500/20 rounded-sm">
            La Meritocracia Absoluta
          </div>
          
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase leading-[0.92] text-white">
            El currículum <br />
            ha muerto. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500">
              Habla el código.
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed tracking-tight">
          No más entrevistas teóricas ni filtros de recursos humanos. WerkDeck conecta la ejecución real de tu repositorio con empresas que pujan en vivo por tu talento.
        </p>

        {/* Magnetic Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6">
          <button 
            onClick={() => router.push("/onboarding")}
            className="group relative bg-white hover:bg-emerald-400 text-black font-mono text-xs font-bold tracking-[0.2em] uppercase px-10 py-5 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex items-center justify-center gap-4 rounded-full"
          >
            <span>Conectar GitHub Signal</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => router.push("/dashboard/arenas")}
            className="font-mono text-xs tracking-[0.15em] text-zinc-400 hover:text-white transition-colors uppercase px-8 py-5 border border-zinc-800 hover:border-zinc-600 rounded-full flex items-center justify-center"
          >
            Explorar el Coliseo
          </button>
        </div>

        {/* Immersive Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-zinc-900/80 font-mono text-xs">
          <div className="space-y-2">
            <span className="text-emerald-400 font-bold tracking-widest block">01 / SEÑAL PURA</span>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed">
              Auditoría local de repositorios mediante OAuth. Sin ruido, sin intermediarios, solo la verdad técnica.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-emerald-400 font-bold tracking-widest block">02 / SUELO PROTEGIDO</span>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed">
              Define tu umbral salarial mínimo. El kernel rechaza de forma implacable cualquier oferta corporativa por debajo de tu valor.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-emerald-400 font-bold tracking-widest block">03 / ARENAS 24/7</span>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed">
              Coliseos de desarrollo en entornos aislados donde demuestras maestría en código puro o flujos agénticos de IA.
            </p>
          </div>
        </div>

      </main>

      {/* Ultra Clean Footer */}
      <footer className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-zinc-600 gap-4 pt-8">
        <div>SYS.SECURE // ENCRYPTED KERNEL</div>
        <div className="text-zinc-500">WERKDECK GLOBAL INFRASTRUCTURE © 2026</div>
      </footer>

    </div>
  )
}