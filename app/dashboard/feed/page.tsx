export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                Kernel Sync: Real-Time
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
              Muro de Ejecución Global
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <aside className="hidden lg:block lg:col-span-3">
            <div className="bg-[#121215] border border-zinc-800 rounded-lg overflow-hidden sticky top-8 shadow-xl">
              <div className="h-16 bg-gradient-to-r from-zinc-800 to-[#121215] border-b border-zinc-800"></div>
              <div className="px-6 pb-6 relative">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-md absolute -top-8 flex items-center justify-center shadow-lg">
                  <span className="font-mono text-xl font-bold text-white">JD</span>
                </div>
                <div className="mt-10">
                  <h2 className="text-lg font-semibold text-white tracking-tight">John Doe</h2>
                  <p className="font-mono text-xs text-zinc-400 tracking-wider mt-1 font-medium">SYS.ARCHITECT // Lvl 4</p>
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-medium">ProofScore</span>
                    <span className="font-mono text-base text-emerald-400 font-bold">890</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-medium">Global Rank</span>
                    <span className="font-mono text-base text-zinc-200 font-semibold">Top 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 space-y-6">
            <article className="bg-[#121215] border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-200 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-md flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-emerald-400">AV</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                      @alex_vortex 
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono rounded border border-emerald-500/30 font-semibold">PRO</span>
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-0.5">Hace 2 min • Despliegue en Producción</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 mb-6">
                <p className="text-sm font-normal text-zinc-200 leading-relaxed">
                  Implementación del enrutador de agentes autónomos completada. Reducción de latencia a <span className="font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800/50 px-1.5 py-0.5 rounded font-semibold">&lt; 15ms</span> bajo carga concurrente extrema.
                </p>
              </div>

              <div className="bg-[#18181b] border border-zinc-800 rounded-md p-4 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider font-medium mb-1">Target Repo</p>
                  <p className="font-mono text-xs text-zinc-200 font-semibold">werkdeck/core-engine</p>
                </div>
                <div className="w-px bg-zinc-800 hidden sm:block"></div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider font-medium mb-1">Commit Hash</p>
                  <p className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    a4f89b2
                  </p>
                </div>
              </div>
            </article>
          </main>

          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-[#121215] border border-zinc-800 rounded-lg p-6 shadow-xl">
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 flex items-center justify-between font-bold">
                Network Telemetry
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
                  <span className="text-xs text-zinc-400 font-medium">Nodos Activos</span>
                  <span className="font-mono text-sm text-white font-semibold">2,462</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-zinc-800/50 pb-2">
                  <span className="text-xs text-zinc-400 font-medium">Latencia Promedio</span>
                  <span className="font-mono text-sm text-emerald-400 font-bold">12ms</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400 font-medium">Bloques</span>
                  <span className="font-mono text-sm text-white font-semibold">#849,201</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}