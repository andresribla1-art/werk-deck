"use client"

import { useMemo, useState } from "react"
import { HudNavigation } from "../../components/hud-navigation"
import { SafeUserButton } from "../../components/clerk-safe"

const candidates = [
  { id: "WD-2048", name: "A. Rivera", avatar: "https://i.pravatar.cc/96?img=47", role: "Full-Stack Engineer", location: "Remote · EU", score: 96.4, architecture: 98, quality: 95, consistency: 94, stack: ["TypeScript", "Next.js", "PostgreSQL"], verified: true, repos: 18 },
  { id: "WD-1931", name: "M. Chen", avatar: "https://i.pravatar.cc/96?img=32", role: "Lead Architect", location: "Remote · US", score: 94.8, architecture: 96, quality: 92, consistency: 89, stack: ["Python", "AWS", "PostgreSQL"], verified: true, repos: 24 },
  { id: "WD-2260", name: "K. Okafor", avatar: "https://i.pravatar.cc/96?img=12", role: "Backend Engineer", location: "Remote · UK", score: 92.1, architecture: 91, quality: 94, consistency: 90, stack: ["Go", "Python", "Kubernetes"], verified: false, repos: 11 },
  { id: "WD-1784", name: "S. Laurent", avatar: "https://i.pravatar.cc/96?img=5", role: "Platform Engineer", location: "Remote · Canada", score: 90.7, architecture: 93, quality: 89, consistency: 91, stack: ["TypeScript", "Node.js", "AWS"], verified: true, repos: 15 },
]

export default function RecruiterPage() {
  const [minScore, setMinScore] = useState(90)
  const [minArchitecture, setMinArchitecture] = useState(85)
  const [minQuality, setMinQuality] = useState(85)
  const [stack, setStack] = useState("All technologies")
  const [requested, setRequested] = useState<string | null>(null)
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [quickView, setQuickView] = useState<typeof candidates[number] | null>(null)
  const [exported, setExported] = useState(false)

  const toggleCandidate = (id: string) => setSelectedCandidates((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 3 ? [...current, id] : current)

  const filteredCandidates = useMemo(() => candidates.filter((candidate) => {
    const matchesStack = stack === "All technologies" || candidate.stack.includes(stack)
    return candidate.score >= minScore && candidate.architecture >= minArchitecture && candidate.quality >= minQuality && matchesStack
  }), [minScore, minArchitecture, minQuality, stack])

  return (
    <main className="recruiter-page">
      <header className="recruiter-nav">
        <div className="dashboard-brand">WERKDECK <span>RECRUITER CONSOLE</span></div>
        <div className="recruiter-nav-meta"><span><i /> SEARCH ENGINE ONLINE</span><span>ACME SYSTEMS / TALENT</span><SafeUserButton /></div>
      </header>

      <section className="recruiter-hero">
        <div><p className="module-kicker">// TECHNICAL TALENT INDEX / LIVE</p><h1>Find proof.<br /><em>Not promises.</em></h1><p className="recruiter-intro">Search engineers by verified engineering signals, not keyword density. Every result is scored against real code and commit history.</p></div>
        <div className="search-readout"><span>ACTIVE QUERY</span><strong key={`${minScore}-${minArchitecture}-${minQuality}-${stack}`} className="query-pulse">{filteredCandidates.length.toString().padStart(2, "0")} MATCHES</strong><small>PROOFSCORE ≥ {minScore} / ARCH ≥ {minArchitecture}</small></div>
      </section>

      <section className="recruiter-layout">
        <aside className="recruiter-filters">
          <div className="filter-heading"><span>FILTER SYSTEM</span><b>03 ACTIVE</b></div>
          <label>MIN PROOFSCORE <output>{minScore}</output><input type="range" min="80" max="99" value={minScore} onChange={(event) => setMinScore(Number(event.target.value))} /></label>
          <label>MIN ARCHITECTURE <output>{minArchitecture}%</output><input type="range" min="70" max="99" value={minArchitecture} onChange={(event) => setMinArchitecture(Number(event.target.value))} /></label>
          <label>MIN CODE QUALITY <output>{minQuality}%</output><input type="range" min="70" max="99" value={minQuality} onChange={(event) => setMinQuality(Number(event.target.value))} /></label>
          <label>VERIFIED STACK<select value={stack} onChange={(event) => setStack(event.target.value)}><option>All technologies</option><option>TypeScript</option><option>Next.js</option><option>Python</option><option>PostgreSQL</option><option>AWS</option></select></label>
          <button className="clear-filters" type="button" onClick={() => { setMinScore(90); setMinArchitecture(85); setMinQuality(85); setStack("All technologies") }}>RESET FILTERS <span>↺</span></button>
          <div className="filter-foot"><i /> LIVE DATASET<br /><span>8,492 VERIFIED PROFILES</span></div>
        </aside>

        <div className="candidate-results"><div className="results-toolbar"><span>RESULTS / SORTED BY PROOFSCORE</span><div className="results-tools"><b>{filteredCandidates.length} ENGINEERS</b>{selectedCandidates.length > 0 && <><span>{selectedCandidates.length}/3 SELECTED</span>{selectedCandidates.length >= 2 && <button type="button" onClick={() => document.querySelector(".compare-strip")?.scrollIntoView({ behavior: "smooth" })}>COMPARE NOW ↗</button>}<button type="button" onClick={() => setExported(true)}>EXPORT ONE-PAGER ↗</button></>}</div></div>{filteredCandidates.map((candidate) => <article className={`candidate-card ${selectedCandidates.includes(candidate.id) ? "candidate-selected" : ""}`} key={candidate.id} onClick={() => setQuickView(candidate)} tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setQuickView(candidate)}><div className="candidate-avatar"><img src={candidate.avatar} alt="" /><span>{candidate.name.slice(0, 2).toUpperCase()}</span><i className="talent-pulse" title="Telemetry Active · Verified 2m ago" /></div><label className="candidate-compare" onClick={(event) => event.stopPropagation()}><input type="checkbox" checked={selectedCandidates.includes(candidate.id)} onChange={() => toggleCandidate(candidate.id)} aria-label={`Compare ${candidate.name}`} /><span>+</span></label><div className="candidate-main"><div className="candidate-title"><div><span className="candidate-id">{candidate.id} {candidate.verified && <b>✓ VERIFIED</b>}</span><h2>{candidate.name}</h2><p>{candidate.role} · {candidate.location}</p></div><div className="candidate-score"><strong>{candidate.score}</strong><small>/100</small></div></div><div className="candidate-metrics"><span>ARCHITECTURE <b>{candidate.architecture}%</b><i><em style={{ width: `${candidate.architecture}%` }} /></i></span><span>CODE QUALITY <b>{candidate.quality}%</b><i><em style={{ width: `${candidate.quality}%` }} /></i></span><span>CONSISTENCY <b>{candidate.consistency}%</b><i><em style={{ width: `${candidate.consistency}%` }} /></i></span></div><div className="candidate-footer"><div className="candidate-stack">{candidate.stack.map((item) => <span key={item}>{item}</span>)}<small>{candidate.repos} repos scanned</small></div><button type="button" onClick={() => setRequested(candidate.id)}>{requested === candidate.id ? "REQUEST SENT ✓" : "REQUEST TECHNICAL INTERVIEW ↗"}</button></div></div></article>)}{filteredCandidates.length === 0 && <div className="empty-results">NO ENGINEERS MATCH CURRENT SIGNAL THRESHOLDS.</div>}</div>
      </section>
      <div className="recruiter-status"><span>SYS.STATUS // OPERATIONAL</span><span>ENCRYPTED · GDPR READY · 24/7</span></div>{quickView && <div className="candidate-drawer-backdrop" onClick={() => setQuickView(null)}><aside className="candidate-drawer" onClick={(event) => event.stopPropagation()}><button className="drawer-close" onClick={() => setQuickView(null)}>×</button><span className="module-kicker">QUICK VIEW / VERIFIED SIGNAL</span><div className="drawer-avatar">{quickView.name.slice(0, 2).toUpperCase()}</div><h2>{quickView.name}</h2><p>{quickView.role} · {quickView.location}</p><strong className="drawer-score">{quickView.score}<small>/100</small></strong><div className="drawer-metrics"><span>ARCHITECTURE <b>{quickView.architecture}%</b></span><span>CODE QUALITY <b>{quickView.quality}%</b></span><span>CONSISTENCY <b>{quickView.consistency}%</b></span></div><div className="drawer-stack">{quickView.stack.map((item) => <span key={item}>{item}</span>)}</div><button className="drawer-cta" onClick={() => { setRequested(quickView.id); setQuickView(null) }}>REQUEST TECHNICAL INTERVIEW ↗</button></aside></div>}{exported && <button className="dashboard-toast recruiter-toast" onClick={() => setExported(false)}>ONE-PAGER EXPORT READY · PDF ↓</button>}{selectedCandidates.length >= 2 && <section className="compare-strip" aria-label="Candidate comparison"><div><span className="module-kicker">SIDE-BY-SIDE SIGNAL</span><strong>{selectedCandidates.length} CANDIDATES SELECTED</strong></div>{selectedCandidates.map((id) => { const candidate = candidates.find((item) => item.id === id)!; return <div className="compare-mini" key={id}><b>{candidate.name}</b><span>Q {candidate.quality} · A {candidate.architecture} · C {candidate.consistency}</span></div> })}</section>}      <HudNavigation />
    </main>
  )
}
