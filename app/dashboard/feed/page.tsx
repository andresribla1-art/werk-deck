"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, GitCommit, ShieldCheck, Terminal, UserCheck } from "lucide-react";

export default function ExecutionFeed() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8 text-zinc-100 font-sans">
      {/* Visual Header (Sin duplicar la barra de navegación superior) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FF88]">
            // REAL-TIME EXECUTION STREAM
          </p>
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Muro de <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Ejecución Global</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3 bg-white/[0.02] px-4 py-2 rounded-xl border border-white/10 font-mono text-xs">
          <Activity className="w-4 h-4 text-[#00FF88] animate-pulse" />
          <span className="text-zinc-300">STREAMING ACTIVE</span>
          <span className="px-2 py-0.5 rounded bg-[#00FF88]/10 text-[#00FF88] text-[10px]">100% AUDITED</span>
        </div>
      </div>

      {/* Grid Principal de Tres Columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Columna Izquierda: Perfil y Estado */}
        <div className="lg:col-span-3 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-5 space-y-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl border border-[#00FF88]/40 bg-emerald-950/30 flex items-center justify-center font-mono text-xl font-bold text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.1)]">
              JD
            </div>
            <div>
              <h2 className="text-base font-medium text-white flex items-center justify-center gap-1.5">
                John Doe <UserCheck className="w-4 h-4 text-[#00FF88]" />
              </h2>
              <p className="text-[11px] font-mono text-zinc-400">&gt;_ SYS.ARCHITECT</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00FF88]" /> PROOFSCORE
              </span>
              <span className="text-[#00FF88] font-bold text-sm tabular-nums">890</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>RANKING</span>
              <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white text-[10px]">Top 2%</span>
            </div>
          </div>
        </div>

        {/* Columna Central: Stream de Actividad */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-5 space-y-4 hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-[#00FF88]/30 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#00FF88]" />
                </div>
                <div>
                  <span className="text-sm font-medium text-white">@alex_vortex</span>
                  <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 bg-[#00FF88]/10 text-[#00FF88] rounded">VERIFIED</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Hace 2 min</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Optimización del motor de eventos concurrentes. Latencia reducida a <span className="font-mono text-[#00FF88] bg-[#00FF88]/10 px-1 py-0.5 rounded">&lt; 12ms</span> en entorno de producción.
            </p>

            <div className="grid grid-cols-2 gap-3 bg-black/40 p-3 rounded-xl border border-white/5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <GitCommit className="w-3.5 h-3.5 text-zinc-500" />
                <div>
                  <p className="text-[8px] text-zinc-500 uppercase tracking-widest">COMMIT</p>
                  <p className="text-[#00FF88] text-[11px]">a4f89b2</p>
                </div>
              </div>
              <div>
                <p className="text-[8px] text-zinc-500 uppercase tracking-widest">REPO</p>
                <p className="text-zinc-300 text-[11px] truncate">werkdeck/core-engine</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha: Telemetría */}
        <div className="lg:col-span-3 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00FF88] uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Telemetría de Red</span>
          </div>

          <div className="space-y-3 font-mono text-xs pt-2">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Nodos Activos</span>
              <span className="text-white font-bold tabular-nums">2,462</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-zinc-400">Latencia</span>
              <span className="text-[#00FF88] font-bold tabular-nums">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Bloque Actual</span>
              <span className="text-white font-bold tabular-nums">#849,201</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}