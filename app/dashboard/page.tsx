"use client";

import { motion } from "framer-motion";

export default function ExecutionFeedPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
      {/* HUD Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FF88]">
            // KERNEL SYNC REAL-TIME HUD
          </p>
          <h1 className="text-2xl font-light text-white tracking-tight">
            Muro de <span className="font-semibold">Ejecución Global</span>
          </h1>
        </div>
        <div className="flex items-center space-x-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
          <span className="text-[11px] font-mono text-zinc-300">SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left User Status Card */}
        <div className="lg:col-span-3 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-5 space-y-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#00FF88]/40 bg-emerald-950/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.15)]">
              <span className="font-mono text-2xl font-bold text-[#00FF88]">JD</span>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">John Doe</h2>
              <p className="text-[11px] font-mono text-zinc-400">&gt;_ SYS.ARCHITECT // Lvl 4</p>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-[10px] font-mono uppercase tracking-widest">
              VERIFIED DECK
            </span>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span>PROOFSCORE</span>
              <span className="text-[#00FF88] font-bold text-base tabular-nums">890</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>GLOBAL RANK</span>
              <span className="bg-white/5 px-2 py-0.5 rounded text-white text-[11px]">Top 2%</span>
            </div>
          </div>
        </div>

        {/* Center Live Execution Stream */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-[#00FF88]/30 flex items-center justify-center font-mono text-xs text-[#00FF88]">
                  AV
                </div>
                <div>
                  <span className="text-sm font-medium text-white">@alex_vortex</span>
                  <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 bg-[#00FF88]/10 text-[#00FF88] rounded">PRO</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Hace 2 min • Despliegue en Producción</span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              Implementación del enrutador de agentes autónomos completada. Reducción de latencia a <span className="font-mono text-[#00FF88] bg-[#00FF88]/10 px-1 py-0.5 rounded">&lt; 15ms</span> bajo carga concurrente extrema.
            </p>

            <div className="grid grid-cols-2 gap-3 bg-black/40 p-3 rounded-xl border border-white/5 font-mono text-xs">
              <div>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest">TARGET REPO</p>
                <p className="text-zinc-200 truncate font-mono">werkdeck/core-engine</p>
              </div>
              <div>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest">COMMIT HASH</p>
                <p className="text-[#00FF88] font-mono">a4f89b2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Telemetry Column */}
        <div className="lg:col-span-3 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00FF88] uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Network Telemetry</span>
          </div>

          <div className="space-y-4 font-mono text-xs pt-2">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Nodos Activos</span>
              <span className="text-white font-bold tabular-nums">2,462</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Latencia Promedio</span>
              <span className="text-[#00FF88] font-bold tabular-nums">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Bloques Validados</span>
              <span className="text-white font-bold tabular-nums">#849,201</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}