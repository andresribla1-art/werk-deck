export default function Messages() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-[#030303] text-zinc-300 font-sans max-w-[1440px] mx-auto p-4 sm:p-6 lg:p-8">
      
      <div className="flex h-full bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden shadow-2xl">
        
        {/* Panel Izquierdo: Conexiones (Mi Red) */}
        <aside className="w-1/3 border-r border-white/5 flex flex-col bg-[#050505]">
          <div className="p-6 border-b border-white/5">
            <h2 className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] flex items-center justify-between">
              Canales Seguros
              <span className="font-mono text-[9px] bg-white/5 px-1.5 py-0.5 rounded-sm text-zinc-500">3 ACTIVOS</span>
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {/* Thread Activo */}
            <div className="p-5 border-l-2 border-emerald-500 bg-white/[0.02] cursor-pointer">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-zinc-100 font-medium text-sm truncate">Elena Rostova</span>
                <span className="font-mono text-[9px] text-zinc-500">10:42 AM</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono truncate">CyberShield Solutions</p>
              <p className="text-xs text-zinc-500 font-light mt-2 truncate">Revisamos tu ejecución en la Arena...</p>
            </div>
          </div>
        </aside>

        {/* Panel Derecho: Área de Trabajo / Chat */}
        <main className="flex-1 flex flex-col relative">
          
          {/* Cabecera del Chat */}
          <header className="p-6 border-b border-white/5 bg-[#0a0a0a] flex justify-between items-center">
            <div>
              <h3 className="text-zinc-100 font-medium text-sm">Elena Rostova</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest">Protocol AES-256 • Secure</span>
              </div>
            </div>
            <button className="text-zinc-500 hover:text-zinc-300 font-mono text-[10px] tracking-widest">
              VER OFERTA ORIGINAL
            </button>
          </header>

          {/* Historial de Mensajes */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div className="max-w-[80%]">
              <div className="bg-[#111] text-zinc-300 p-4 rounded-sm border border-white/5 font-mono text-xs leading-relaxed">
                Revisamos tu ProofScore y el despliegue del enrutador en Rust. El benchmark de latencia es exactamente lo que buscamos. ¿Tendrías 15 min esta semana para hablar del rol?
              </div>
              <p className="text-[9px] font-mono text-zinc-600 mt-2 ml-1">HOY, 10:42 AM</p>
            </div>
          </div>

          {/* Consola de Input */}
          <div className="p-6 bg-[#050505] border-t border-white/5">
            <div className="relative flex items-center">
              <span className="absolute left-4 font-mono text-emerald-500 text-sm">{'>'}</span>
              <input 
                type="text" 
                placeholder="Escribe tu respuesta..." 
                className="w-full bg-[#0a0a0a] border border-white/10 text-zinc-100 font-mono text-xs py-4 pl-10 pr-24 rounded-sm focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <button className="absolute right-4 text-zinc-500 hover:text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors">
                SEND [⏎]
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}