"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const developerRepos = [
  { name: "werkdeck-platform", language: "TypeScript", stars: 42, updated: "2d ago" },
  { name: "signal-processor", language: "Rust", stars: 18, updated: "5d ago" },
  { name: "infra-blueprints", language: "HCL", stars: 9, updated: "1w ago" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [flow, setFlow] = useState<"developer" | "company">("developer")
  const [step, setStep] = useState(1)
  const [selectedRepos, setSelectedRepos] = useState<string[]>(["werkdeck-platform"])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const toggleRepo = (name: string) => {
    setSelectedRepos((current) =>
      current.includes(name) ? current.filter((repo) => repo !== name) : [...current, name]
    )
  }

  const handleNext = () => setStep((current) => Math.min(current + 1, 3))

  const handleGenerateScore = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans antialiased selection:bg-emerald-500 selection:text-black flex flex-col relative overflow-hidden">
      
      {/* Immersive OASIS Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-0 pointer-events-none" />

      {/* Minimalist Top HUD */}
      <header className="absolute top-0 w-full px-8 py-8 flex justify-between items-center z-20">
        <div className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
          Initialization Sequence
        </div>
        <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/70 uppercase">
          Step 0{step} / 03
        </div>
      </header>

      {/* The Central Monolith */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-2xl mx-auto px-6 mt-10">
        
        {/* Step 1: Identity & Role */}
        {step === 1 && (
          <div className="w-full text-center space-y-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white">
                Sincroniza tu <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">Identidad</span>
              </h1>
              <div className="text-zinc-400 text-sm md:text-base font-light tracking-wide max-w-md mx-auto flex flex-col items-center justify-center text-center">
                <span>Selecciona tu nodo de acceso. El sistema adaptará el entorno</span> 
                <span>según tu objetivo en la red.</span>
              </div>
            </div>

            {/* Apple-Style Segmented Control (Fixed Contrast) */}
            <div className="flex p-1.5 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-full max-w-sm mx-auto shadow-2xl">
              <button
                onClick={() => setFlow("developer")}
                className={`flex-1 py-3 px-6 rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  flow === "developer" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Developer
              </button>
              <button
                onClick={() => setFlow("company")}
                className={`flex-1 py-3 px-6 rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  flow === "company" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Company
              </button>
            </div>

            {/* Main Call to Action (The Visual Magnet) */}
            <button 
              onClick={handleNext}
              className="mt-8 group relative bg-emerald-400 hover:bg-emerald-300 text-black font-sans text-xs font-bold tracking-[0.2em] uppercase w-full max-w-sm mx-auto py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3"
            >
              <span className="relative z-10">{flow === "developer" ? "Conectar GitHub Signal" : "Configurar Entidad"}</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}

        {/* Step 2: Calibrate Signal (Developer Flow) */}
        {step === 2 && flow === "developer" && (
          <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Calibrando <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">Señal</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light tracking-wide max-w-sm mx-auto">
                Selecciona los repositorios que formarán la base criptográfica de tu ProofScore.
              </p>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {developerRepos.map((repo) => (
                <div 
                  key={repo.name}
                  onClick={() => toggleRepo(repo.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between backdrop-blur-sm ${
                    selectedRepos.includes(repo.name) 
                      ? "bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]" 
                      : "bg-zinc-950/50 border-zinc-800/50 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <h3 className={`font-mono text-sm ${selectedRepos.includes(repo.name) ? "text-emerald-400" : "text-zinc-300"}`}>
                      {repo.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-1 font-sans">{repo.language} • {repo.updated}</p>
                  </div>
                  <div className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                    selectedRepos.includes(repo.name) ? "border-emerald-500 bg-emerald-500" : "border-zinc-700"
                  }`}>
                    {selectedRepos.includes(repo.name) && <div className="h-1.5 w-1.5 bg-black rounded-full" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <button 
                onClick={handleNext}
                disabled={selectedRepos.length === 0}
                className="bg-white text-black hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-white font-sans text-xs font-bold tracking-[0.2em] uppercase px-12 py-4 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Confirmar Selección
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Genesis / ProofScore Generation */}
        {step === 3 && (
          <div className="w-full text-center space-y-10 animate-in zoom-in-95 duration-1000">
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <div className={`absolute inset-0 border-[1px] rounded-full transition-all duration-1000 ${isAnalyzing ? 'border-emerald-500 animate-[spin_2s_linear_infinite]' : 'border-zinc-800'}`} />
              <div className={`absolute inset-2 border-[1px] border-dashed rounded-full transition-all duration-1000 ${isAnalyzing ? 'border-emerald-400/50 animate-[spin_3s_linear_infinite_reverse]' : 'border-zinc-800/50'}`} />
              <span className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] uppercase">
                {isAnalyzing ? "Syncing..." : "Ready"}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white drop-shadow-lg">
                Génesis del <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">Sistema</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light tracking-wide max-w-sm mx-auto">
                Todos los protocolos están listos. Generando tu huella criptográfica en el coliseo.
              </p>
            </div>

            <button 
              onClick={handleGenerateScore}
              disabled={isAnalyzing}
              className="relative group bg-emerald-500 hover:bg-emerald-400 text-black font-sans text-xs font-bold tracking-[0.2em] uppercase px-12 py-5 rounded-full transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.3)] disabled:opacity-80"
            >
              <span className="relative z-10">{isAnalyzing ? "CREANDO ACCESO..." : "ENTRAR AL OASIS"}</span>
            </button>
          </div>
        )}
      </main>

      {/* Ultra-Thin Progress Line at Bottom */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-zinc-900 w-full">
        <div 
          className="h-full bg-emerald-500 transition-all duration-1000 ease-in-out shadow-[0_0_15px_#10b981]"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

    </div>
  )
}