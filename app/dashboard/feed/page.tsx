"use client";
import { Activity, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function FeedPage() {
  const { t } = useSystemLanguage();

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest mb-1">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>// {t("feedSub")}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            {t("feedTitle")}
          </h1>
        </div>

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>STREAMING ACTIVE</span>
          <span className="text-zinc-600">|</span>
          <span>100% AUDITED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                  &gt;_
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono font-bold text-sm">@alex_vortex</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-500">Hace 2 min</span>
            </div>

            <p className="text-zinc-300 text-sm font-sans leading-relaxed">
              Optimización del motor de eventos concurrentes. Latencia reducida a{" "}
              <span className="text-emerald-400 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                &lt; 12ms
              </span>{" "}
              en entorno de producción.
            </p>

            <div className="p-3 bg-zinc-900/80 rounded-lg border border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-500 block text-[10px]">COMMIT</span>
                <span className="text-emerald-400">a4f89b2</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">REPO</span>
                <span className="text-zinc-200">werkdeck/core-engine</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-6 h-fit">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 border-b border-zinc-800/80 pb-3">
            <Cpu className="w-4 h-4" />
            <span>TELEMETRÍA DE RED</span>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">{t("nodesActive")}</span>
              <span className="text-white font-bold">2,462</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">{t("latency")}</span>
              <span className="text-emerald-400 font-bold">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">{t("currentBlock")}</span>
              <span className="text-zinc-300">#849,201</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}