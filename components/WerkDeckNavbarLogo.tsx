import React from 'react';

export function WerkDeckNavbarLogo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      <div className="relative flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
      </div>
      <span className="font-extrabold text-2xl tracking-tight font-sans">
        <span className="text-white group-hover:text-zinc-200 transition-colors">Werk</span>
        <span className="text-emerald-400 drop-shadow-[0_0_16px_rgba(16,185,129,0.5)]">Deck</span>
      </span>
    </div>
  );
}