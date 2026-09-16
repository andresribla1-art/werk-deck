import React from 'react';
import { Award, BarChart2, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export default function ProofProfile() {
  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans p-6 md:p-8">
      <div className="max-w-[1440px] mx-auto space-y-8">
        {/* User Card */}
        <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-[#12131a] border-2 border-emerald-500/50 rounded-2xl flex items-center justify-center font-mono text-3xl font-black text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)] shrink-0">
                JD
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">John Doe</h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
                </div>
                <p className="font-mono text-xs text-zinc-400 mt-1 font-semibold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> ID: WDK-8894-A
                </p>
                <p className="text-sm text-zinc-300 mt-3 max-w-2xl leading-relaxed font-normal">
                  Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
                </p>
              </div>
            </div>

            <div className="bg-[#12131a] border border-zinc-800/80 p-6 rounded-2xl flex items-center gap-6 shadow-xl shrink-0">
              <div className="text-right">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">PROOFSCORE</span>
                <span className="font-mono text-4xl font-black text-emerald-400 tracking-tight">890</span>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Award className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Dash Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-2xl p-7 shadow-2xl">
            <h2 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              MÉTRICAS DE EJECUCIÓN
            </h2>
            
            <div className="space-y-4">
              <div className="bg-[#12131a] border border-zinc-800/80 p-5 rounded-xl flex justify-between items-center">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Commits Verificados</span>
                  <span className="font-mono text-3xl font-black text-white">342</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded-md">
                  100% HASH VALIDATED
                </span>
              </div>

              <div className="bg-[#12131a] border border-zinc-800/80 p-5 rounded-xl flex justify-between items-center">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Deploy Success Rate</span>
                  <span className="font-mono text-3xl font-black text-emerald-400">98.4%</span>
                </div>
                <span className="font-mono text-xs text-zinc-400 font-semibold">30D AVERAGE</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-2xl p-7 shadow-2xl">
            <h2 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              HISTORIAL DE ARENAS
            </h2>

            <div className="space-y-4 font-mono">
              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-white">Zero-Latency Router</h3>
                  <span className="text-[10px] text-emerald-400 font-extrabold">1ER LUGAR</span>
                </div>
                <span className="text-sm font-black text-zinc-200">1,500 USDC</span>
              </div>

              <div className="bg-[#12131a] border border-zinc-800/80 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-white">SecOps CTF Challenge</h3>
                  <span className="text-[10px] text-amber-400 font-extrabold">2DO LUGAR</span>
                </div>
                <span className="text-sm font-black text-zinc-200">800 USDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}