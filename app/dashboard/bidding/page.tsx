export default function TalentBidding() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-zinc-300 p-6 md:p-12 font-sans max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12">
      <div className="flex-1 space-y-8">
        <header>
          <p className="text-emerald-400 font-mono text-xs tracking-[0.3em] mb-3 uppercase">// Subasta de Talento Viva</p>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4">Control de Suelo Salarial</h1>
          <p className="text-base font-light text-zinc-400">Las ofertas corporativas inferiores a tu umbral son descartadas automáticamente por el kernel. Cero negociaciones a ciegas.</p>
        </header>

        <div className="bg-zinc-950 border border-emerald-900/30 p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <label className="block font-mono text-xs text-zinc-400 mb-8 uppercase tracking-[0.2em] text-center">Define tu valor base de mercado (Anual)</label>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-5xl md:text-7xl text-zinc-600 font-light">€</span>
            <input 
              type="text" 
              defaultValue="85000" 
              className="bg-transparent text-6xl md:text-8xl font-mono text-white tracking-tighter outline-none border-b-2 border-zinc-800 focus:border-emerald-500 text-center w-full max-w-[360px] transition-colors"
            />
          </div>
          <button className="w-full max-w-[360px] mx-auto block bg-emerald-400 text-black font-mono text-xs py-5 font-bold uppercase tracking-[0.2em] hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            Actualizar Umbral en la Red
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[480px] flex flex-col">
        <h4 className="font-mono text-xs text-emerald-400 tracking-[0.2em] mb-6">// TRANSMISIONES ENTRANTES (3)</h4>
        <div className="space-y-4">
          <div className="group bg-zinc-950 border border-zinc-900 p-8 relative cursor-pointer hover:border-emerald-500/40 transition-colors">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center group-hover:opacity-0 pointer-events-none transition-opacity duration-500 z-10">
              <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] animate-pulse">DESENCRIPTAR OFERTA</span>
            </div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-white font-medium text-lg">CyberShield Solutions</span>
              <span className="text-emerald-400 font-mono text-xl">€95,000/año</span>
            </div>
            <p className="text-zinc-400 text-sm font-light mb-8">Senior SecOps Engineer · Full Remote (EU)</p>
            <div className="flex justify-between items-center font-mono text-xs tracking-widest pt-4 border-t border-zinc-900">
              <button className="text-emerald-400 hover:text-emerald-300 font-bold">ACEPTAR PUJA →</button>
              <button className="text-zinc-600 hover:text-red-400">RECHAZAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}