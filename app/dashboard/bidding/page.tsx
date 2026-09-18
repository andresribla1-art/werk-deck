"use client";
import { useState } from "react";
import { Lock, Globe, ShieldCheck } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CHF" | "BRL" | "CAD" | "AUD" | "USDC" | "BTC";

const CURRENCIES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  EUR: { symbol: "€",    rate: 1.0,        label: "EUR (€)" },
  USD: { symbol: "$",    rate: 1.08,       label: "USD ($)" },
  GBP: { symbol: "£",    rate: 0.85,       label: "GBP (£)" },
  CHF: { symbol: "CHF",  rate: 0.96,       label: "CHF" },
  JPY: { symbol: "¥",    rate: 162.5,      label: "JPY (¥)" },
  CAD: { symbol: "CA$",  rate: 1.47,       label: "CAD (CA$)" },
  AUD: { symbol: "A$",   rate: 1.65,       label: "AUD (A$)" },
  BRL: { symbol: "R$",   rate: 5.85,       label: "BRL (R$)" },
  USDC: { symbol: "USDC", rate: 1.08,      label: "USDC" },
  BTC: { symbol: "₿",    rate: 0.000017,   label: "BTC (₿)" },
};

export default function BiddingPage() {
  const { t } = useSystemLanguage();
  const [currency, setCurrency] = useState<Currency>("EUR");
  // Estado maestro siempre en EUR — nunca se convierte en el estado
  const [floorEUR, setFloorEUR] = useState<number>(85_000);

  const toDisplay = (eur: number) => {
    const { rate, symbol } = CURRENCIES[currency];
    const converted = eur * rate;
    if (currency === "BTC") return `${symbol} ${converted.toFixed(4)}`;
    return `${symbol} ${Math.round(converted).toLocaleString()}`;
  };

  const fromDisplay = (displayValue: number): number => {
    return displayValue / CURRENCIES[currency].rate;
  };

  const displayValue = Math.round(floorEUR * CURRENCIES[currency].rate);

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest mb-1">
          <Globe className="w-3.5 h-3.5" />
          <span>// {t("biddingSub")}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          {t("biddingTitle")}
        </h1>
        <p className="text-zinc-400 text-sm mt-1 font-mono">
          Define tu umbral mínimo. El kernel rechazará automáticamente cualquier subasta corporativa por debajo de este valor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Floor configurator */}
        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Lock className="w-4 h-4" />
              <span>{t("minFloor")}</span>
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-zinc-900 border border-zinc-700 text-xs font-mono text-emerald-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {(Object.keys(CURRENCIES) as Currency[]).map((c) => (
                <option key={c} value={c}>{CURRENCIES[c].label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">
              {t("baseSalary")} <span className="text-zinc-600">≈ €{floorEUR.toLocaleString()} base</span>
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-0 top-0 bottom-0 px-4 flex items-center justify-center bg-zinc-900 border-r border-zinc-800 text-emerald-400 font-mono text-sm font-bold rounded-l-lg pointer-events-none z-10 min-w-[3.5rem]">
                {CURRENCIES[currency].symbol}
              </div>
              <input
                type="number"
                value={displayValue}
                onChange={(e) => {
                  const inputVal = Number(e.target.value);
                  setFloorEUR(fromDisplay(inputVal));
                }}
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-lg py-3 pl-20 pr-4 text-white font-mono text-xl focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
            <p className="text-[10px] font-mono text-zinc-600 mt-2">
              Equivalente a {toDisplay(floorEUR)} anuales en {CURRENCIES[currency].label}
            </p>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono py-3 rounded-lg transition-all text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            {t("setRate")}
          </button>
        </div>

        {/* Active bids */}
        <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">{t("activeBids")}</h3>
            <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
              1 PENDIENTE
            </span>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/40 p-5 rounded-lg flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h4 className="text-white font-bold">CyberShield Solutions</h4>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Senior SecOps Engineer · 100% Remote</p>
              <p className="text-[10px] text-zinc-600 font-mono mt-0.5">Oferta de la empresa — no editable</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-mono font-bold text-emerald-400">
                {toDisplay(95_000 / 1.08)}
              </span>
              <p className="text-[10px] text-zinc-600 font-mono mt-1">
                {floorEUR <= 95_000 / 1.08
                  ? "✓ Por encima de tu floor"
                  : "✗ Por debajo de tu floor"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button className="border border-emerald-500/50 bg-emerald-950/20 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs py-2.5 rounded-lg transition-colors font-bold uppercase">
              {t("decrypt")}
            </button>
            <button className="border border-zinc-800 hover:bg-zinc-800 text-zinc-400 font-mono text-xs py-2.5 rounded-lg transition-colors font-bold uppercase">
              {t("ignore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}