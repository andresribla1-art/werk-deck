"use client";
import { Shield, Send, ExternalLink } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function MessagesPage() {
  const { t } = useSystemLanguage();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
        <div className="border border-zinc-800 bg-zinc-950/60 p-4 rounded-xl flex flex-col space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 border-b border-zinc-800 pb-3">
            <Shield className="w-4 h-4" />
            <span>{t("secureChannels")}</span>
          </div>

          <div className="p-3 bg-zinc-900 border border-emerald-500/40 rounded-lg space-y-1 cursor-pointer">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-white font-bold">Elena Rostova</span>
              <span className="text-zinc-500 text-[10px]">10:42 AM</span>
            </div>
            <p className="text-xs text-emerald-400 font-mono">CyberShield Solutions</p>
            <p className="text-xs text-zinc-400 truncate">Revisamos tu ejecución en la Arena...</p>
          </div>
        </div>

        <div className="md:col-span-2 border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Elena Rostova</h3>
                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PROTOCOL AES-256 • SECURE
                </p>
              </div>

              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-xs font-mono text-zinc-300 rounded-lg transition-colors">
                <span>{t("originalOffer")}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-4 font-sans text-sm">
              <div className="max-w-md bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl text-zinc-200 leading-relaxed">
                Revisamos tu ProofScore y el despliegue del enrutador en Rust. El benchmark de latencia es exactamente lo que buscamos. ¿Tendrías 15 min esta semana para hablar del rol?
                <span className="block text-[10px] font-mono text-zinc-500 mt-2 text-right">HOY, 10:42 AM</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-zinc-800">
            <input
              type="text"
              placeholder={t("typePlaceholder")}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
            />
            <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider">
              <span>{t("send")}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}