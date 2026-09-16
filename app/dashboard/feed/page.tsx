import React from 'react';
import { WerkDeckNavbarLogo } from '@/components/WerkDeckNavbarLogo';
import { Activity, GitCommit, ShieldCheck, Terminal, UserCheck } from 'lucide-react';

export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans selection:bg-emerald-500/30">
      <nav className="border-b border-zinc-800/80 bg-[#08090d]/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <WerkDeckNavbarLogo />
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="text-emerald-400 font-bold border-b-2 border-emerald-400 pb-0.5">Execution Feed</a>
            <a href="/dashboard/arenas" className="hover:text-zinc-200 transition">Arenas</a>
            <a href="/dashboard/bidding" className="hover:text-zinc-200 transition">Talent Bidding</a>
            <a href="/dashboard/profile" className="hover:text-zinc-200 transition">Proof Profile</a>
            <a href="/dashboard/messages" className="hover:text-zinc-200 transition">Messages</a>
          </div>
        </div>
        <div className="font-mono text-xs text-zinc-400 flex items-center gap-3">
          <span className="hidden sm:inline text-zinc-600">PROOFSCORE SYSTEM</span>
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shadow-[0_0_10px_rgba(16,185,129,0.15)]">
            JD
          </div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto p-6 md:p-10 space-y-8">
        <header className="border-b border-zinc-800/80 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold block mb-2">
              // KERNEL SYNC Real-Time HUD
            </span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Muro de Ejecución Global</h1>
          </div>
          <div className="flex items-center gap-3 bg-[#0c0d12] border border-zinc-800 px-4 py-2 rounded-xl font-mono text-xs shadow-lg">
            <span className="text-zinc-500">SYSTEM STATUS:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> OPTIMAL
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl transition duration-300">
              <div className="h-20 bg-gradient-to-r from-emerald-950/30 via-zinc-900 to-zinc-900 border-b border-zinc-800/80 p-3 flex justify-end">
                <span className="h-fit px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400 font-bold tracking-wider">
                  VERIFIED DECK
                </span>
              </div>
              <div className="px-6 pb-6 pt-0 relative">
                <div className="w-20 h-20 bg-[#12131a] border-2 border-emerald-500/50 rounded-2xl -mt-10 mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)] relative z-10 font-mono text-2xl font-black text-emerald-400">
                  JD
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">John Doe</h2>
                <p className="font-mono text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> SYS.ARCHITECT // Lvl 4
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px]">ProofScore</span>
                    <span className="text-emerald-400 font-extrabold text-xl tracking-tight">890</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Global Rank</span>
                    <span className="text-zinc-200 font-bold bg-zinc-800/80 px-2.5 py-1 rounded-md border border-zinc-700/50">Top 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 space-y-6">
            <article className="bg-[#0c0d12] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-6 transition duration-300 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3.5 items-center">
                  <div className="w-11 h-11 bg-[#12131a] border border-zinc-700 rounded-xl flex items-center justify-center font-mono text-sm font-bold text-emerald-400">
                    AV
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-base">@alex_vortex</h3>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/30 font-bold">
                        PRO
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-500 mt-0.5">Hace 2 min • Despliegue en Producción</p>
                  </div>
                </div>
              </div>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                Implementación del enrutador de agentes autónomos completada. Reducción de latencia a{' '}
                <span className="font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  &lt; 15ms
                </span>{' '}
                bajo carga concurrente extrema.
              </p>

              <div className="bg-[#12131a] border border-zinc-800 rounded-xl p-4 grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Target Repo</span>
                  <span className="text-zinc-200 font-bold flex items-center gap-1.5 truncate">
                    <GitCommit className="w-4 h-4 text-emerald-400 shrink-0" /> werkdeck/core-engine
                  </span>
                </div>
                <div className="border-l border-zinc-800 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Commit Hash</span>
                  <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> a4f89b2
                  </span>
                </div>
              </div>
            </article>
          </main>

          <aside className="lg:col-span-3">
            <div className="bg-[#0c0d12] border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <h4 className="font-mono text-xs text-zinc-300 font-bold uppercase tracking-widest mb-5 pb-3 border-b border-zinc-800 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" /> Network Telemetry
              </h4>
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex justify-between items-center pb-3 border-b border-zinc-800/40">
                  <span className="text-zinc-500">Nodos Activos</span>
                  <span className="text-white font-bold text-sm">2,462</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-zinc-800/40">
                  <span className="text-zinc-500">Latencia Promedio</span>
                  <span className="text-emerald-400 font-bold text-sm">12ms</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-zinc-500">Bloques</span>
                  <span className="text-zinc-300 font-bold text-sm">#849,201</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}