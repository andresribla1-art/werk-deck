export default function CompetitionArenas() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 font-sans">
      <header className="mb-12">
        <p className="text-emerald-500 font-mono text-xs tracking-[0.2em] mb-2 uppercase">
          // Sandboxes Aislados 24/7
        </p>
        <h1 className="text-4xl font-light text-white tracking-tight">Arenas de Competición</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Arena Card 1 */}
        <div className="group relative bg-zinc-950 border border-zinc-900 p-8 flex flex-col justify-between h-96 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="bg-emerald-950/50 text-emerald-400 font-mono text-[10px] px-2 py-1 uppercase tracking-widest border border-emerald-900/30">AI-Native</span>
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">Extreme</span>
            </div>
            <h2 className="text-2xl text-white font-medium leading-snug mb-3">Zero-Latency Agentic Workflow Engine</h2>
            <p className="text-sm font-light text-zinc-500 line-clamp-3">Construye y optimiza un enrutador de agentes autónomos con latencia inferior a 50ms bajo alta carga concurrente.</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-zinc-600">RECOMPENSA:</span>
              <span className="text-emerald-400 font-bold">1,500 USDC</span>
            </div>
            <div className="flex justify-between font-mono text-xs items-center border-t border-zinc-900 pt-4">
              <span className="text-zinc-600">DEV ACTIVOS:</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-white">48</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-transparent border border-zinc-800 text-white font-mono text-xs py-3 uppercase tracking-widest group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 transition-colors duration-300">
              Entrar al Sandbox →
            </button>
          </div>
        </div>
        {/* Clonar estructura para Pure Code y SecOps */}
      </div>
    </div>
  );
}