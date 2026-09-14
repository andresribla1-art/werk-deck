export default function ProofProfile() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 font-sans">
      <header className="mb-12 border-b border-zinc-900 pb-8 flex justify-between items-end">
        <div>
          <p className="text-emerald-500 font-mono text-xs tracking-[0.2em] mb-2 uppercase">// Identidad Criptográfica</p>
          <h1 className="text-4xl font-light text-white tracking-tight">Panel de Autoridad</h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">ProofScore Global</p>
            <p className="font-mono text-3xl text-emerald-400">890</p>
          </div>
          {/* Anillo de Autenticación Circular SVG */}
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-zinc-900" />
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray="175" strokeDashoffset="20" className="text-emerald-500" />
          </svg>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-950/50 p-6 border-l-2 border-emerald-500">
          <p className="font-mono text-xs text-zinc-600 mb-2 uppercase">Commits Verificados</p>
          <p className="font-mono text-4xl text-white mb-2">342</p>
          <p className="text-[10px] font-mono text-emerald-500 uppercase">100% Hash Validated</p>
        </div>
        <div className="bg-zinc-950/50 p-6 border-l-2 border-zinc-800">
          <p className="font-mono text-xs text-zinc-600 mb-2 uppercase">Deploy Success Rate</p>
          <p className="font-mono text-4xl text-white mb-2">98.4%</p>
          <p className="text-[10px] font-mono text-zinc-500 uppercase">Cero Rollbacks (30d)</p>
        </div>
        <div className="bg-zinc-950/50 p-6 border-l-2 border-zinc-800">
          <p className="font-mono text-xs text-zinc-600 mb-2 uppercase">Arenas Ganadas</p>
          <p className="font-mono text-4xl text-white mb-2">2</p>
          <p className="text-[10px] font-mono text-zinc-500 uppercase">2,300 USDC Bounties</p>
        </div>
      </div>
      
      <h4 className="font-mono text-xs text-emerald-500 tracking-widest mb-4">// REPOSITORIOS CONECTADOS AL KERNEL</h4>
      {/* Lista de repos */}
    </div>
  );
}