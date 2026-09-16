"use client";
import { ShieldCheck, Terminal, Award, CheckCircle2 } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function ProfilePage() {
  const { t } = useSystemLanguage();

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      <div className="border border-zinc-800 bg-zinc-950/60 p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            JD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">John Doe</h1>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs font-mono text-zinc-500 mt-0.5">&gt;_ ID: WDK-8894-A</p>
            <p className="text-zinc-300 text-sm mt-2 max-w-xl font-sans">
              Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
            </p>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-900/80 p-4 rounded-xl text-center font-mono min-w-[140px]">
          <span className="text-[10px] text-zinc-500 block tracking-widest">PROOFSCORE</span>
          <span className="text-3xl font-extrabold text-emerald-400">890</span>
          <span className="inline-block mt-1 px-2 py-0.5 text-[10px] bg-emerald-950 text-emerald-300 rounded border border-emerald-800">
            TOP 2% GLOBAL
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 border-b border-zinc-800/80 pb-3">
            <Terminal className="w-4 h-4" />
            <span>{t("metricsTitle")}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
            <div className="p-4 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <span className="text-[10px] text-zinc-500 block">{t("commitsVerified")}</span>
              <span className="text-2xl font-extrabold text-white mt-1 block">342</span>
            </div>
            <div className="p-4 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <span className="text-[10px] text-zinc-500 block">{t("deploySuccess")}</span>
              <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">98.4%</span>
            </div>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 border-b border-zinc-800/80 pb-3">
            <Award className="w-4 h-4" />
            <span>{t("arenaHistory")}</span>
          </div>

          <div className="space-y-3 pt-2 font-mono text-xs">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800 flex justify-between items-center">
              <span className="text-zinc-200 font-bold">Zero-Latency Router</span>
              <span className="text-emerald-400 font-bold">1,500 USDC</span>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800 flex justify-between items-center">
              <span className="text-zinc-200 font-bold">SecOps CTF Challenge</span>
              <span className="text-amber-400 font-bold">800 USDC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}