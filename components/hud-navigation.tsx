"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Zap, DollarSign, User, MessageSquare } from "lucide-react";

const navItems = [
  { href: "/dashboard/feed",     label: "FEED",     icon: Activity },
  { href: "/dashboard/arenas",   label: "ARENAS",   icon: Zap },
  { href: "/dashboard/bidding",  label: "BIDDING",  icon: DollarSign },
  { href: "/dashboard/profile",  label: "PROFILE",  icon: User },
  { href: "/dashboard/messages", label: "MESSAGES", icon: MessageSquare },
];

export function HudNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-[#030712]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-4 py-2 font-mono text-[9px] tracking-widest transition-colors ${
                isActive
                  ? "text-emerald-400"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "drop-shadow-[0_0_6px_#00FF88]" : ""}`} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}