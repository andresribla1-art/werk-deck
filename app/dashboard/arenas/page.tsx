export default function CompetitionArenas() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-zinc-300 p-6 md:p-12 font-sans max-w-[1600px] mx-auto">
      <header className="mb-12 border-b border-zinc-900/80 pb-8 flex justify-between items-end">
        <div>
          <p className="text-emerald-400 font-mono text-xs tracking-[0.3em] mb-3 uppercase">
            // Sandboxes Aislados 24/7
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">Arenas de Competición</h1>
        </div>
        <div className="hidden md:block font-mono text-xs text-zinc-500">
          ESTADO DEL KERNEL: <span className="text-emerald-400">OPTIMIZADO</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group relative bg-zinc-950 border border-zinc-900 p-8 flex flex-col justify-between h-[450px] hover:border-emerald-500/50 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="bg-emerald-950 text-emerald-400 font-mono text-xs px-3 py-1 uppercase tracking-widest border border-emerald-900/50">AI-Native</span>
              <span className="text-red-500 font-mono text-xs uppercase tracking-widest animate-pulse">Extreme</span>
            </div>
            <h2 className="text-2xl text-white font-medium leading-snug mb-4">Zero-Latency Agentic Workflow Engine</h2>
            <p className="text-sm font-light text-zinc-400 leading-relaxed">Construye y optimiza un enrutador de agentes autónomos con latencia inferior a 50ms bajo alta carga concurrente.</p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-zinc-900">
            <div className="flex justify-between items-center font-mono text-sm">
              <span className="text-zinc-500">RECOMPENSA:</span>
              <span className="text-emerald-400 font-bold text-lg">1,500 USDC</span>
            </div>
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-zinc-500">DEV ACTIVOS:</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-white">48 concursantes</span>
              </div>
            </div>
            <button className="w-full bg-zinc-900 border border-zinc-800 text-white font-mono text-xs py-4 uppercase tracking-[0.2em] group-hover:bg-emerald-400 group-hover:text-black group-hover:border-emerald-400 transition-all duration-300 font-bold">
              Entrar al Sandbox →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}