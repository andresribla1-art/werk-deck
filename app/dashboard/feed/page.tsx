"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Arena {
  id: string
  title: string
  type: "AI-NATIVE" | "PURE CODE" | "SPONSORED BOUNTY"
  difficulty: "EXTREME" | "HARD" | "INSANE"
  reward: string
  participants: number
  description: string
}

const arenasData: Arena[] = [
  {
    id: "1",
    title: "Zero-Latency Agentic Workflow Engine",
    type: "AI-NATIVE",
    difficulty: "EXTREME",
    reward: "1,500 USDC",
    participants: 48,
    description: "Construye y optimiza un enrutador de agentes autónomos con latencia inferior a 50ms bajo carga concurrente."
  },
  {
    id: "2",
    title: "Rust Memory Management & Garbage Collection",
    type: "PURE CODE",
    difficulty: "HARD",
    reward: "800 USDC",
    participants: 112,
    description: "Resuelve fugas críticas de memoria en entornos de alto rendimiento utilizando concurrencia nativa en Rust."
  },
  {
    id: "3",
    title: "CyberShield Vulnerability Patch Challenge",
    type: "SPONSORED BOUNTY",
    difficulty: "INSANE",
    reward: "2,500 EUR",
    participants: 29,
    description: "Auditoría de contratos inteligentes y blindaje de infraestructura contra ataques de denegación de servicio."
  }
]

export default function ArenasPage() {
  const router = useRouter()
  const [activeArena, setActiveArena] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black font-sans text-white selection:bg-emerald-500 selection:text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#030f06_1px,transparent_1px),linear-gradient(to_bottom,#030f06_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-50" />

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between border-b border-zinc-900 bg-black/90 px-6 py-4 lg:px-12 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-6">
          <span 
            onClick={() => router.push('/')} 
            className="text-xl font-black tracking-widest cursor-pointer hover:text-emerald-400 transition-colors"
          >
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">// ARENAS_GRID</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="hover:text-white transition-colors">Execution Feed</a>
            <a href="/dashboard/arenas" className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Arenas</a>
            <a href="/dashboard/bidding" className="hover:text-white transition-colors">Talent Bidding</a>
            <a href="/dashboard/profile" className="hover:text-white transition-colors">Proof Profile</a>
            <a href="/dashboard/messages" className="hover:text-white transition-colors">Messages</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            PROOF_SCORE: 890
          </span>
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 border-b border-zinc-900 pb-6 flex flex-wrap justify-between items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>COLISEO VIRTUAL // SANDBOXES AISLADOS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">Arenas de Competición Global</h1>
            <p className="text-zinc-400 text-sm mt-1">Demuestra destreza técnica extrema, supera benchmarks en vivo y reclama recompensas económicas inmediatas.</p>
          </div>
        </div>

        {/* Tarjetas de Arenas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {arenasData.map((arena) => (
            <div 
              key={arena.id}
              className="border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 relative group shadow-[0_0_20px_rgba(0,0,0,0.8)]"
            >
              {/* Esquinas HUD */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />

              <div>
                <div className="flex justify-between items-center mb-4 text-[10px]">
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                    {arena.type}
                  </span>
                  <span className="text-red-400 font-bold tracking-wider">{arena.difficulty}</span>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 font-sans tracking-tight">
                  {arena.title}
                </h2>

                <p className="text-zinc-400 font-sans text-xs mb-6 leading-relaxed">
                  {arena.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-900 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-[10px]">RECOMPENSA:</span>
                  <span className="text-emerald-400 font-extrabold text-sm">{arena.reward}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-[10px]">INSCRITOS:</span>
                  <span className="text-white">{arena.participants} devs activos</span>
                </div>

                <button 
                  onClick={() => alert(`> ACCEDIENDO AL SANDBOX SEGURO: ${arena.title}\n> INICIALIZANDO ENTORNO DE EJECUCIÓN...`)}
                  className="w-full py-3 bg-emerald-400 text-black font-extrabold hover:bg-emerald-300 transition-all tracking-wider text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
                >
                  &gt; ENTRAR AL SANDBOX
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}