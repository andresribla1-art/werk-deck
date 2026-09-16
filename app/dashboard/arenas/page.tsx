import React from 'react';
import { ShieldAlert, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans p-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold block mb-1">
              COMPETITIVE ARENAS
            </span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Arenas de Competición</h1>
          </div>
          
          <div className="flex bg-[#0c0d12] border border-zinc-800/80 p-1 rounded-lg font-mono text-xs">
            <button className="px-4 py-2 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              TODOS
            </button>
            <button className="px-4 py-2 rounded-md text-zinc-400 hover:text-white transition">PURE CODE</button>
            <button className="px-4 py-2 rounded-md text-zinc-400 hover:text-white transition">AI-NATIVE</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arenas.map((arena) => (
            <div key={arena.id} className="bg-[#0c0d12] border border-zinc-800/80 hover:border-emerald-500/40 rounded-xl p-6 flex flex-col justify-between transition duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)] group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2.5 py-1 bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-mono text-[10px] font-bold rounded">
                    {arena.category}
                  </span>
                  <span className="text-rose-400 font-mono text-[10px] tracking-wider font-bold flex items-center gap-1 bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/40">
                    <ShieldAlert className="w-3 h-3" />
                    {arena.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                  {arena.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {arena.description}
                </p>
              </div>

              <div>
                <div className="bg-[#12131a] border border-zinc-800/80 rounded-lg p-3.5 mb-5 flex justify-between items-center font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase block">Recompensa</span>
                    <span className="text-base text-emerald-400 font-extrabold">{arena.reward}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-500 uppercase block">Nodos Activos</span>
                    <span className="text-sm text-zinc-200 font-bold">{arena.devs} devs</span>
                  </div>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition shadow-[0_0_15px_rgba(16,185,129,0.25)]">
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