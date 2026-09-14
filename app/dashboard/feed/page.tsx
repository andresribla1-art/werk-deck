"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface FeedItem {
  id: string
  dev: string
  score: number
  type: "DEPLOY" | "ARENA" | "PROOF"
  repo: string
  description: string
  time: string
}

const mockFeed: FeedItem[] = [
  {
    id: "1",
    dev: "@felix_dev",
    score: 890,
    type: "DEPLOY",
    repo: "werkdeck/core-engine",
    description: "Passed 42 unit tests & security pipeline verification.",
    time: "Hace 12 min",
  },
  {
    id: "2",
    dev: "@alex_sec",
    score: 915,
    type: "ARENA",
    repo: "rust-high-concurrency",
    description: "Ranked #1 in Memory Optimization benchmark challenge.",
    time: "Hace 45 min",
  },
  {
    id: "3",
    dev: "@sarah_ai",
    score: 840,
    type: "PROOF",
    repo: "autonomx/llm-router",
    description: "Merged PR #104 with 99.4% prompt evaluation score.",
    time: "Hace 2 h",
  },
]

export default function ExecutionFeedPage() {
  const router = useRouter()
  const [initializing, setInitializing] = useState(true)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const sequence = [
      "> INITIALIZING_SECURE_NODE...",
      "> FETCHING_PROOF_METRICS...",
      "> SYNCING_REALTIME_FEED...",
      "> SYSTEM READY."
    ]
    
    sequence.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log])
        if (index === sequence.length - 1) {
          setTimeout(() => setInitializing(false), 400)
        }
      }, (index + 1) * 250)
    })
  }, [])

  if (initializing) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black font-mono text-emerald-400">
        <div className="space-y-2 max-w-md w-full p-6 border border-emerald-500/20 bg-zinc-950">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            <span className="text-xs tracking-widest text-zinc-400">WERKDECK KERNEL v1.0</span>
          </div>
          {logs.map((log, i) => (
            <p key={i} className="text-xs tracking-wider">{log}</p>
          ))}
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black font-sans text-white selection:bg-emerald-500 selection:text-black">
      {/* Top Header Navigation */}
      <header className="flex items-center justify-between border-b border-zinc-900 bg-black/80 px-6 py-4 lg:px-12 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black tracking-widest">
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">● LIVE</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Execution Feed</a>
            <a href="/dashboard/arenas" className="hover:text-white transition-colors">Arenas</a>
            <a href="/dashboard/bidding" className="hover:text-white transition-colors">Talent Bidding</a>
            <a href="/dashboard/profile" className="hover:text-white transition-colors">Proof Profile</a>
            <a href="/dashboard/messages" className="hover:text-white transition-colors">Messages</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">PROOF_SCORE: 890</span>
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </header>

      {/* Main Content Feed */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 border-b border-zinc-900 pb-4 flex justify-between items-end">
          <div>
            <p className="font-mono text-xs tracking-widest text-emerald-400 font-bold uppercase mb-1">// EXECUTION FEED</p>
            <h1 className="text-3xl font-extrabold tracking-tight">Timeline global en tiempo real.</h1>
          </div>
          <span className="font-mono text-xs text-zinc-500 hidden sm:inline">CERO SPAM · 100% CÓDIGO</span>
        </div>

        {/* Feed List */}
        <div className="space-y-4 font-mono text-xs">
          {mockFeed.map((item) => (
            <div 
              key={item.id}
              className="border border-zinc-800 bg-zinc-950/60 p-6 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">{item.dev}</span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">
                    SCORE: {item.score}
                  </span>
                </div>
                <span className="text-zinc-500 text-[10px]">{item.time}</span>
              </div>

              <div className="space-y-2">
                <p className="text-emerald-400 font-bold flex items-center gap-2">
                  <span>&gt;</span> {item.type === "DEPLOY" ? "DEPLOYED TO PRODUCTION" : item.type === "ARENA" ? "COMPLETED ARENA CHALLENGE" : "VERIFIED PROOF OF WORK"}
                </p>
                <div className="p-2.5 bg-black/90 border border-zinc-900 text-zinc-400">
                  repo: <span className="text-white">{item.repo}</span>
                </div>
                <p className="text-zinc-300 font-sans text-sm pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}