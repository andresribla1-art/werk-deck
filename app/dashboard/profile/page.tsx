import React from 'react';
import { Award, BarChart2, CheckCircle2 } from 'lucide-react';

export default function ProofProfile() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans p-8">
      <div className="max-w-[1440px] mx-auto space-y-8">
        <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#12131a] border-2 border-emerald-500/50 rounded-2xl flex items-center justify-center font-mono text-2xl font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                JD
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">John Doe</h1>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="font-mono text-xs text-zinc-400 mt-1 font-semibold">ID: WDK-8894-A</p>
                <p className="text-sm text-zinc-300 mt-2 max-w-xl leading-relaxed">
                  Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
                </p>
              </div>
            </div>

            <div className="bg-[#12131a] border border-zinc-800/80 p-6 rounded-xl flex items-center gap-6">
              <div className="text-right">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block font-bold">PROOFSCORE</span>
                <span className="font-mono text-4xl font-black text-emerald-400 tracking-tight">890</span>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 shadow-2xl">
            <h2 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              MÉTRICAS DE EJECUCIÓN
            </h2>
            
            <div className="space-y-4">
              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase block">Commits Verificados</span>
                  <span className="font-mono text-2xl font-extrabold text-white">342</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded">
                  100% HASH VALIDATED
                </span>
              </div>

              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase block">Deploy Success Rate</span>
                  <span className="font-mono text-2xl font-extrabold text-emerald-400">98.4%</span>
                </div>
                <span className="font-mono text-xs text-zinc-400">30D AVERAGE</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-6 shadow-2xl">
            <h2 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest mb-6">
              HISTORIAL DE ARENAS
            </h2>

            <div className="space-y-4 font-mono">
              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-white">Zero-Latency Router</h3>
                  <span className="text-[10px] text-emerald-400 font-bold">1ER LUGAR</span>
                </div>
                <span className="text-sm font-extrabold text-zinc-200">1,500 USDC</span>
              </div>

              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-white">SecOps CTF Challenge</h3>
                  <span className="text-[10px] text-amber-400 font-bold">2DO LUGAR</span>
                </div>
                <span className="text-sm font-extrabold text-zinc-200">800 USDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}