"use client";
import { useState } from "react";
import { Lock, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useSystemLanguage } from "../../../hooks/useSystemLanguage";

type Currency = "USD" | "EUR" | "GBP" | "JPY" | "USDC" | "BTC";

const CURRENCIES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: "$", rate: 1.08 },
  EUR: { symbol: "€", rate: 1.0 },
  GBP: { symbol: "£", rate: 0.85 },
  JPY: { symbol: "¥", rate: 162.5 },
  USDC: { symbol: "USDC ", rate: 1.08 },
  BTC: { symbol: "₿ ", rate: 0.000017 },
};

export default function BiddingPage() {
  const { t } = useSystemLanguage();
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [baseValueEUR, setBaseValueEUR] = useState<number>(85000);
  const [bidEUR] = useState<number>(95000);

  const formatAmount = (valEUR: number) => {
    const config = CURRENCIES[currency];
    const converted = valEUR * config.rate;
    if (currency === "BTC") return `${config.symbol}${converted.toFixed(3)}`;
    return `${config.symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest mb-1">
          <Globe className="w-3.5 h-3.5" />
          <span>// TALENT DISCOVERY ENGINE</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Control Salarial & Pujas Globales
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa por debajo de este valor.
        </p>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configurador de Umbral */}
        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Lock className="w-4 h-4" />
              <span>{t.minFloor}</span>
            </div>
            {/* Selector de Moneda Global */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-zinc-900 border border-zinc-700 text-xs font-mono text-emerald-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="EUR">EUR (€)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
              <option value="USDC">USDC ($)</option>
              <option value="BTC">BTC (₿)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">{t.baseSalary}</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-zinc-400 font-mono text-lg">
                {CURRENCIES[currency].symbol}
              </span>
              <input
                type="number"
                value={Math.round(baseValueEUR * CURRENCIES[currency].rate)}
                onChange={(e) => setBaseValueEUR(Number(e.target.value) / CURRENCIES[currency].rate)}
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-lg py-3 pl-12 pr-4 text-white font-mono text-xl focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono py-3 rounded-lg transition-all text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            {t.setRate}
          </button>
        </div>

        {/* Pujas Activas */}
        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">{t.activeBids}</h3>
            <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
              1 PENDIENTE
            </span>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/40 p-5 rounded-lg flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold">CyberShield Solutions</h4>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Senior SecOps Engineer • 100% Remote</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-mono font-bold text-emerald-400">
                {formatAmount(bidEUR)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button className="border border-emerald-500/50 bg-emerald-950/20 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs py-2.5 rounded-lg transition-colors font-bold uppercase">
              {t.decrypt}
            </button>
            <button className="border border-zinc-800 hover:bg-zinc-800 text-zinc-400 font-mono text-xs py-2.5 rounded-lg transition-colors font-bold uppercase">
              {t.ignore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}