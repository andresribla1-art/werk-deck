export default function ExecutionFeed() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-zinc-300 p-6 md:p-12 font-sans selection:bg-emerald-500/30 max-w-[1600px] mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900/80 pb-8 mb-12 gap-4">
        <div>
          <p className="text-emerald-400 font-mono text-xs tracking-[0.3em] mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
            // LIVE NETWORK TELEMETRY
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">Muro de Ejecución Global</h1>
        </div>
        <div className="bg-zinc-950 border border-zinc-900 px-6 py-3 rounded-none flex items-center gap-6">
          <div>
            <p className="font-mono text-[10px] text-zinc-500 tracking-wider">NODOS ACTIVOS</p>
            <p className="font-mono text-2xl text-emerald-400 font-medium">2,462</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8 space-y-4">
          <div className="group bg-zinc-950/70 border border-zinc-900 hover:border-emerald-500/40 p-8 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-950/80 text-emerald-400 font-mono text-xs px-3 py-2 border border-emerald-900/50">AL</div>
                <div>
                  <h3 className="text-white font-medium text-base">@alex_vortex</h3>
                  <p className="text-[11px] font-mono text-zinc-500 tracking-wide">HACE 2 MIN</p>
                </div>
              </div>
              <span className="bg-zinc-900/80 text-emerald-400 font-mono text-xs px-3 py-1 border border-zinc-800">SCORE: 942</span>
            </div>
            <p className="text-base font-light text-zinc-300 leading-relaxed mb-6">
              Despliegue verificado en producción: enrutador de agentes autónomos con latencia <span className="text-emerald-400 font-mono">{'< 15ms'}</span>.
            </p>
            <div className="flex flex-wrap gap-6 font-mono text-xs text-zinc-500 border-t border-zinc-900/80 pt-4">
              <span><strong className="text-emerald-500">TARGET:</strong> werkdeck/core-engine</span>
              <span><strong className="text-emerald-500">HASH:</strong> a4f89b2</span>
            </div>
          </div>
        </main>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-zinc-950 border border-zinc-900 p-8">
            <h4 className="font-mono text-xs text-emerald-400 tracking-[0.2em] mb-6">// NETWORK STATUS</h4>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                <span className="text-zinc-500 text-xs">LATENCIA GLOBAL</span>
                <span className="text-white text-base">12ms</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                <span className="text-zinc-500 text-xs">BLOQUES VALIDADOS</span>
                <span className="text-emerald-400 text-base">#849,201</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}