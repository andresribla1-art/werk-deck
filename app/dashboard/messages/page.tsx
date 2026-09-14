export default function Messages() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 font-sans flex gap-6 h-[80vh]">
      {/* Sidebar de canales */}
      <div className="w-1/3 border-r border-zinc-900 pr-6 flex flex-col">
        <p className="text-emerald-500 font-mono text-xs tracking-[0.2em] mb-6 uppercase">// Encrypted Channels</p>
        <div className="space-y-1">
          <div className="bg-zinc-900/50 p-4 border-l-2 border-emerald-500 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white font-medium text-sm">CyberShield Solutions</span>
              <span className="font-mono text-[10px] text-zinc-500">10:42</span>
            </div>
            <p className="text-xs text-emerald-400 font-mono truncate">Revisamos tu ProofScore y la...</p>
          </div>
        </div>
      </div>

      {/* Ventana de chat principal */}
      <div className="flex-1 flex flex-col bg-zinc-950/30">
        <header className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-950/80">
          <div>
            <h2 className="text-white font-medium mb-1">Elena Rostova <span className="text-zinc-600 font-light">— CyberShield Solutions</span></h2>
            <p className="font-mono text-[10px] text-emerald-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              SESSION SECURE // PROTOCOL AES-256
            </p>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="max-w-lg">
            <div className="bg-zinc-900 text-zinc-300 p-4 rounded-sm font-mono text-sm leading-relaxed border border-zinc-800">
              Revisamos tu ProofScore y la ejecución en la Arena Rust. ¿Tendrías 15 min esta semana?
            </div>
            <p className="text-[10px] font-mono text-zinc-600 mt-2 ml-1">10:42</p>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-900 bg-zinc-950">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Escribe un mensaje encriptado..." 
              className="w-full bg-black border border-zinc-800 text-white font-mono text-sm p-4 pr-20 focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-xs uppercase tracking-widest hover:text-emerald-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}