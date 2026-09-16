export default function Arenas() {
  const arenas = [
    { title: "Zero-Latency Agentic Workflow Engine", category: "AI-NATIVE", diff: "EXTREME", bounty: "1,500 USDC", active: 48 },
    { title: "Rust Memory Leak Extractor", category: "PURE CODE", diff: "INSANE", bounty: "2,200 USDC", active: 31 }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="text-4xl font-light text-zinc-100 tracking-tight">Arenas de Competición</h1>
          <div className="flex bg-[#0a0a0a] border border-white/5 p-1 rounded-sm">
            <button className="px-6 py-2 bg-[#111] text-zinc-100 text-xs font-mono tracking-widest rounded-sm border border-white/5 shadow-sm">TODOS</button>
            {/* FIX: text-zinc-500 -> text-zinc-400 en botones */}
            <button className="px-6 py-2 text-zinc-400 hover:text-zinc-200 text-xs font-mono tracking-widest transition-colors">PURE CODE</button>
            <button className="px-6 py-2 text-zinc-400 hover:text-zinc-200 text-xs font-mono tracking-widest transition-colors">AI-NATIVE</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {arenas.map((arena, i) => (
            <div key={i} className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 rounded-sm p-8 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] border border-white/10 px-2 py-1 rounded-sm">{arena.category}</span>
                <span className="font-mono text-[10px] text-red-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  {arena.diff}
                </span>
              </div>
              
              <div className="flex-1 relative z-10">
                <h2 className="text-xl text-zinc-100 font-medium leading-snug mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">{arena.title}</h2>
                {/* FIX: Párrafo de texto text-zinc-500 -> text-zinc-400 */}
                <p className="text-sm font-light text-zinc-400 leading-relaxed">Sandbox optimizado. Desarrolla, compila y despliega sin salir del navegador. Auditoría algorítmica en tiempo real.</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    {/* FIX: text-zinc-500 -> text-zinc-400 */}
                    <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Recompensa</p>
                    <p className="font-mono text-lg text-emerald-400">{arena.bounty}</p>
                  </div>
                  <div className="text-right">
                    {/* FIX: text-zinc-500 -> text-zinc-400 */}
                    <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Nodos Activos</p>
                    <p className="font-mono text-sm text-zinc-300">{arena.active} devs</p>
                  </div>
                </div>
                <button className="w-full bg-white/5 hover:bg-emerald-500 text-zinc-300 hover:text-black font-mono text-xs py-3 tracking-[0.2em] uppercase rounded-sm transition-all duration-300">
                  Iniciar Secuencia
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}