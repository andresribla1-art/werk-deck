import React from 'react';
import { ShieldAlert, Zap, Flame } from 'lucide-react';
import { WerkDeckNavbarLogo } from './WerkDeckNavbarLogo';

export default function Arenas() {
  const arenas = [
    {
      id: "01",
      title: "Zero-Latency Agentic Workflow Engine",
      category: "AI-NATIVE",
      difficulty: "EXTREME",
      description: "Sandbox optimizado. Desarrolla, compila y despliega agentes autónomos con auditoría algorítmica en tiempo real.",
      reward: "1,500 USDC",
      devs: 48,
    },
    {
      id: "02",
      title: "Rust Memory Leak Extractor",
      category: "PURE CODE",
      difficulty: "INSANE",
      description: "Aísla y elimina fugas de memoria en rutinas concurrentes sin afectar el rendimiento global del hilo maestro.",
      reward: "2,200 USDC",
      devs: 31,
    },
    {
      id: "03",
      title: "E2E Encrypted Mesh Telemetry",
      category: "CYBERSEC",
      difficulty: "HARD",
      description: "Diseña un protocolo de comunicación entre nodos sin revelar direcciones IP ni firmas de metadatos.",
      reward: "3,000 USDC",
      devs: 64,
    }
  ];

  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans">
      <nav className="border-b border-zinc-800/80 bg-[#08090d]/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <WerkDeckNavbarLogo />
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="#feed" className="hover:text-zinc-200 transition">Execution Feed</a>
            <a href="#arenas" className="text-emerald-400 font-bold border-b border-emerald-400 pb-0.5">Arenas</a>
            <a href="#bidding" className="hover:text-zinc-200 transition">Talent Bidding</a>
            <a href="#profile" className="hover:text-zinc-200 transition">Proof Profile</a>
            <a href="#messages" className="hover:text-zinc-200 transition">Messages</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto p-6 md:p-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800/80 gap-6">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-1">
              COMPETITIVE ARENAS
            </span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Arenas de Competición</h1>
          </div>
          
          <div className="flex bg-[#0c0d12] border border-zinc-800/80 p-1.5 rounded-xl font-mono text-xs shadow-xl">
            <button className="px-5 py-2 rounded-lg bg-emerald-500 text-black font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              TODOS
            </button>
            <button className="px-5 py-2 rounded-lg text-zinc-400 hover:text-white transition font-semibold">PURE CODE</button>
            <button className="px-5 py-2 rounded-lg text-zinc-400 hover:text-white transition font-semibold">AI-NATIVE</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arenas.map((arena) => (
            <div key={arena.id} className="bg-[#0c0d12] border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl p-7 flex flex-col justify-between transition duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] group">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <span className="px-3 py-1 bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono text-[10px] font-bold rounded-md tracking-wider">
                    {arena.category}
                  </span>
                  <span className="text-rose-400 font-mono text-[10px] tracking-wider font-bold flex items-center gap-1.5 bg-rose-950/40 px-2.5 py-1 rounded-md border border-rose-900/50">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {arena.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                  {arena.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-normal">
                  {arena.description}
                </p>
              </div>

              <div>
                <div className="bg-[#12131a] border border-zinc-800/80 rounded-xl p-4 mb-6 flex justify-between items-center font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-0.5">Recompensa</span>
                    <span className="text-lg text-emerald-400 font-black">{arena.reward}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-0.5">Nodos Activos</span>
                    <span className="text-xs text-zinc-200 font-bold flex items-center gap-1 justify-end">
                      <Flame className="w-3.5 h-3.5 text-amber-500" /> {arena.devs} devs
                    </span>
                  </div>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-xs uppercase tracking-wider py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98]">
                  <Zap className="w-4 h-4 fill-black" />
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