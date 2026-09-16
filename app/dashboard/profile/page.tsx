"use client";

export default function ProofProfilePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
      {/* Identity Card */}
      <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-2xl bg-emerald-950/40 border-2 border-[#00FF88] flex items-center justify-center font-mono text-2xl font-bold text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.15)]">
            JD
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-semibold text-white">John Doe</h1>
              <span className="text-[#00FF88]">✓</span>
            </div>
            <p className="text-xs font-mono text-zinc-400">&gt;_ ID: WDK-8894-A</p>
            <p className="text-xs text-zinc-300 max-w-lg font-sans">
              Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
            </p>
          </div>
        </div>

        <div className="bg-black/50 border border-white/10 rounded-2xl p-5 text-center min-w-[160px]">
          <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">PROOFSCORE</p>
          <p className="text-4xl font-mono font-bold text-[#00FF88] my-1 tabular-nums">890</p>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">TOP 2% GLOBAL</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4">
          <p className="text-[10px] font-mono text-[#00FF88] uppercase tracking-widest">📊 MÉTRICAS DE EJECUCIÓN</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono">
              <p className="text-[9px] text-zinc-500 uppercase">COMMITS VERIFICADOS</p>
              <p className="text-2xl font-bold text-white mt-1 tabular-nums">342</p>
            </div>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono">
              <p className="text-[9px] text-zinc-500 uppercase">DEPLOY SUCCESS RATE</p>
              <p className="text-2xl font-bold text-[#00FF88] mt-1 tabular-nums">98.4%</p>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4">
          <p className="text-[10px] font-mono text-[#00FF88] uppercase tracking-widest">🛡️ HISTORIAL DE ARENAS</p>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
              <span>Zero-Latency Router</span>
              <span className="text-[#00FF88] font-bold">1,500 USDC</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
              <span>SecOps CTF Challenge</span>
              <span className="text-amber-400 font-bold">800 USDC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}