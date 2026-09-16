import React from 'react';
import { Send, Shield, Lock, ExternalLink } from 'lucide-react';

export default function Messages() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans p-8">
      {/* Structural Fix: Fixed Height Container with Integrated Input Terminal */}
      <div className="max-w-[1440px] mx-auto bg-[#0c0d12] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl grid grid-cols-12 h-[720px]">
        {/* Sidebar Channels */}
        <div className="col-span-4 border-r border-zinc-800/80 bg-[#090a0f] p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6 px-2">
              <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                CANALES SEGUROS
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded border border-emerald-500/30">
                3 ACTIVOS
              </span>
            </div>

            <div className="bg-[#12131a] border border-emerald-500/30 rounded-xl p-4 cursor-pointer shadow-lg">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-sm">Elena Rostova</h3>
                <span className="font-mono text-[10px] text-zinc-400">10:42 AM</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono font-semibold mb-2">CyberShield Solutions</p>
              <p className="text-xs text-zinc-400 line-clamp-1">Revisamos tu ejecución en la Arena...</p>
            </div>
          </div>

          <div className="p-3 bg-[#12131a] border border-zinc-800/80 rounded-lg flex items-center justify-between font-mono text-[10px] text-zinc-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              E2E ENCRYPTED
            </span>
            <span>AES-256</span>
          </div>
        </div>

        {/* Chat Stream Viewport */}
        <div className="col-span-8 flex flex-col justify-between bg-[#0c0d12]">
          {/* Header Bar */}
          <div className="p-6 border-b border-zinc-800/80 flex justify-between items-center bg-[#090a0f]/50">
            <div>
              <h2 className="text-base font-bold text-white">Elena Rostova</h2>
              <p className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                PROTOCOL AES-256 • SECURE
              </p>
            </div>
            <button className="font-mono text-xs text-zinc-300 hover:text-white flex items-center gap-1 bg-zinc-800/80 hover:bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700/50 transition">
              VER OFERTA ORIGINAL <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </div>

          {/* Conversation Stream */}
          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            <div className="max-w-xl bg-[#12131a] border border-zinc-800/80 rounded-xl p-5 shadow-md">
              <p className="text-sm text-zinc-200 leading-relaxed font-mono">
                Revisamos tu ProofScore y el despliegue del enrutador en Rust. El benchmark de latencia es exactamente lo que buscamos. ¿Tendrías 15 min esta semana para hablar del rol?
              </p>
              <span className="font-mono text-[10px] text-zinc-400 block mt-3">HOY, 10:42 AM</span>
            </div>
          </div>

          {/* Fixed Terminal Input Bar */}
          <div className="p-4 border-t border-zinc-800/80 bg-[#090a0f]">
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="> Escribe tu respuesta desencriptada..."
                className="flex-1 bg-[#12131a] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-emerald-500 transition"
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                SEND <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}