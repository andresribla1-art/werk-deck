export default function Messages() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-zinc-300 p-6 md:p-12 font-sans max-w-[1600px] mx-auto flex gap-8 h-[85vh]">
      <div className="w-1/3 border border-zinc-900 bg-zinc-950 flex flex-col">
        <div className="p-6 border-b border-zinc-900">
          <p className="text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase">// Encrypted Channels</p>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto">
          <div className="bg-zinc-900/80 p-5 border-l-2 border-emerald-500 cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium text-sm">CyberShield Solutions</span>
              <span className="font-mono text-[10px] text-zinc-500">10:42</span>
            </div>
            <p className="text-xs text-emerald-400 font-mono truncate">Revisamos tu ProofScore y la...</p>
          </div>
        </div>
      </div>

      <div className="flex-1 border border-zinc-900 bg-zinc-950 flex flex-col">
        <header className="p-6 border-b border-zinc-900 bg-black/40">
          <h2 className="text-white font-medium text-lg mb-1">Elena Rostova <span className="text-zinc-600 font-light">— CyberShield Solutions</span></h2>
          <p className="font-mono text-xs text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            SESSION SECURE // PROTOCOL AES-256
          </p>
        </header>

        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          <div className="max-w-xl">
            <div className="bg-zinc-900/90 text-zinc-200 p-6 rounded-none font-mono text-sm leading-relaxed border border-zinc-800">
              Revisamos tu ProofScore y la ejecución en la Arena Rust. ¿Tendrías 15 min esta semana?
            </div>
            <p className="text-[11px] font-mono text-zinc-600 mt-2">10:42</p>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-900 bg-black">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Escribe un mensaje encriptado..." 
              className="w-full bg-zinc-950 border border-zinc-800 text-white font-mono text-sm p-5 pr-24 focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] hover:text-emerald-300 font-bold">
              Send →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}