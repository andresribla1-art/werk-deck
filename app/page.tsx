"use client"

import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-emerald-500 selection:text-black flex flex-col justify-between px-6 lg:px-16 py-8">
      {/* Subtle Scanline Grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98103_1px,transparent_1px),linear-gradient(to_bottom,#10b98103_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      {/* Top Bar */}
      <header className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-xs tracking-widest text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-emerald-500 animate-pulse" />
          <span className="text-white font-bold">WERKDECK // 0.9.4</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>NODOS: <strong className="text-emerald-400">2,441</strong></span>
          <span>PUJAS: <strong className="text-emerald-400">£142K+</strong></span>
        </div>
        <button 
          onClick={() => router.push("/onboarding")}
          className="text-emerald-400 hover:text-white transition-colors uppercase"
        >
          [ INICIAR SESIÓN ]
        </button>
      </header>

      {/* Main Hero - Clean, Terminal & Raw */}
      <main className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12 space-y-12">
        <div className="space-y-4">
          <span className="text-xs text-emerald-500/80 tracking-widest block">
            // EL FIN DE LAS ENTREVISTAS TEÓRICAS
          </span>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
            Tu código habla.<br />
            El mercado <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-2">puja.</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-sans leading-relaxed">
          Sin currículums inflados. WerkDeck conecta tus repositorios verificados con empresas que compiten en vivo por contratar tu talento basándose en ejecución pura.
        </p>

        {/* Action Prompt */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <button 
            onClick={() => router.push("/onboarding")}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 text-xs uppercase tracking-widest transition-all flex items-center gap-3"
          >
            <span>⚡ CONECTAR GITHUB SIGNAL</span>
            <span>→</span>
          </button>
          
          <button 
            onClick={() => router.push("/dashboard/arenas")}
            className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest transition-colors py-2"
          >
            Explorar Arenas Activas (01) →
          </button>
        </div>

        {/* Minimal Live Terminal Stream */}
        <div className="pt-12 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-500">
          <div>
            <span className="text-emerald-400 block mb-1">01 // VERIFICACIÓN OAUTH</span>
            Auditoría de repositorios de forma local y de solo lectura. Cero ruido.
          </div>
          <div>
            <span className="text-emerald-400 block mb-1">02 // SUELO SALARIAL</span>
            Tú defines tu umbral mínimo; el kernel rechaza ofertas basura automáticamente.
          </div>
          <div>
            <span className="text-emerald-400 block mb-1">03 // COLISEO 24/7</span>
            Resuelve sandboxes en modo Pure Code o Vibe Coder y gana recompensas.
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-2 border-t border-zinc-950 pt-6">
        <div>SYS.SECURE // ENCRYPTED KERNEL</div>
        <div>WERKDECK INFRASTRUCTURE © 2026</div>
      </footer>
    </div>
  )
}