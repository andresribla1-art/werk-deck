import React from 'react';
import { Lock, ShieldCheck, DollarSign } from 'lucide-react';

export default function TalentBidding() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans p-8">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-10 pb-6 border-b border-zinc-800/80">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold block mb-1">
            TALENT DISCOVERY ENGINE
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Control Salarial & Pujas</h1>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl leading-relaxed">
            Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa que no iguale o supere este valor.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Salary Threshold Control - Input Collision Fixed */}
          <div className="lg:col-span-7 bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-8 shadow-2xl">
            <h2 className="text-lg font-bold text-white mb-6 font-mono flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              UMBRAL MÍNIMO CONFIGURADO
            </h2>

            <div className="bg-[#12131a] border border-zinc-800/80 rounded-xl p-6 mb-6">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3 font-semibold">
                Base Anual Mínima
              </label>
              
              {/* Isolated Currency Badge & Padding */}
              <div className="relative flex items-center">
                <div className="absolute left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded font-mono text-emerald-400 text-sm font-bold">
                  € EUR
                </div>
                <input 
                  type="text" 
                  defaultValue="85.000"
                  className="w-full bg-[#050507] border border-zinc-700/80 rounded-lg py-4 pl-28 pr-4 text-2xl font-mono font-extrabold text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase tracking-wider py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Fijar Valor En Red
            </button>
          </div>

          {/* Active Bids Container */}
          <div className="lg:col-span-5 bg-[#0c0d12] border border-zinc-800/80 rounded-xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white font-mono">Pujas Activas</h2>
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded">
                1 PENDIENTE
              </span>
            </div>

            <div className="bg-[#12131a] border border-zinc-800/80 rounded-xl p-5 hover:border-emerald-500/40 transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-base">CyberShield Solutions</h3>
                <span className="font-mono text-lg font-extrabold text-emerald-400">€95.000</span>
              </div>
              <p className="text-xs text-zinc-400 font-mono mb-6">Senior SecOps Engineer • 100% Remote</p>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs py-3 rounded-lg transition text-center uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  Desencriptar
                </button>
                <button className="bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold py-3 rounded-lg transition text-center uppercase tracking-wider border border-zinc-700/50">
                  Ignorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}