import React from 'react';

export function WerkDeckNavbarLogo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
      </span>
      <span className="font-extrabold text-xl tracking-tight font-sans">
        <span className="text-white group-hover:text-zinc-200 transition">Werk</span>
        <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">Deck</span>
      </span>
    </div>
  );
}