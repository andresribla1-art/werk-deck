export default function ProofProfile() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-8 md:p-12 mb-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-black border border-white/10 flex items-center justify-center rounded-sm">
                <span className="font-mono text-2xl text-zinc-100">JD</span>
              </div>
              <div>
                <h1 className="text-3xl font-light text-zinc-100 tracking-tight">John Doe</h1>
                {/* FIX: ID de zinc-500 a zinc-400 */}
                <p className="font-mono text-xs text-zinc-400 tracking-widest mt-1">ID: WDK-8894-A</p>
              </div>
            </div>
            {/* FIX: Biografía de zinc-400 a zinc-300 para legibilidad absoluta */}
            <p className="text-sm font-light text-zinc-300 max-w-md leading-relaxed">
              Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            {/* FIX: Etiqueta de zinc-500 a zinc-400 */}
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em] mb-4">ProofScore</span>
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="60" stroke="#111" strokeWidth="2" fill="transparent" />
                <circle cx="64" cy="64" r="60" stroke="#10b981" strokeWidth="4" fill="transparent" strokeDasharray="377" strokeDashoffset="75" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </svg>
              <span className="absolute font-mono text-4xl text-zinc-100 font-light tracking-tighter">890</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <section>
            <h3 className="font-mono text-[10px] text-zinc-100 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">Métricas de Ejecución</h3>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6 space-y-6">
              <div>
                {/* FIX: zinc-500 a zinc-400 */}
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Commits Verificados</p>
                <div className="flex items-end gap-3">
                  <span className="font-mono text-3xl text-zinc-100 font-light leading-none">342</span>
                  <span className="font-mono text-[10px] text-emerald-400 mb-1">100% HASH VALIDATED</span>
                </div>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div>
                {/* FIX: zinc-500 a zinc-400 */}
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Deploy Success Rate</p>
                <div className="flex items-end gap-3">
                  <span className="font-mono text-3xl text-zinc-100 font-light leading-none">98.4%</span>
                  {/* FIX: zinc-500 a zinc-400 */}
                  <span className="font-mono text-[10px] text-zinc-400 mb-1">30D AVERAGE</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-mono text-[10px] text-zinc-100 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">Historial de Arenas</h3>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6 space-y-4">
              <div className="flex justify-between items-center p-3 bg-black border border-white/5 rounded-sm">
                <div>
                  <p className="text-sm text-zinc-100">Zero-Latency Router</p>
                  <p className="font-mono text-[9px] text-emerald-500 tracking-widest mt-1">1ER LUGAR</p>
                </div>
                {/* FIX: zinc-500 a zinc-400 */}
                <span className="font-mono text-xs text-zinc-400">1,500 USDC</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black border border-white/5 rounded-sm">
                <div>
                  <p className="text-sm text-zinc-100">SecOps CTF Challenge</p>
                  <p className="font-mono text-[9px] text-emerald-500 tracking-widest mt-1">2DO LUGAR</p>
                </div>
                {/* FIX: zinc-500 a zinc-400 */}
                <span className="font-mono text-xs text-zinc-400">800 USDC</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}