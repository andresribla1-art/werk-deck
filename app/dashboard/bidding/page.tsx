import React from 'react';
import { Lock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { WerkDeckNavbarLogo } from './WerkDeckNavbarLogo';

export default function TalentBidding() {
  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans">
      <nav className="border-b border-zinc-800/80 bg-[#08090d]/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <WerkDeckNavbarLogo />
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="#feed" className="hover:text-zinc-200 transition">Execution Feed</a>
            <a href="#arenas" className="hover:text-zinc-200 transition">Arenas</a>
            <a href="#bidding" className="text-emerald-400 font-bold border-b border-emerald-400 pb-0.5">Talent Bidding</a>
            <a href="#profile" className="hover:text-zinc-200 transition">Proof Profile</a>
            <a href="#messages" className="hover:text-zinc-200 transition">Messages</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto p-6 md:p-8 space-y-8">
        <header className="pb-6 border-b border-zinc-800/80">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-1">
            TALENT DISCOVERY ENGINE
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Control Salarial & Pujas</h1>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl leading-relaxed font-normal">
            Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa que no iguale o supere este valor.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#0c0d12] border border-zinc-800/80 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white mb-6 font-mono flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-emerald-400" />
                UMBRAL MÍNIMO CONFIGURADO
              </h2>

              <div className="bg-[#12131a] border border-zinc-800/80 rounded-2xl p-6 mb-6">
                <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3 font-semibold">
                  Base Anual Mínima
                </label>
                
                {/* Solución de Entrada Independiente para Evitar Superposiciones */}
                <div className="flex items-center bg-[#050507] border border-zinc-700/80 rounded-xl overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition">
                  <div className="bg-emerald-500/10 text-emerald-400 border-r border-zinc-700/80 px-5 py-4 font-mono font-extrabold text-sm flex items-center gap-1.5 shrink-0 select-none">
                    <span>€</span>
                    <span className="text-xs opacity-80">EUR</span>
                  </div>
                  <input 
                    type="text" 
                    defaultValue="85.000"
                    className="w-full bg-transparent py-4 px-6 text-2xl font-mono font-black text-white focus:outline-none tracking-tight"
                  />
                </div>
                <span className="font-mono text-[11px] text-zinc-500 mt-3 block">
                  *Cualquier oferta inferior a este monto será bloqueada por el Smart Contract.
                </span>
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest py-4 rounded-xl transition shadow-[0_0_25px_rgba(16,185,129,0.25)] active:scale-[0.99]">
              Fijar Valor En Red
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#0c0d12] border border-zinc-800/80 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white font-mono">Pujas Activas</h2>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded-md">
                  1 PENDIENTE
                </span>
              </div>

              <div className="bg-[#12131a] border border-zinc-800/80 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white text-lg">CyberShield Solutions</h3>
                  <span className="font-mono text-xl font-black text-emerald-400">€95.000</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono mb-6">Senior SecOps Engineer • 100% Remote</p>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-xs py-3.5 rounded-xl transition text-center uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    Desencriptar
                  </button>
                  <button className="bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold py-3.5 rounded-xl transition text-center uppercase tracking-wider border border-zinc-700/50">
                    Ignorar
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verificación Criptográfica
              </span>
              <a href="#rules" className="text-emerald-400 hover:underline flex items-center gap-0.5">
                Reglas de Subasta <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}