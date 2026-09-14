"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ArenasPage() {
  const router = useRouter()
  const [selectedTrack, setSelectedTrack] = useState<"ALL" | "PURE" | "AI" | "SECOPS">("ALL")
  const [activeSandbox, setActiveSandbox] = useState<string | null>(null)

  const arenas = [
    {
      id: "arena-01",
      title: "Zero-Latency Agentic Workflow Engine",
      category: "AI-NATIVE",
      difficulty: "EXTREME",
      reward: "1,500 USDC",
      participants: 48,
      description: "Construye y optimiza un enrutador de agentes autónomos con latencia inferior a 50ms bajo alta carga concurrente.",
      metric: "Prompt-to-Production Efficiency",
      track: "AI"
    },
    {
      id: "arena-02",
      title: "Rust Memory Management & Garbage Collection",
      category: "PURE CODE",
      difficulty: "HARD",
      reward: "800 USDC",
      participants: 112,
      description: "Resuelve fugas críticas de memoria en entornos de alto rendimiento utilizando concurrencia nativa en Rust.",
      metric: "Memory Safety & Zero-Copy",
      track: "PURE"
    },
    {
      id: "arena-03",
      title: "CyberShield Vulnerability Patch Challenge",
      category: "SPONSORED BOUNTY",
      difficulty: "INSANE",
      reward: "2,500 EUR",
      participants: 29,
      description: "Auditoría de contratos inteligentes y blindaje de infraestructura contra ataques de denegación de servicio.",
      metric: "CTF Exploit Mitigation",
      track: "SECOPS"
    }
  ]

  const filteredArenas = arenas.filter(a => {
    if (selectedTrack === "ALL") return true
    return a.track === selectedTrack
  })

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* 4K Cyber Grid Background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* HUD Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>COLISEO VIRTUAL // SANDBOXES AISLADOS 24/7</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
              Arenas de Competición Global
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-400">
              ESTADO DEL KERNEL: <strong className="text-emerald-400">OPTIMIZADO</strong>
            </div>
          </div>
        </div>

        {/* Filter Tracks */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs">
          <span className="text-zinc-500 mr-2">FILTRAR TRACK:</span>
          <button 
            onClick={() => setSelectedTrack("ALL")}
            className={`px-3 py-1.5 transition-colors uppercase ${selectedTrack === "ALL" ? "bg-emerald-500 text-black font-bold" : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white"}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setSelectedTrack("PURE")}
            className={`px-3 py-1.5 transition-colors uppercase ${selectedTrack === "PURE" ? "bg-emerald-500 text-black font-bold" : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white"}`}
          >
            Pure Code (No-AI)
          </button>
          <button 
            onClick={() => setSelectedTrack("AI")}
            className={`px-3 py-1.5 transition-colors uppercase ${selectedTrack === "AI" ? "bg-emerald-500 text-black font-bold" : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white"}`}
          >
            Vibe Coder (AI-Native)
          </button>
          <button 
            onClick={() => setSelectedTrack("SECOPS")}
            className={`px-3 py-1.5 transition-colors uppercase ${selectedTrack === "SECOPS" ? "bg-emerald-500 text-black font-bold" : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white"}`}
          >
            SecOps / CTF
          </button>
        </div>

        {/* Arenas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArenas.map((arena) => (
            <div 
              key={arena.id}
              className="relative bg-zinc-950/90 border border-zinc-900 hover:border-emerald-500/80 transition-all p-6 group flex flex-col justify-between"
            >
              {/* HUD Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-2 py-0.5">
                    {arena.category}
                  </span>
                  <span className="text-red-400 font-bold tracking-wider">
                    {arena.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {arena.title}
                </h3>

                <p className="text-sm text-zinc-400 mb-6 leading-relaxed font-sans">
                  {arena.description}
                </p>
              </div>

              <div className="space-y-4 border-t border-zinc-900 pt-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">RECOMPENSA:</span>
                  <strong className="text-emerald-400 text-sm">{arena.reward}</strong>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">DEV ACTIVOS:</span>
                  <span className="text-white">{arena.participants} concursantes</span>
                </div>

                <button 
                  onClick={() => alert(`Conectando al Sandbox aislado de ${arena.title}... Preparando entorno seguro.`)}
                  className="w-full bg-black hover:bg-emerald-500 text-emerald-400 hover:text-black font-mono font-bold text-xs py-3 border border-emerald-500/50 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>⚡ ENTRAR AL SANDBOX</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}