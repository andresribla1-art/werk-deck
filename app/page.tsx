"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  const [globalCount, setGlobalCount] = useState(2438)
  const [liveBidsCount, setLiveBidsCount] = useState(142)

  // Simular actividad global viva estilo OASIS
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-black font-sans text-white selection:bg-emerald-500 selection:text-black relative overflow-hidden">
      
      {/* Efecto de rejilla de fondo estilo OASIS / Terminal HUD */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05150a_1px,transparent_1px),linear-gradient(to_bottom,#05150a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Header Superior Global */}
      <header className="relative z-50 flex items-center justify-between border-b border-zinc-900 bg-black/80 px-6 py-4 lg:px-12 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xl font-black tracking-widest text-white">
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">// OASIS_GRID</span>
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <span className="hidden sm:inline">GLOBAL_NODES: <strong className="text-emerald-400">{globalCount}</strong></span>
          <span className="hidden md:inline">ACTIVE_BIDS: <strong className="text-emerald-400">£{liveBidsCount}k+</strong></span>
          <button 
            onClick={() => router.push('/dashboard/feed')}
            className="px-4 py-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all font-bold tracking-wider"
          >
            INICIAR SESIÓN
          </button>
        </div>
      </header>

      {/* Hero Section - Inmersión Total */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-12 lg:pt-24">
        
        {/* Banner de Estado Global */}
        <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 border border-emerald-500/30 bg-emerald-500/5 font-mono text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ESTADO DEL SISTEMA: CONECTADO AL COLISEO GLOBAL DE EJECUCIÓN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje de Impacto */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
              Tu Código. <br />
              Tu Prueba. <br />
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">Verifica tu Realidad.</span>
            </h1>
            
            <p className="text-zinc-400 font-sans text-lg max-w-xl leading-relaxed">
              Olvídate de los currículums inflados y las entrevistas teóricas. Entra al mundo virtual de ejecución pura, escala en los rankings globales y deja que las empresas pujen en vivo por tu talento.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
              <button 
                onClick={() => router.push('/dashboard/feed')}
                className="px-8 py-4 bg-emerald-400 text-black font-extrabold hover:bg-emerald-300 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] tracking-wider flex items-center gap-3"
              >
                <span>&gt; ENTRAR AL SISTEMA</span>
              </button>
              <button 
                onClick={() => router.push('/dashboard/arenas')}
                className="px-6 py-4 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all tracking-wider"
              >
                EXPLORAR ARENAS (01)
              </button>
            </div>

            {/* Credenciales de confianza estilo HUD */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900 font-mono text-xs text-zinc-500">
              <div>
                <p className="text-emerald-400 font-bold text-sm">100% OAUTH</p>
                <p>GitHub Verified</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-sm">ZERO SPAM</p>
                <p>Ejecución Pura</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-sm">GLOBAL B2B</p>
                <p>Sueldos Protegidos</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: HUD Holográfico en Vivo (Estilo OASIS Telemetry) */}
          <div className="lg:col-span-5">
            <div className="border border-emerald-500/30 bg-zinc-950/90 p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative group backdrop-blur-xl">
              
              {/* Esquinas decorativas de HUD */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />

              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">LIVE TELEMETRY // CORE NODE</span>
                </div>
                <span className="text-zinc-500">SECURE_ID #9482</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-black border border-zinc-900">
                  <p className="text-zinc-500 text-[10px]">ACTIVE REPO TARGET:</p>
                  <p className="text-emerald-400 font-bold">github.com/werkdeck/core-engine</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-zinc-400">CODE QUALITY INDEX</span>
                      <span className="text-emerald-400 font-bold">94.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[94.8%] shadow-[0_0_10px_#10b981]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-zinc-400">ARCHITECTURE STABILITY</span>
                      <span className="text-emerald-400 font-bold">96.2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[96.2%] shadow-[0_0_10px_#10b981]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-zinc-400">PROOF-OF-WORK CONSISTENCY</span>
                      <span className="text-emerald-400 font-bold">91.5%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[91.5%] shadow-[0_0_10px_#10b981]" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500">
                  <span>LATENCY: 14MS</span>
                  <span className="text-emerald-400 font-bold">NODE STATUS: VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer minimalista de alta tecnología */}
      <footer className="relative z-50 border-t border-zinc-900 bg-black py-6 px-6 lg:px-12 font-mono text-xs text-zinc-600 flex flex-wrap justify-between items-center gap-4">
        <p>SYS.STATUS // OPERATIONAL · ENCRYPTED · GDPR READY · 24/7</p>
        <p className="text-emerald-400">WERKDECK GLOBAL INFRASTRUCTURE © 2026</p>
      </footer>

    </main>
  )
}