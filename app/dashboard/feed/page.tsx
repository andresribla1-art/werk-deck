export default function ExecutionFeed() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 font-sans selection:bg-emerald-500/30">
      <header className="flex justify-between items-end border-b border-zinc-900 pb-6 mb-10">
        <div>
          <p className="text-emerald-500 font-mono text-xs tracking-[0.2em] mb-2 flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
            LIVE NETWORK TELEMETRY
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">Muro de Ejecución Global</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="font-mono text-xs text-zinc-500">NODOS ACTIVOS</p>
          <p className="font-mono text-2xl text-emerald-400">2,462</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-4">
          {/* Feed Item 1 */}
          <div className="group bg-zinc-950/50 border border-zinc-900 p-6 rounded-sm hover:border-emerald-900/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-950 text-emerald-400 font-mono text-xs p-2 rounded-sm border border-emerald-900/50">AL</div>
                <div>
                  <h3 className="text-white font-medium">@alex_vortex</h3>
                  <p className="text-xs font-mono text-zinc-600">HACE 2 MIN</p>
                </div>
              </div>
              <span className="bg-zinc-900 text-zinc-300 font-mono text-xs px-2 py-1 rounded-sm">SCORE: 942</span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-4">
              Despliegue verificado en producción: enrutador de agentes con latencia <span className="text-emerald-400 font-mono">{'< 15ms'}</span>.
            </p>
            <div className="flex gap-4 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
              <span className="flex items-center gap-1"><span className="text-emerald-500">TARGET:</span> werkdeck/core-engine</span>
              <span className="flex items-center gap-1"><span className="text-emerald-500">HASH:</span> a4f89b2</span>
            </div>
          </div>
          {/* Añadir más items siguiendo esta estructura */}
        </main>

        <aside className="space-y-6">
          <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-sm">
            <h4 className="font-mono text-xs text-emerald-500 tracking-widest mb-6">// NETWORK STATUS</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-zinc-900 pb-2">
                <span className="text-zinc-500">LATENCIA GLOBAL</span>
                <span className="text-white">12ms</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-2">
                <span className="text-zinc-500">BLOQUES VALIDADOS</span>
                <span className="text-emerald-400">#849,201</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}