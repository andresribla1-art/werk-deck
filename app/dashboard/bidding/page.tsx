export default function TalentBidding() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#030303] text-zinc-300 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16">
        
        <div className="flex-1 space-y-10">
          <header>
            <h1 className="text-4xl font-light text-zinc-100 tracking-tight mb-3">Control Salarial</h1>
            {/* FIX: Párrafo principal de zinc-500 a zinc-400 */}
            <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-md">
              Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa que no iguale o supere este valor.
            </p>
          </header>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-10 relative overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* FIX: Etiqueta de zinc-500 a zinc-400 */}
              <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em] mb-8">Base Anual (EUR)</label>
              <div className="flex items-baseline justify-center gap-2 mb-10 w-full">
                {/* FIX: Símbolo € de zinc-600 a zinc-500 para evitar que desaparezca visualmente, manteniendo contraste */}
                <span className="text-4xl text-zinc-500 font-light">€</span>
                <input 
                  type="text" 
                  defaultValue="85.000" 
                  className="bg-transparent text-7xl md:text-8xl font-light text-zinc-100 tracking-tighter outline-none border-b border-white/10 hover:border-white/30 focus:border-emerald-500 text-center w-[300px] md:w-[400px] transition-colors pb-2"
                />
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-[11px] font-semibold px-10 py-4 uppercase tracking-[0.2em] rounded-sm transition-colors w-full max-w-[300px]">
                Fijar Valor en Red
              </button>
            </div>
          </div>
        </div>

        <aside className="w-full lg:w-[420px] flex flex-col">
          <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
            <h4 className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Pujas Activas</h4>
            <span className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-sm">1 PENDIENTE</span>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-sm relative group cursor-pointer hover:border-emerald-500/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-zinc-100 font-medium text-sm">CyberShield Solutions</span>
                <span className="text-emerald-400 font-mono text-sm">€95k</span>
              </div>
              {/* FIX: Subtítulo de zinc-500 a zinc-400 */}
              <p className="text-zinc-400 text-xs font-light mb-6">Senior SecOps Engineer · 100% Remote</p>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-white/5 hover:bg-emerald-500/10 text-emerald-500 text-[10px] font-mono tracking-widest py-2 rounded-sm transition-colors border border-transparent hover:border-emerald-500/20">
                  DESENCRIPTAR
                </button>
                {/* FIX: Botón de ignorar de zinc-600 a zinc-500 para accesibilidad mínima */}
                <button className="px-4 text-zinc-500 hover:text-red-400 text-[10px] font-mono tracking-widest transition-colors">
                  IGNORAR
                </button>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}