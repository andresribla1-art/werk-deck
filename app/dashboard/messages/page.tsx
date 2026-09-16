"use client";

export default function MessagesPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 h-[calc(100vh-120px)] flex flex-col md:flex-row gap-6">
      {/* Channels Sidebar */}
      <div className="w-full md:w-80 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-4 space-y-4">
        <p className="text-[10px] font-mono text-[#00FF88] uppercase tracking-widest px-2">
          🛡️ CANALES SEGUROS
        </p>

        <div className="space-y-2">
          <div className="p-3 bg-emerald-950/20 border border-[#00FF88]/30 rounded-xl cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-white">Elena Rostova</span>
              <span className="text-[9px] font-mono text-zinc-500">10:42 AM</span>
            </div>
            <p className="text-[11px] font-mono text-[#00FF88] truncate">CyberShield Solutions</p>
            <p className="text-xs text-zinc-400 truncate mt-1">Revisamos tu ejecución en la Arena...</p>
          </div>
        </div>
      </div>

      {/* Main Chat Body */}
      <div className="flex-1 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between">
        <div className="border-b border-white/10 pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold text-white">Elena Rostova</h2>
            <p className="text-[10px] font-mono text-[#00FF88]">● PROTOCOL AES-256 • SECURE</p>
          </div>
          <button className="text-xs font-mono text-zinc-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg">
            VER OFERTA ORIGINAL ↗
          </button>
        </div>

        <div className="flex-1 py-6 space-y-4">
          <div className="max-w-md bg-black/60 border border-white/10 p-4 rounded-2xl space-y-2">
            <p className="text-xs text-zinc-200 leading-relaxed font-sans">
              Revisamos tu ProofScore y el despliegue del enrutador en Rust. El benchmark de latencia es exactamente lo que buscamos. ¿Tendrías 15 min esta semana para hablar del rol?
            </p>
            <p className="text-[9px] font-mono text-zinc-500 text-right">HOY, 10:42 AM</p>
          </div>
        </div>

        <div className="flex gap-2 pt-4 border-t border-white/10">
          <input 
            type="text" 
            placeholder="Escribe un mensaje encriptado..." 
            className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00FF88]/50 font-sans" 
          />
          <button className="px-6 py-3 bg-[#00FF88] text-black font-mono font-bold text-xs rounded-xl hover:bg-[#00FF88]/90 transition">
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}