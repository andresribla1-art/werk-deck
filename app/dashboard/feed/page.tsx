export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-semibold">
                Kernel Sync: Real-Time
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight leading-none">
              Muro de Ejecución Global
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <aside className="hidden lg:block lg:col-span-3">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden sticky top-8">
              <div className="h-16 bg-gradient-to-r from-zinc-900 to-[#0a0a0a] border-b border-white/5"></div>
              <div className="px-6 pb-6 relative">
                <div className="w-16 h-16 bg-black border border-white/10 rounded-sm absolute -top-8 flex items-center justify-center backdrop-blur-md">
                  <span className="font-mono text-xl text-zinc-100">JD</span>
                </div>
                <div className="mt-10">
                  <h2 className="text-lg font-medium text-white tracking-tight">John Doe</h2>
                  {/* FIX: text-zinc-500 -> text-zinc-400 */}
                  <p className="font-mono text-[11px] text-zinc-400 tracking-wider mt-1">SYS.ARCHITECT // Lvl 4</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-end">
                    {/* FIX: text-zinc-500 -> text-zinc-400 */}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">ProofScore</span>
                    <span className="font-mono text-sm text-emerald-400">890</span>
                  </div>
                  <div className="flex justify-between items-end">
                    {/* FIX: text-zinc-500 -> text-zinc-400 */}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Global Rank</span>
                    <span className="font-mono text-sm text-zinc-300">Top 2%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-6 space-y-6">
            <article className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6 hover:border-white/10 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center">
                    <span className="font-mono text-xs text-emerald-500">AV</span>
                  </div>
                  <div>
                    <h3 className="text-zinc-100 font-medium text-sm flex items-center gap-2">
                      @alex_vortex 
                      <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[9px] font-mono rounded-sm border border-emerald-500/20">PRO</span>
                    </h3>
                    {/* FIX: text-zinc-500 -> text-zinc-400 */}
                    <p className="font-mono text-[10px] text-zinc-400 tracking-wider mt-0.5">Hace 2 min • Despliegue en Producción</p>
                  </div>
                </div>
                {/* FIX: text-zinc-600 -> text-zinc-400 para accesibilidad de botones */}
                <button className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
              </div>
              
              <div className="mt-4 mb-6">
                <p className="text-sm font-light text-zinc-300 leading-relaxed">
                  Implementación del enrutador de agentes autónomos completada. Reducción de latencia a <span className="font-mono text-emerald-400 bg-emerald-400/10 px-1 rounded-sm">&lt; 15ms</span> bajo carga concurrente extrema.
                </p>
              </div>

              <div className="bg-[#050505] border border-white/5 rounded-sm p-4 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  {/* FIX: text-zinc-500 -> text-zinc-400 */}
                  <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Target Repo</p>
                  <p className="font-mono text-xs text-zinc-300">werkdeck/core-engine</p>
                </div>
                <div className="w-px bg-white/5 hidden sm:block"></div>
                <div className="flex-1">
                  {/* FIX: text-zinc-500 -> text-zinc-400 */}
                  <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Commit Hash</p>
                  <p className="font-mono text-xs text-emerald-500 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    a4f89b2
                  </p>
                </div>
              </div>
            </article>
          </main>

          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6">
              <h4 className="font-mono text-[10px] text-zinc-100 uppercase tracking-[0.2em] mb-6 flex items-center justify-between">
                Network Telemetry
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              </h4>
              <ul className="space-y-5">
                <li className="flex justify-between items-baseline">
                  {/* FIX: text-zinc-400 está bien aquí por el peso de fuente, lo mantengo */}
                  <span className="text-xs text-zinc-400 font-light">Nodos Activos</span>
                  <span className="font-mono text-sm text-zinc-100">2,462</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400 font-light">Latencia Promedio</span>
                  <span className="font-mono text-sm text-emerald-400">12ms</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400 font-light">Bloques</span>
                  <span className="font-mono text-sm text-zinc-100">#849,201</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}