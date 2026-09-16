"use client";

import { motion } from "framer-motion";

export default function TalentBiddingPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
      <div className="border-b border-white/10 pb-4">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FF88]">
          // TALENT DISCOVERY ENGINE
        </p>
        <h1 className="text-3xl font-light text-white tracking-tight">
          Control Salarial & <span className="font-semibold">Pujas</span>
        </h1>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa que no iguale o supere este valor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Threshold configuration */}
        <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-6">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#00FF88]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="uppercase tracking-wider font-semibold">UMBRAL MÍNIMO CONFIGURADO</span>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">BASE ANUAL MÍNIMA</label>
            <div className="flex items-center bg-black/50 border border-white/15 rounded-xl overflow-hidden p-1">
              <span className="px-4 py-2 font-mono text-xs text-[#00FF88] bg-emerald-950/40 rounded-lg border border-[#00FF88]/30">€ EUR</span>
              <input 
                type="text" 
                defaultValue="85.000" 
                className="w-full bg-transparent px-4 font-mono text-lg font-bold text-white focus:outline-none" 
              />
            </div>
            <p className="text-[11px] text-zinc-500 font-sans italic pt-1">
              *Cualquier oferta inferior a este monto será bloqueada por el Smart Contract.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-3.5 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/40 hover:bg-[#00FF88]/20 text-[#00FF88] font-mono text-xs font-semibold uppercase tracking-widest transition-all"
          >
            FIJAR VALOR EN RED
          </motion.button>
        </div>

        {/* Active Bids */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <h2 className="font-medium text-white text-base">Pujas Activas</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#00FF88]/10 text-[#00FF88] font-mono text-[10px] border border-[#00FF88]/30">
              1 PENDIENTE
            </span>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-semibold text-white">CyberShield Solutions</h3>
                <p className="text-xs font-mono text-zinc-400">Senior SecOps Engineer • 100% Remote</p>
              </div>
              <span className="text-xl font-mono font-bold text-[#00FF88] tabular-nums">€95.000</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-2.5 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] font-mono text-xs font-semibold hover:bg-[#00FF88]/20 transition">
                DESENCRIPTAR
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 font-mono text-xs hover:bg-white/10 transition">
                IGNORAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}