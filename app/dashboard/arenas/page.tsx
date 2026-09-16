"use client";
import { Zap, Cpu, Shield, Code2 } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function ArenasPage() {
  const { t } = useSystemLanguage();

  const cards = [
    {
      type: "AI-NATIVE",
      difficulty: "EXTREME",
      title: "Zero-Latency Agentic Workflow Engine",
      desc: "Sandbox optimizado. Desarrolla, compila y despliega agentes autónomos con auditoría algorítmica en tiempo real.",
      reward: "1,500 USDC",
      activeDevs: "48 devs",
      icon: Cpu,
    },
    {
      type: "PURE CODE",
      difficulty: "INSANE",
      title: "Rust Memory Leak Extractor",
      desc: "Aísla y elimina fugas de memoria en rutinas concurrentes sin afectar el rendimiento global del hilo maestro.",
      reward: "2,200 USDC",
      activeDevs: "31 devs",
      icon: Code2,
    },
    {
      type: "CYBERSEC",
      difficulty: "HARD",
      title: "E2E Encrypted Mesh Telemetry",
      desc: "Diseña un protocolo de comunicación entre nodos sin revelar direcciones IP ni firmas de metadatos.",
      reward: "3,000 USDC",
      activeDevs: "64 devs",
      icon: Shield,
    },
  ];

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>// {t("arenasSub")}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            {t("arenasTitle")}
          </h1>
        </div>

        <div className="inline-flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs font-mono">
          <button className="px-3 py-1.5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-bold">
            {t("filterAll")}
          </button>
          <button className="px-3 py-1.5 text-zinc-400 hover:text-white transition-colors">
            {t("filterPure")}
          </button>
          <button className="px-3 py-1.5 text-zinc-400 hover:text-white transition-colors">
            {t("filterAI")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {card.type}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-900/60 text-rose-400 font-bold">
                    {card.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">RECOMPENSA</span>
                    <span className="text-emerald-400 font-extrabold text-base">{card.reward}</span>
                  </div>
                  <div className="text-right flex items-center gap-1.5">
                    <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs text-zinc-300">{card.activeDevs}</span>
                  </div>
                </div>

                <button className="w-full bg-zinc-900 hover:bg-emerald-500 hover:text-black border border-zinc-700 hover:border-emerald-400 text-white font-mono text-xs py-2.5 rounded-lg transition-all font-bold tracking-wider flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{t("startSequence")}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}