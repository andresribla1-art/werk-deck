"use client";

import { motion } from "framer-motion";

const ARENAS = [
  {
    id: "1",
    tag: "AI-NATIVE",
    difficulty: "EXTREME",
    title: "Zero-Latency Agentic Workflow Engine",
    description: "Sandbox optimizado. Desarrolla, compila y despliega agentes autónomos con auditoría algorítmica en tiempo real.",
    reward: "1,500 USDC",
    devs: "48 devs",
  },
  {
    id: "2",
    tag: "PURE CODE",
    difficulty: "INSANE",
    title: "Rust Memory Leak Extractor",
    description: "Aísla y elimina fugas de memoria en rutinas concurrentes sin afectar el rendimiento global del hilo maestro.",
    reward: "2,200 USDC",
    devs: "31 devs",
  },
  {
    id: "3",
    tag: "CYBERSEC",
    difficulty: "HARD",
    title: "E2E Encrypted Mesh Telemetry",
    description: "Diseña un protocolo de comunicación entre nodos sin revelar direcciones IP ni firmas de metadatos.",
    reward: "3,000 USDC",
    devs: "64 devs",
  },
];

export default function ArenasPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FF88]">
            // COMPETITIVE ARENAS
          </p>
          <h1 className="text-3xl font-light text-white tracking-tight">
            Arenas de <span className="font-semibold">Competición</span>
          </h1>
        </div>

        <div className="flex bg-white/[0.03] p-1 rounded-xl border border-white/10 font-mono text-xs">
          <button className="px-4 py-1.5 rounded-lg bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">TODOS</button>
          <button className="px-4 py-1.5 rounded-lg text-zinc-400 hover:text-white transition">PURE CODE</button>
          <button className="px-4 py-1.5 rounded-lg text-zinc-400 hover:text-white transition">AI-NATIVE</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARENAS.map((arena) => (
          <div key={arena.id} className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#00FF88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] transition-all duration-300">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-zinc-300 rounded uppercase">{arena.tag}</span>
                <span className="px-2 py-0.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded uppercase font-semibold">{arena.difficulty}</span>
              </div>
              <h2 className="text-lg font-medium text-white leading-snug">{arena.title}</h2>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{arena.description}</p>
            </div>

            <div className="space-y-4 border-t border-white/5 pt-4">
              <div className="flex justify-between items-end font-mono">
                <div>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest">RECOMPENSA</p>
                  <p className="text-lg font-bold text-[#00FF88] tabular-nums">{arena.reward}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest">NODOS ACTIVOS</p>
                  <p className="text-xs text-zinc-300 font-mono">🔥 {arena.devs}</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-black border border-[#00FF88]/30 hover:border-[#00FF88] text-[#00FF88] font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.05)]"
              >
                ⚡ INICIAR SECUENCIA
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}