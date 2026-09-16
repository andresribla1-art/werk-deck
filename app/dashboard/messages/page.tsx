import React from 'react';
import { Send, Shield, Lock, ExternalLink } from 'lucide-react';
import { WerkDeckNavbarLogo } from './WerkDeckNavbarLogo';

export default function Messages() {
  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans">
      <nav className="border-b border-zinc-800/80 bg-[#08090d]/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <WerkDeckNavbarLogo />
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="#feed" className="hover:text-zinc-200 transition">Execution Feed</a>
            <a href="#arenas" className="hover:text-zinc-200 transition">Arenas</a>
            <a href="#bidding" className="hover:text-zinc-200 transition">Talent Bidding</a>
            <a href="#profile" className="hover:text-zinc-200 transition">Proof Profile</a>
            <a href="#messages" className="text-emerald-400 font-bold border-b border-emerald-400 pb-0.5">Messages</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto p-6 md:p-8">
        <div className="bg-[#0c0d12] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-12 h-[760px]">
          <div className="col-span-4 border-r border-zinc-800/80 bg-[#08090d] p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6 px-1">
                <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  CANALES SEGUROS
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded-md border border-emerald-500/30">
                  3 ACTIVOS
                </span>
              </div>

              <div className="bg-[#12131a] border border-emerald-500/40 rounded-xl p-4 cursor-pointer shadow-lg transition duration-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-white text-sm">Elena Rostova</h3>
                  <span className="font-mono text-[10px] text-zinc-500">10:42 AM</span>
                </div>
                <p className="text-xs text-emerald-400 font-mono font-semibold mb-2">CyberShield Solutions</p>
                <p className="text-xs text-zinc-400 line-clamp-1 font-normal">Revisamos tu ejecución en la Arena...</p>
              </div>
            </div>

            <div className="p-3.5 bg-[#12131a] border border-zinc-800/80 rounded-xl flex items-center justify-between font-mono text-[10px] text-zinc-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                E2E ENCRYPTED
              </span>
              <span className="text-emerald-400 font-bold">AES-256</span>
            </div>
          </div>

          <div className="col-span-8 flex flex-col justify-between bg-[#0c0d12]">
            <div className="p-6 border-b border-zinc-800/80 flex justify-between items-center bg-[#08090d]/60">
              <div>
                <h2 className="text-base font-bold text-white">Elena Rostova</h2>
                <p className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                  PROTOCOL AES-256 • SECURE
                </p>
              </div>
              <button className="font-mono text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 bg-zinc-800/80 hover:bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700/50 transition">
                VER OFERTA ORIGINAL <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div className="max-w-xl bg-[#12131a] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
                <p className="text-sm text-zinc-200 leading-relaxed font-mono">
                  Revisamos tu ProofScore y el despliegue del enrutador en Rust. El benchmark de latencia es exactamente lo que buscamos. ¿Tendrías 15 min esta semana para hablar del rol?
                </p>
                <span className="font-mono text-[10px] text-zinc-500 block mt-4 font-semibold">HOY, 10:42 AM</span>
              </div>
            </div>

            <div className="p-5 border-t border-zinc-800/80 bg-[#08090d]">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="> Escribe tu respuesta desencriptada..."
                  className="flex-1 bg-[#12131a] border border-zinc-700/80 rounded-xl px-5 py-3.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500 transition placeholder:text-zinc-600"
                />
                <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-xs px-7 py-3.5 rounded-xl flex items-center gap-2 transition shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-[0.98]">
                  SEND <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}