"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      {/* 4K Cyber Grid Background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem] z-0" />

      {/* Top HUD Navigation */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-white font-bold">WERKDECK // OASIS_GRID</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <span className="hidden md:inline">GLOBAL_NODES: <strong className="text-emerald-400">2,441</strong></span>
          <span className="hidden md:inline">ACTIVE_BIDS: <strong className="text-emerald-400">£142k+</strong></span>
          <button 
            onClick={() => router.push("/onboarding")}
            className="bg-zinc-950 hover:bg-emerald-500 text-white hover:text-black font-mono px-4 py-2 border border-zinc-800 transition-all uppercase tracking-wider text-xs"
          >
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-16">
        
        {/* Left Column: Radical Impact Statement */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1">
            <span>ESTADO DEL SISTEMA: CONECTADO AL COLISEO GLOBAL DE EJECUCIÓN</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            Tu código.<br />
            Tu prueba.<br />
            <span className="text-emerald-400">Verifica tu realidad.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl font-sans leading-relaxed">
            Olvídate de los currículums inflados y las entrevistas teóricas. Entra al mundo virtual de ejecución pura, escala en los rankings globales y deja que las empresas pujen en vivo por tu talento.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs">
            <button 
              onClick={() => router.push("/onboarding")}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 transition-all tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>⚡ ENTRAR AL SISTEMA</span>
              <span>→</span>
            </button>
            <button 
              onClick={() => router.push("/dashboard/arenas")}
              className="bg-black hover:bg-zinc-950 text-zinc-300 hover:text-white px-8 py-4 border border-zinc-800 transition-all tracking-wider uppercase flex items-center justify-center"
            >
              Explorar Arenas (01)
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900 font-mono text-xs">
            <div>
              <span className="block text-emerald-400 font-bold">100% OAUTH</span>
              <span className="text-zinc-500">GitHub Verified</span>
            </div>
            <div>
              <span className="block text-emerald-400 font-bold">ZERO SPAM</span>
              <span className="text-zinc-500">Ejecución Pura</span>
            </div>
            <div>
              <span className="block text-emerald-400 font-bold">GLOBAL B2B</span>
              <span className="text-zinc-500">Sueldos Protegidos</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Telemetry HUD Widget */}
        <div className="lg:col-span-5">
          <div className="relative bg-zinc-950 border border-zinc-900 p-6 shadow-2xl group hover:border-emerald-500/50 transition-all">
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500" />

            <div className="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-zinc-900 pb-4 mb-6">
              <span className="text-emerald-400 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                LIVE TELEMETRY // CORE NODE
              </span>
              <span>SECURE_ID #9482</span>
            </div>

            <div className="space-y-6 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block mb-1">ACTIVE REPO TARGET:</span>
                <span className="text-emerald-300 bg-black border border-zinc-900 p-2.5 block truncate">
                  github.com/werkdeck/core-engine
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>CODE QUALITY INDEX</span>
                    <span className="text-emerald-400">94.8%</span>
                  </div>
                  <div className="w-full bg-black h-1 border border-zinc-900">
                    <div className="bg-emerald-500 h-full w-[94.8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>ARCHITECTURE STABILITY</span>
                    <span className="text-emerald-400">96.2%</span>
                  </div>
                  <div className="w-full bg-black h-1 border border-zinc-900">
                    <div className="bg-emerald-500 h-full w-[96.2%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>PROOF-OF-WORK CONSISTENCY</span>
                    <span className="text-emerald-400">91.5%</span>
                  </div>
                  <div className="w-full bg-black h-1 border border-zinc-900">
                    <div className="bg-emerald-500 h-full w-[91.5%]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-[11px]">
                <span className="text-zinc-500">LATENCY: 14MS</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/20">
                  NODE STATUS: VERIFIED
                </span>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl w-full mx-auto px-6 py-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-zinc-500 gap-4">
        <div>SYS.STATUS // OPERATIONAL · ENCRYPTED · GDPR READY</div>
        <div>WERKDECK GLOBAL INFRASTRUCTURE © 2026</div>
      </footer>
    </div>
  )
}