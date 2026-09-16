'use client';

import React, { useState } from 'react';
import { WerkDeckNavbarLogo } from '@/components/WerkDeckNavbarLogo';
import { ArrowRight, CheckCircle2, Github, Shield, Terminal, Zap } from 'lucide-react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'developer' | 'company'>('developer');
  const [selectedRepos, setSelectedRepos] = useState<string[]>(['werkdeck-platform']);

  const repos = [
    { id: 'werkdeck-platform', name: 'werkdeck-platform', lang: 'TypeScript', updated: '2d ago' },
    { id: 'signal-processor', name: 'signal-processor', lang: 'Rust', updated: '5d ago' },
    { id: 'infra-blueprints', name: 'infra-blueprints', lang: 'HCL', updated: '1w ago' },
  ];

  const toggleRepo = (id: string) => {
    setSelectedRepos(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#030406] text-zinc-100 font-sans flex flex-col justify-between selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Fondo de Malla Grid OASIS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Header Onboarding */}
      <header className="border-b border-zinc-800/60 bg-[#08090d]/80 backdrop-blur-xl sticky top-0 z-50 px-8 py-5 flex items-center justify-between">
        <WerkDeckNavbarLogo />
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-zinc-500 uppercase tracking-widest">INITIALIZATION SEQUENCE</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            STEP 0{step} / 03
          </span>
        </div>
      </header>

      {/* Pantallas Dinámicas */}
      <main className="max-w-4xl mx-auto w-full px-6 py-12 relative z-10 flex-1 flex flex-col justify-center">
        {step === 1 && (
          <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] font-bold block mb-3">
                // PROTOCOL INITIALIZATION
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Sincroniza tu <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">Identidad</span>
              </h1>
              <p className="text-zinc-400 text-base mt-4 max-w-xl mx-auto leading-relaxed">
                Selecciona tu nodo de acceso. El sistema adaptará el entorno según tu objetivo en la red.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
              <button
                onClick={() => setRole('developer')}
                className={`p-8 rounded-2xl border text-left transition-all duration-300 relative ${
                  role === 'developer'
                    ? 'bg-[#0c0d12] border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.02]'
                    : 'bg-[#08090d]/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <Terminal className={`w-8 h-8 mb-4 ${role === 'developer' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <h3 className="text-xl font-bold text-white mb-1">DEVELOPER</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Demuestra capacidad técnica con pruebas de código verificado.</p>
              </button>

              <button
                onClick={() => setRole('company')}
                className={`p-8 rounded-2xl border text-left transition-all duration-300 relative ${
                  role === 'company'
                    ? 'bg-[#0c0d12] border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.02]'
                    : 'bg-[#08090d]/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <Shield className={`w-8 h-8 mb-4 ${role === 'company' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <h3 className="text-xl font-bold text-white mb-1">COMPANY</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Publica desafíos en Arenas y subasta talento sin sesgos.</p>
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-sm uppercase tracking-wider py-4 px-10 rounded-xl transition shadow-[0_0_25px_rgba(16,185,129,0.3)] inline-flex items-center gap-3 active:scale-95"
            >
              Conectar Señal Github <Github className="w-5 h-5 fill-black" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] font-bold block mb-3">
                // CRYPTOGRAPHIC PROOF ENGINE
              </span>
              <h1 className="text-5xl font-extrabold text-white tracking-tight">
                Calibrando <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">Señal</span>
              </h1>
              <p className="text-zinc-400 text-base mt-3 max-w-lg mx-auto">
                Selecciona los repositorios que formarán la base criptográfica de tu ProofScore.
              </p>
            </div>

            <div className="space-y-4 max-w-xl mx-auto text-left">
              {repos.map((repo) => {
                const isSelected = selectedRepos.includes(repo.id);
                return (
                  <div
                    key={repo.id}
                    onClick={() => toggleRepo(repo.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0c0d12] border-emerald-500/70 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                        : 'bg-[#08090d]/60 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <h4 className="font-mono text-sm font-bold text-emerald-400">{repo.name}</h4>
                      <p className="font-mono text-xs text-zinc-500 mt-1">{repo.lang} • {repo.updated}</p>
                    </div>
                    <CheckCircle2 className={`w-6 h-6 transition ${isSelected ? 'text-emerald-400 fill-emerald-500/20' : 'text-zinc-700'}`} />
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setStep(3)}
              className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-sm uppercase tracking-wider py-4 px-10 rounded-xl transition shadow-[0_0_25px_rgba(16,185,129,0.3)] inline-flex items-center gap-3 active:scale-95"
            >
              Confirmar Selección <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full border-2 border-emerald-500/40 border-t-emerald-400 animate-spin mx-auto flex items-center justify-center"></div>
              <Zap className="w-8 h-8 text-emerald-400 absolute inset-0 m-auto" />
            </div>

            <div>
              <h1 className="text-5xl font-extrabold text-white tracking-tight">
                Génesis del <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">Sistema</span>
              </h1>
              <p className="text-zinc-400 text-base mt-3 max-w-lg mx-auto">
                Todos los protocolos están listos. Generando tu huella criptográfica en el coliseo.
              </p>
            </div>

            <a
              href="/dashboard/feed"
              className="inline-flex bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-extrabold text-sm uppercase tracking-wider py-4 px-10 rounded-xl transition shadow-[0_0_25px_rgba(16,185,129,0.3)] items-center gap-3 active:scale-95"
            >
              Acceder al Kernel Global <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </main>

      {/* Progress Footer */}
      <footer className="border-t border-zinc-800/60 py-4 px-8 text-center font-mono text-xs text-zinc-600">
        WERKDECK PROTOCOL // ALL SIGNALS ENCRYPTED
      </footer>
    </div>
  );
}