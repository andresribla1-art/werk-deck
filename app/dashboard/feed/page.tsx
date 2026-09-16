import React from 'react';
import { Activity, Terminal, GitCommit, ShieldCheck } from 'lucide-react';

export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-emerald-500/30 relative">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Main Header */}
        <header className="mb-8 border-b border-zinc-800/80 pb-6 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">
                KERNEL SYNC // REAL-TIME HUD
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Muro de Ejecución Global</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Identity Side Panel - Fixed Avatar Overlap */}
          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl relative">
              <div className="h-16 bg-gradient-to-r from-emerald-950/40 to-zinc-900 border-b border-zinc-800/80 p-3 flex justify-end">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-400 font-bold">
                  VERIFIED DECK
                </span>
              </div>
              
              <div className="px-6 pb-6 pt-0 relative">
                {/* Avatar container strictly positioned above content without text overlap */}
                <div className="w-16 h-16 bg-[#12131a] border-2 border-emerald-500/40 rounded-xl -mt-8 mb-4 flex items-center justify-center shadow-lg relative z-10">
                  <span className="font-mono text-xl font-bold text-emerald-400">JD</span>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">John Doe</h2>
                  <p className="font-mono text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    SYS.ARCHITECT // Lvl 4
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 uppercase">ProofScore</span>
                    <span className="text-emerald-400 font-extrabold text-base">890</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 uppercase">Global Rank</span>
                    <span className="text-zinc-200 font-bold bg-zinc-800/60 px-2 py-0.5 rounded">Top 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Activity Feed */}
          <main className="lg:col-span-6 space-y-6">
            <article className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 hover:border-emerald-500/30 transition shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-700/80 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-emerald-400">
                    AV
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-sm">@alex_vortex</h3>
                      <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/30 font-bold">
                        PRO
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-500">Hace 2 min • Despliegue en Producción</p>
                  </div>
                </div>
              </div>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Implementación del enrutador de agentes autónomos completada. Reducción de latencia a{" "}
                <span className="font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                  &lt; 15ms
                </span>{" "}
                bajo carga concurrente extrema.
              </p>

              <div className="bg-[#12131a] border border-zinc-800/80 rounded-lg p-3.5 grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">Target Repo</span>
                  <span className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                    werkdeck/core-engine
                  </span>
                </div>
                <div className="border-l border-zinc-800/80 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">Commit Hash</span>
                  <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    a4f89b2
                  </span>
                </div>
              </div>
            </article>
          </main>

          {/* Network Telemetry */}
          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 shadow-xl">
              <h4 className="font-mono text-xs text-zinc-300 font-bold uppercase tracking-widest mb-4 pb-3 border-b border-zinc-800/80 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Network Telemetry
              </h4>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between items-center pb-2 border-b border-zinc-800/40">
                  <span className="text-zinc-500">Nodos Activos</span>
                  <span className="text-white font-bold">2,462</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-zinc-800/40">
                  <span className="text-zinc-500">Latencia Promedio</span>
                  <span className="text-emerald-400 font-bold">12ms</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-zinc-500">Bloques</span>
                  <span className="text-zinc-300 font-bold">#849,201</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}