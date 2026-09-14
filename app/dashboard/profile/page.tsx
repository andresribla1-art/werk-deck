"use client";

export default function ProfilePage() {
  const stats = {
    proofScore: 890,
    percentile: "Top 3%",
    verifiedCommits: 342,
    deployAccuracy: "98.4%",
    activeBounties: 2,
  };

  const repos = [
    { name: "werkdeck/core-engine", role: "Owner", commits: 124, status: "Verified" },
    { name: "autonomx/llm-router", role: "Contributor", commits: 45, status: "Verified" },
    { name: "cybershield/sec-scanner", role: "Contributor", commits: 18, status: "Pending Audit" },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-800 pb-4">
        <h1 className="text-xl font-bold text-emerald-400">// PROOF PROFILE & HUD</h1>
        <p className="text-xs text-zinc-400 mt-1">
          Métricas de ProofScore, repositorios conectados y mapa de ejecuciones analizadas.
        </p>
      </div>

      {/* Grid de Métricas Principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">ProofScore Global</span>
          <span className="text-2xl font-bold text-emerald-400 font-mono">{stats.proofScore}</span>
          <span className="text-[10px] text-zinc-400 block mt-1">{stats.percentile} entre desarrolladores</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Commits Verificados</span>
          <span className="text-2xl font-bold text-zinc-100 font-mono">{stats.verifiedCommits}</span>
          <span className="text-[10px] text-emerald-500 block mt-1">100% Hash Validated</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Deploy Success Rate</span>
          <span className="text-2xl font-bold text-zinc-100 font-mono">{stats.deployAccuracy}</span>
          <span className="text-[10px] text-zinc-400 block mt-1">Zero Rollbacks (Últimos 30d)</span>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Arenas Ganadas</span>
          <span className="text-2xl font-bold text-emerald-400 font-mono">{stats.activeBounties}</span>
          <span className="text-[10px] text-zinc-400 block mt-1">2,300 USD Bounties</span>
        </div>
      </div>

      {/* Repositorios Conectados */}
      <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-lg space-y-4">
        <h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
          Repositorios Vinculados
        </h2>
        <div className="space-y-2">
          {repos.map((repo) => (
            <div key={repo.name} className="flex justify-between items-center p-3 bg-zinc-900/50 rounded border border-zinc-850 text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-zinc-200 font-bold block">{repo.name}</span>
                <span className="text-[10px] text-zinc-500">{repo.role} • {repo.commits} commits</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] ${repo.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                {repo.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}