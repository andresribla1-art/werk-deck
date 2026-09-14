"use client"

import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="h-screen w-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black flex flex-col justify-between px-8 md:px-20 py-8 overflow-hidden relative">
      
      {/* 4K Cyber Grid & Holographic Scanner Background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)] z-0" />

      {/* Pure Minimalist Navigation */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="font-sans text-sm tracking-[0.2em] text-white font-semibold">WerkDeck</span>
        </div>
        
        <button 
          onClick={() => router.push("/onboarding")}
          className="font-mono text-xs tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors uppercase py-2 px-5 border border-zinc-900 hover:border-emerald-500/50 rounded-full bg-zinc-950/50 backdrop-blur-md"
        >
          Iniciar Sesión
        </button>
      </header>

      {/* Hero Section: WerkDeck Supremacy & Ready Player One Vibe */}
      <main className="max-w-6xl mx-auto w-full my-auto space-y-10 relative z-10 py-2">
        
        <div className="space-y-4">
          <div className="inline-block font-mono text-[10px] tracking-[0.3em] text-emerald-400 uppercase bg-emerald-950/30 px-3 py-1 border border-emerald-500/20 rounded-full">
            The Ultimate Execution Arena
          </div>
          
          {/* WerkDeck Monumental Branding */}
          <h1 className="text-6xl sm:text-9xl font-light tracking-tight text-white leading-none">
            Werk<span className="font-bold text-emerald-400">Deck</span>
          </h1>

          {/* Sub-phrase: Universal Ready Player One Inspiration */}
          <p className="text-base sm:text-xl text-zinc-300 font-light tracking-wide">
            Demuestra quién eres. <span className="text-emerald-400 font-medium">El mundo es tuyo.</span>
          </p>
        </div>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed tracking-tight">
          Cero currículums. Cero entrevistas teóricas. Conectamos la ejecución real de tu código con empresas globales que pujan en tiempo real por tu talento.
        </p>

        {/* Magnetic Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button 
            onClick={() => router.push("/onboarding")}
            className="group relative bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-center justify-center gap-4 rounded-full"
          >
            <span>Conectar GitHub Signal</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => router.push("/dashboard/arenas")}
            className="font-mono text-xs tracking-[0.15em] text-zinc-300 hover:text-white transition-colors uppercase px-6 py-4 border border-zinc-800 hover:border-zinc-600 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md"
          >
            Explorar el Coliseo
          </button>
        </div>

        {/* Immersive Value Pillars - Compacted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-900/80 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">01 / SEÑAL PURA</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Auditoría local mediante OAuth de solo lectura. Sin ruido.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">02 / SUELO PROTEGIDO</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Define tu umbral salarial mínimo. El kernel rechaza ofertas basura.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-emerald-400 font-bold tracking-widest block">03 / ARENAS 24/7</span>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Entornos aislados para demostrar maestría en código o flujos de IA.
            </p>
          </div>
        </div>

      </main>

      {/* Ultra Clean Footer */}
      <footer className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-zinc-600 gap-2 pt-2 relative z-10">
        <div>SYS.SECURE // ENCRYPTED KERNEL</div>
        <div className="text-zinc-500">WERKDECK GLOBAL INFRASTRUCTURE © 2026</div>
      </footer>

    </div>
  )
}