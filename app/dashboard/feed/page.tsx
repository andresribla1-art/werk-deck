"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ExecutionFeedPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"all" | "deploys" | "arenas" | "bids">("all")
  const [filterTech, setFilterTech] = useState<string>("ALL")

  // Mock de eventos en vivo que simulan el coliseo global
  const feedEvents = [
    {
      id: "ev-01",
      type: "DEPLOY",
      user: "alex_vortex",
      score: 942,
      avatarBg: "bg-emerald-950 text-emerald-400 border-emerald-500/50",
      content: "Despliegue verificado en producción: enrutador de agentes con latencia < 15ms.",
      target: "werkdeck/core-engine",
      hash: "a4f89b2",
      time: "Hace 2 min",
      bounty: null,
      badge: "CORE SW"
    },
    {
      id: "ev-02",
      type: "ARENA_WIN",
      user: "cryptosec_ghost",
      score: 910,
      avatarBg: "bg-zinc-900 text-emerald-300 border-zinc-700",
      content: "Victoria en Arena [CyberShield Vulnerability Patch]. Buffer overflow neutralizado con éxito.",
      target: "Arena #03 - Insane",
      hash: "7c210e4",
      time: "Hace 14 min",
      bounty: "2,500 EUR",
      badge: "SECOPS"
    },
    {
      id: "ev-03",
      type: "BID_ACCEPTED",
      user: "elena_rust",
      score: 895,
      avatarBg: "bg-emerald-900/40 text-emerald-400 border-emerald-500/30",
      content: "Suelo salarial superado. Aceptó puja corporativa por AutonomX Systems.",
      target: "110,000 EUR/año + B2B Global",
      hash: "99ff11a",
      time: "Hace 42 min",
      bounty: "110k EUR",
      badge: "VIBE CODER"
    },
    {
      id: "ev-04",
      type: "DEPLOY",
      user: "satoshi_node",
      score: 968,
      avatarBg: "bg-black text-emerald-400 border-emerald-500",
      content: "Optimizador de memoria en Rust integrado al kernel principal. Cero fugas de memoria detectadas.",
      target: "werkdeck/memory-pool",
      hash: "3b8812c",
      time: "Hace 1 hora",
      bounty: null,
      badge: "CORE SW"
    }
  ]

  const filteredEvents = feedEvents.filter(ev => {
    if (activeTab === "deploys" && ev.type !== "DEPLOY") return false
    if (activeTab === "arenas" && ev.type !== "ARENA_WIN") return false
    if (activeTab === "bids" && ev.type !== "BID_ACCEPTED") return false
    if (filterTech !== "ALL" && ev.badge !== filterTech) return false
    return true
  })

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* 4K Cyber Grid Background Texture */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* HUD Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GRID_FEED // LIVE NETWORK TELEMETRY</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
              Muro de Ejecución Global
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-none text-zinc-400">
              NODOS ACTIVOS: <strong className="text-emerald-400">2,462</strong>
            </div>
            <button 
              onClick={() => router.push("/dashboard/arenas")}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 transition-colors uppercase tracking-wider flex items-center gap-2"
            >
              <span>⚡ ENTRAR A ARENAS</span>
            </button>
          </div>
        </div>

        {/* Dashboard Layout: Main Feed & Live Stats Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left / Center Column: Feed (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Control Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-950/80 border border-zinc-900 p-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <button 
                  onClick={() => setActiveTab("all")} 
                  className={`px-3 py-1.5 transition-colors uppercase ${activeTab === "all" ? "bg-emerald-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
                >
                  Todo el flujo
                </button>
                <button 
                  onClick={() => setActiveTab("deploys")} 
                  className={`px-3 py-1.5 transition-colors uppercase ${activeTab === "deploys" ? "bg-emerald-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
                >
                  Deploys
                </button>
                <button 
                  onClick={() => setActiveTab("arenas")} 
                  className={`px-3 py-1.5 transition-colors uppercase ${activeTab === "arenas" ? "bg-emerald-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
                >
                  Arenas
                </button>
                <button 
                  onClick={() => setActiveTab("bids")} 
                  className={`px-3 py-1.5 transition-colors uppercase ${activeTab === "bids" ? "bg-emerald-500 text-black font-bold" : "text-zinc-400 hover:text-white"}`}
                >
                  Subastas
                </button>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span>TRACK:</span>
                <select 
                  value={filterTech} 
                  onChange={(e) => setFilterTech(e.target.value)}
                  className="bg-black border border-zinc-800 text-emerald-400 px-2 py-1 outline-none font-mono"
                >
                  <option value="ALL">TODOS</option>
                  <option value="CORE SW">CORE SW</option>
                  <option value="SECOPS">SECOPS</option>
                  <option value="VIBE CODER">VIBE CODER</option>
                </select>
              </div>
            </div>

            {/* Event List with HUD Aesthetic */}
            <div className="space-y-4">
              {filteredEvents.map((ev) => (
                <div 
                  key={ev.id} 
                  className="relative bg-zinc-950/90 border border-zinc-900 hover:border-emerald-500/50 transition-all p-5 group"
                >
                  {/* HUD Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 flex items-center justify-center font-mono font-bold text-xs border ${ev.avatarBg}`}>
                        {ev.user.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-white">@{ev.user}</span>
                          <span className="font-mono text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5">
                            SCORE: {ev.score}
                          </span>
                          <span className="font-mono text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-800 px-1.5 py-0.5">
                            {ev.badge}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500">{ev.time}</span>
                      </div>
                    </div>
                    {ev.bounty && (
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-1">
                        BOUNTY: {ev.bounty}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-zinc-300 font-sans mb-3 pl-13">
                    {ev.content}
                  </p>

                  <div className="flex items-center justify-between border-t border-zinc-900/80 pt-3 mt-3 font-mono text-[11px] text-zinc-500">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400/80">TARGET: {ev.target}</span>
                      <span>·</span>
                      <span>HASH: {ev.hash}</span>
                    </div>
                    <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      VERIFICADO POR NODO // ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Global Telemetry & Quick Navigation Sidebar */}
          <div className="space-y-6">
            
            {/* Network Status Card */}
            <div className="bg-zinc-950 border border-zinc-900 p-5 space-y-4">
              <div className="font-mono text-xs text-emerald-400 flex items-center justify-between border-b border-zinc-900 pb-2">
                <span>// NETWORK STATUS</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>LATENCIA GLOBAL:</span>
                  <span className="text-white">12ms</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>BLOQUES VALIDADOS:</span>
                  <span className="text-emerald-400">#849,201</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>SUELDO MEDIO PUJAS:</span>
                  <span className="text-white">€94,500</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-zinc-950 border border-zinc-900 p-5 space-y-4">
              <div className="font-mono text-xs text-emerald-400 border-b border-zinc-900 pb-2">
                <span>// ACCESOS RÁPIDOS AL OASIS</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <button 
                  onClick={() => router.push("/dashboard/arenas")}
                  className="w-full text-left bg-black hover:bg-emerald-950/30 border border-zinc-900 hover:border-emerald-500/50 p-3 text-zinc-300 hover:text-emerald-400 transition-all flex items-center justify-between"
                >
                  <span>⚔️ Coliseo de Arenas</span>
                  <span>→</span>
                </button>
                <button 
                  onClick={() => router.push("/dashboard/bidding")}
                  className="w-full text-left bg-black hover:bg-emerald-950/30 border border-zinc-900 hover:border-emerald-500/50 p-3 text-zinc-300 hover:text-emerald-400 transition-all flex items-center justify-between"
                >
                  <span>💰 Subasta de Talento</span>
                  <span>→</span>
                </button>
                <button 
                  onClick={() => router.push("/dashboard/profile")}
                  className="w-full text-left bg-black hover:bg-emerald-950/30 border border-zinc-900 hover:border-emerald-500/50 p-3 text-zinc-300 hover:text-emerald-400 transition-all flex items-center justify-between"
                >
                  <span>🎯 Proof Profile HUD</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Protocol Notice */}
            <div className="border border-emerald-500/20 bg-emerald-950/10 p-4 font-mono text-[11px] text-zinc-400 space-y-2">
              <p className="text-emerald-400 font-bold">ZERO-SPAM PROTOCOL ACTIVE</p>
              <p className="leading-relaxed">
                Cualquier publicación no respaldada por un hash de código verificado o despliegue real es rechazada automáticamente por el kernel de la red.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}