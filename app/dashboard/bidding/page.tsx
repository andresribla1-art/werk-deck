export default function TalentBidding() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 font-sans flex flex-col md:flex-row gap-12">
      <div className="flex-1 space-y-8">
        <header>
          <p className="text-emerald-500 font-mono text-xs tracking-[0.2em] mb-2 uppercase">// Subasta de Talento Viva</p>
          <h1 className="text-4xl font-light text-white tracking-tight mb-2">Control de Suelo Salarial</h1>
          <p className="text-sm font-light text-zinc-500">Ofertas inferiores a tu umbral son descartadas por el kernel. Cero negociaciones a ciegas.</p>
        </header>

        <div className="bg-zinc-950 border border-emerald-900/30 p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
          <label className="block font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest text-center">Define tu valor base (Anual)</label>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl md:text-6xl text-zinc-700 font-light">€</span>
            <input 
              type="text" 
              defaultValue="85000" 
              className="bg-transparent text-5xl md:text-7xl font-mono text-white tracking-tighter outline-none border-b-2 border-zinc-800 focus:border-emerald-500 text-center w-full max-w-[300px] transition-colors"
            />
          </div>
          <button className="mt-12 w-full max-w-[300px] mx-auto block bg-emerald-500 text-black font-mono text-xs py-4 font-bold uppercase tracking-[0.2em] hover:bg-emerald-400 transition-colors">
            Actualizar Umbral
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className="font-mono text-xs text-emerald-500 tracking-widest mb-6">// TRANSMISIONES ENTRANTES (3)</h4>
        <div className="space-y-4">
          {/* Puja encriptada/desenfocada */}
          <div className="group bg-zinc-950 border border-zinc-900 p-6 relative cursor-pointer">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 pointer-events-none transition-opacity duration-500 z-10">
              <span className="font-mono text-xs text-emerald-500 tracking-widest animate-pulse">DESENCRIPTAR OFERTA</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-white font-medium">CyberShield Solutions</span>
              <span className="text-emerald-400 font-mono text-lg tracking-tight">€95,000/año</span>
            </div>
            <p className="text-zinc-500 text-sm font-light mb-6">Senior SecOps Engineer · Full Remote (EU)</p>
            <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest">
              <button className="text-emerald-500 hover:text-emerald-300">Aceptar Puja →</button>
              <button className="text-zinc-600 hover:text-red-500">Rechazar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}