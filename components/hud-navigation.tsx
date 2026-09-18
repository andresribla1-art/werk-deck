"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    href: "/dashboard/feed",
    label: "FEED",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    href: "/dashboard/arenas",
    label: "ARENAS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    href: "/dashboard/bidding",
    label: "BIDDING",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    href: "/dashboard/profile",
    label: "PROFILE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    href: "/dashboard/messages",
    label: "MSG",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

export function HudNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4">
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(3,7,18,0.85)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(0,255,136,0.12)",
          boxShadow: "0 0 40px rgba(0,0,0,0.6), 0 0 1px rgba(0,255,136,0.2) inset",
        }}
      >
        {NAV.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="relative flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-all duration-300 group"
              style={{
                background: active ? "rgba(0,255,136,0.08)" : "transparent",
                color: active ? "#00FF88" : "rgba(255,255,255,0.35)",
              }}
            >
              {active && (
                <span
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border: "1px solid rgba(0,255,136,0.25)",
                    boxShadow: "0 0 12px rgba(0,255,136,0.1) inset",
                  }}
                />
              )}
              <span
                className="transition-all duration-300"
                style={{
                  filter: active ? "drop-shadow(0 0 8px rgba(0,255,136,0.8))" : "none",
                }}
              >
                {icon}
              </span>
              <span
                className="text-[9px] font-mono tracking-widest transition-all duration-300"
                style={{ color: active ? "#00FF88" : "rgba(255,255,255,0.3)" }}
              >
                {label}
              </span>
              {active && (
                <span
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-4 h-px"
                  style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}