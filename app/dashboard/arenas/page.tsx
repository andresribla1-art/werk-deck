"use client";

interface Arena {
  id: string;
  title: string;
  category: "Pure Code" | "AI-Native" | "Sponsored Bounty";
  reward: string;
  difficulty: "Hard" | "Extreme" | "Insane";
  participants: number;
}

export default function ArenasPage() {
  const arenas: Arena[] = [
    {
      id: "a1",
      title: "Zero-Latency Agentic Workflow Engine",
      category: "AI-Native",
      reward: "1,500 USDC",
      difficulty: "Extreme",
      participants: 48,
    },
    {
      id: "a2",
      title: "Rust Memory Management & Garbage Collection Benchmark",
      category: "Pure Code",
      reward: "800 USDC",
      difficulty: "Hard",
      participants: 112,
    },
    {
      id: "a3",
      title: "CyberShield Vulnerability Patch Challenge",
      category: "Sponsored Bounty",
      reward: "2,500 EUR",
      difficulty: "Insane",
      participants: 29,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-800 pb-4">
        <h1 className="text-xl font-bold text-emerald-400">// COMPETITION ARENAS</h1>
        <p className="text-xs text-zinc-400 mt-1">
          Entornos Sandbox aislados para resolver retos reales y elevar tu ProofScore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arenas.map((arena) => (
          <div
            key={arena.id}
            className="border border-zinc-800 bg-zinc-950 p-5 rounded-lg flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  {arena.category}
                </span>
                <span className="text-xs font-bold text-zinc-400">{arena.difficulty}</span>
              </div>
              <h3 className="text-sm font-bold text-zinc-100">{arena.title}</h3>
            </div>

            <div className="space-y-3 pt-3 border-t border-zinc-900">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Bounty / Reward</span>
                <span className="font-bold text-emerald-400">{arena.reward}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Participantes</span>
                <span className="text-zinc-300">{arena.participants} devs</span>
              </div>
              <button className="w-full text-center py-2 bg-zinc-900 hover:bg-emerald-500 hover:text-black text-zinc-200 text-xs font-bold rounded transition-colors">
                ENTER SANDBOX
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}