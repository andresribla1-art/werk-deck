export default function ProofProfile() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-zinc-300 p-6 md:p-12 font-sans max-w-[1600px] mx-auto">
      <header className="mb-12 border-b border-zinc-900/80 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p className="text-emerald-400 font-mono text-xs tracking-[0.3em] mb-3 uppercase">// Identidad Criptográfica</p>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">Panel de Autoridad</h1>
        </div>
        <div className="flex items-center gap-6 bg-zinc-950 border border-zinc-900 px-8 py-4">
          <div className="text-right">
            <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">ProofScore Global</p>
            <p className="font-mono text-4xl text-emerald-400 font-medium">890</p>
          </div>
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-zinc-900" />
            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray="163" strokeDashoffset="25" className="text-emerald-400" />
          </svg>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-zinc-950 p-8 border-l-4 border-emerald-500 border-y border-r border-y-zinc-900 border-r-zinc-900">
          <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-wider">Commits Verificados</p>
          <p className="font-mono text-5xl text-white mb-3 font-light">342</p>
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">100% Hash Validated</p>
        </div>
        <div className="bg-zinc-950 p-8 border-l-4 border-zinc-800 border-y border-r border-y-zinc-900 border-r-zinc-900">
          <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-wider">Deploy Success Rate</p>
          <p className="font-mono text-5xl text-white mb-3 font-light">98.4%</p>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Cero Rollbacks (Últimos 30d)</p>
        </div>
        <div className="bg-zinc-950 p-8 border-l-4 border-zinc-800 border-y border-r border-y-zinc-900 border-r-zinc-900">
          <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-wider">Arenas Ganadas</p>
          <p className="font-mono text-5xl text-white mb-3 font-light">2</p>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">2,300 USDC Bounties</p>
        </div>
      </div>
      
      <h4 className="font-mono text-xs text-emerald-400 tracking-[0.2em] mb-6">// REPOSITORIOS CONECTADOS AL KERNEL</h4>
      {/* Contenedor de repositorios */}
    </div>
  );
}