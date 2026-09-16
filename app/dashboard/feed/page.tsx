import React from 'react';
import { Activity, ShieldCheck, Terminal, Cpu, GitCommit, ArrowUpRight } from 'lucide-react';

export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 py-8 relative z-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">
                KERNEL SYNC // REAL-TIME HUD
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
              Muro de Ejecución Global
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Identity Panel */}
          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="h-20 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border-b border-zinc-800/80 relative">
                <div className="absolute right-3 top-3 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-400 font-semibold">
                  VERIFIED DECK
                </div>
              </div>
              <div className="px-6 pb-6 relative">
                <div className="w-16 h-16 bg-[#12131a] border-2 border-emerald-500/40 rounded-xl absolute -top-8 flex items-center justify-center shadow-2xl shadow-emerald-950/50">
                  <span className="font-mono text-xl font-bold text-emerald-400">JD</span>
                </div>
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-white tracking-tight">John Doe</h2>
                  <p className="font-mono text-xs text-zinc-400 mt-1 flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    SYS.ARCHITECT // Lvl 4
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">ProofScore</span>
                    <span className="font-mono text-lg text-emerald-400 font-extrabold drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">890</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Global Rank</span>
                    <span className="font-mono text-sm text-zinc-200 font-bold bg-zinc-800/60 px-2 py-0.5 rounded">Top 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Feed Activity */}
          <main className="lg:col-span-6 space-y-6">
            <article className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 shadow-2xl relative group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3.5 items-center">
                  <div className="w-11 h-11 bg-zinc-900 border border-zinc-700/80 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-emerald-400 shadow-inner">
                    AV
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-base tracking-tight">@alex_vortex</h3>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded-md border border-emerald-500/30 font-bold">
                        PRO
                      </span>
                    </div>
                    <p className="font-mono text-xs text-zinc-400 mt-0.5">Hace 2 min • Despliegue en Producción</p>
                  </div>
                </div>
              </div>
              
              <p className="text-zinc-200 text-sm leading-relaxed mb-5 font-normal">
                Implementación del enrutador de agentes autónomos completada. Reducción de latencia a{" "}
                <span className="font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-bold inline-flex items-center gap-1">
                  &lt; 15ms
                </span>{" "}
                bajo carga concurrente extrema.
              </p>

              <div className="bg-[#12131a] border border-zinc-800/80 rounded-lg p-4 grid grid-cols-2 gap-4 font-mono">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">Target Repo</span>
                  <span className="text-xs text-zinc-200 font-bold flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                    werkdeck/core-engine
                  </span>
                </div>
                <div className="border-l border-zinc-800/80 pl-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">Commit Hash</span>
                  <span className="text-xs text-emerald-400 font-bold tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                    a4f89b2
                  </span>
                </div>
              </div>
            </article>
          </main>

          {/* Network Telemetry HUD */}
          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
                <h4 className="font-mono text-xs text-zinc-200 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Network Telemetry
                </h4>
              </div>
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex justify-between items-center pb-3 border-b border-zinc-800/40">
                  <span className="text-zinc-400">Nodos Activos</span>
                  <span className="text-white font-bold text-sm">2,462</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-zinc-800/40">
                  <span className="text-zinc-400">Latencia Promedio</span>
                  <span className="text-emerald-400 font-bold text-sm">12ms</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-zinc-400">Bloques</span>
                  <span className="text-zinc-200 font-bold">#849,201</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}