import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Top Header Navigation Bar */}
      <header className="border-b border-zinc-800 px-6 py-3 flex justify-between items-center bg-zinc-950/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center space-x-6">
          <Link href="/dashboard/feed" className="font-bold text-emerald-400 tracking-wider text-sm flex items-center space-x-2">
            <span>WERKDECK</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </Link>

          <nav className="flex space-x-4 text-xs text-zinc-400">
            <Link href="/dashboard/feed" className="hover:text-emerald-400 transition-colors">Execution Feed</Link>
            <Link href="/dashboard/arenas" className="hover:text-emerald-400 transition-colors">Arenas</Link>
            <Link href="/dashboard/bidding" className="hover:text-emerald-400 transition-colors">Talent Bidding</Link>
            <Link href="/dashboard/profile" className="hover:text-emerald-400 transition-colors">Proof Profile</Link>
            <Link href="/dashboard/messages" className="hover:text-emerald-400 transition-colors">Messages</Link>
          </nav>
        </div>

        {/* User Menu Dropdown (Paso 1.2) */}
        <div className="flex items-center space-x-3">
          <span className="text-[10px] text-zinc-500 hidden sm:inline">PROOFSCORE SYSTEM</span>
          <UserButton  
            userProfileMode="navigation"
            userProfileUrl="/dashboard/profile"
          />
        </div>
      </header>

      {/* Dynamic Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}