"use client"

import { useRouter } from "next/navigation"

export default function ProofProfilePage() {
  const router = useRouter()

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
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">// HUD_PROFILE</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="hover:text-white transition-colors">Execution Feed</a>
            <a href="/dashboard/arenas" className="hover:text-white transition-colors">Arenas</a>
            <a href="/dashboard/bidding" className="hover:text-white transition-colors">Talent Bidding</a>
            <a href="/dashboard/profile" className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Proof Profile</a>
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
        <div className="mb-10 border-b border-zinc-900 pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>IDENTIDAD CRIPTOGRÁFICA // PROOF PROFILE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">Panel de Autoridad Técnica</h1>
          <p className="text-zinc-400 text-sm mt-1">Métricas inmutables de código, repositorios auditados y rendimiento verificado en el ecosistema global.</p>
        </div>

        {/* Widgets de Métricas HUD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono mb-12">
          <div className="border border-zinc-800 bg-zinc-950 p-6 relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <p className="text-zinc-500 text-[10px] mb-1">PROOFSCORE GLOBAL</p>
            <p className="text-3xl font-black text-emerald-400">890</p>
            <p className="text-zinc-400 text-xs mt-2">Top 3% entre desarrolladores</p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-6 relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <p className="text-zinc-500 text-[10px] mb-1">COMMITS VERIFICADOS</p>
            <p className="text-3xl font-black text-white">342</p>
            <p className="text-emerald-400 text-xs mt-2">100% Hash Validated</p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-6 relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <p className="text-zinc-500 text-[10px] mb-1">DEPLOY SUCCESS RATE</p>
            <p className="text-3xl font-black text-white">98.4%</p>
            <p className="text-zinc-400 text-xs mt-2">Zero Rollbacks (Últimos 30d)</p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-6 relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <p className="text-zinc-500 text-[10px] mb-1">ARENAS GANADAS</p>
            <p className="text-3xl font-black text-white">2</p>
            <p className="text-emerald-400 text-xs mt-2">2,300 USDC Bounties</p>
          </div>
        </div>

        {/* Repositorios Vinculados */}
        <div className="font-mono">
          <h2 className="text-xs font-bold text-zinc-400 tracking-wider mb-4">// REPOSITORIOS CONECTADOS AL KERNEL</h2>
          
          <div className="space-y-4">
            <div className="border border-zinc-800 bg-zinc-950 p-6 flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">werkdeck/core-engine</p>
                <p className="text-zinc-500 text-xs mt-1">Owner • 124 commits validados • Pipeline CI/CD Activo</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                VERIFIED
              </span>
            </div>

            <div className="border border-zinc-800 bg-zinc-950 p-6 flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-white font-bold text-sm">autonomx/llm-router</p>
                <p className="text-zinc-500 text-xs mt-1">Contributor • 45 commits auditados</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}