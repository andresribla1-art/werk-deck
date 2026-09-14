"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Bid {
  id: string
  company: string
  role: string
  amount: number
  time: string
  type: string
  status: "ACTIVE" | "DISCARDED" | "ACCEPTED"
}

export default function TalentBiddingPage() {
  const router = useRouter()
  const [salaryFloor, setSalaryFloor] = useState(85000)
  const [currency, setCurrency] = useState("EUR")

  const bids: Bid[] = [
    {
      id: "1",
      company: "CyberShield Solutions",
      role: "Senior SecOps Engineer",
      amount: 95000,
      time: "Hace 2h",
      type: "Full Remote (EU)",
      status: "ACTIVE"
    },
    {
      id: "2",
      company: "AutonomX Systems",
      role: "AI Integration Lead",
      amount: 110000,
      time: "Hace 5h",
      type: "Hybrid (Ingolstadt/Bavaria)",
      status: "ACTIVE"
    },
    {
      id: "3",
      company: "DataCloud Global",
      role: "Fullstack Rust/Next.js Dev",
      amount: 78000,
      time: "Ayer",
      type: "Full Remote",
      status: "DISCARDED"
    }
  ]

  return (
    <main className="min-h-screen bg-black font-sans text-white selection:bg-emerald-500 selection:text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#030f06_1px,transparent_1px),linear-gradient(to_bottom,#030f06_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-50" />

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between border-b border-zinc-900 bg-black/90 px-6 py-4 lg:px-12 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-6">
          <span 
            onClick={() => router.push('/')} 
            className="text-xl font-black tracking-widest cursor-pointer hover:text-emerald-400 transition-colors"
          >
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">// AUCTION_GRID</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="hover:text-white transition-colors">Execution Feed</a>
            <a href="/dashboard/arenas" className="hover:text-white transition-colors">Arenas</a>
            <a href="/dashboard/bidding" className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Talent Bidding</a>
            <a href="/dashboard/profile" className="hover:text-white transition-colors">Proof Profile</a>
            <a href="/dashboard/messages" className="hover:text-white transition-colors">Messages</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            PROOF_SCORE: 890
          </span>
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 border-b border-zinc-900 pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>MERCADO GLOBAL // SUBASTA DE TALENTO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">Subastas de Talento en Vivo</h1>
          <p className="text-zinc-400 text-sm mt-1">Las empresas pujan públicamente por tu perfil basándose en tu ProofScore. Las ofertas inferiores a tu Suelo Salarial son filtradas automáticamente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono">
          
          {/* Panel de Configuración de Suelo Salarial */}
          <div className="lg:col-span-4 border border-zinc-800 bg-zinc-950 p-6 relative">
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <h2 className="text-xs font-bold text-emerald-400 tracking-wider mb-4">// CONFIGURACIÓN DEL SUELO SALARIAL</h2>
            
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 text-[10px] mb-1">MONEDA & UMBRAL MÍNIMO (ANUAL)</label>
                <div className="flex gap-2">
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-black border border-zinc-800 text-emerald-400 px-3 py-2 outline-none font-bold"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="USDC">USDC</option>
                  </select>
                  <input 
                    type="number" 
                    value={salaryFloor} 
                    onChange={(e) => setSalaryFloor(Number(e.target.value))}
                    className="w-full bg-black border border-zinc-800 text-white px-3 py-2 outline-none font-bold focus:border-emerald-500" 
                  />
                </div>
              </div>

              <p className="text-zinc-500 text-[10px] leading-relaxed pt-2 border-t border-zinc-900">
                Cualquier oferta corporativa por debajo de <strong className="text-white">{currency} {salaryFloor.toLocaleString()}</strong> será rechazada de forma algorítmica por la red.
              </p>

              <div className="pt-4 border-t border-zinc-900 space-y-2 text-zinc-400 text-xs">
                <p className="text-[10px] text-emerald-400 font-bold">MODALIDADES DE TRABAJO ACTIVAS:</p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-emerald-400" /> Full Remote
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-emerald-400" /> Hybrid (Bavaria/Global)
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-emerald-400" /> EOR / B2B Contracts
                </label>
              </div>
            </div>
          </div>

          {/* Listado de Pujas Recibidas */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xs font-bold text-zinc-400 tracking-wider mb-2">// PUJAS RECIBIDAS (3)</h2>
            
            {bids.map((bid) => {
              const isBelowFloor = bid.amount < salaryFloor
              return (
                <div 
                  key={bid.id}
                  className={`border p-6 bg-zinc-950 relative transition-all ${
                    isBelowFloor ? 'border-zinc-900 opacity-60' : 'border-zinc-800 hover:border-emerald-500/60'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <div>
                      <span className="text-white font-bold text-sm">{bid.company}</span>
                      <span className="text-zinc-500 text-[10px] ml-2">• {bid.time}</span>
                    </div>
                    <span className={`text-base font-extrabold ${isBelowFloor ? 'text-red-400 line-through' : 'text-emerald-400'}`}>
                      {currency === 'EUR' ? '€' : '$'}{bid.amount.toLocaleString()}/año
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-between items-end gap-4 pt-2 border-t border-zinc-900">
                    <div>
                      <p className="text-emerald-400 text-xs font-bold">{bid.role}</p>
                      <p className="text-zinc-400 text-[11px] font-sans mt-0.5">{bid.type}</p>
                    </div>

                    <div>
                      {isBelowFloor ? (
                        <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-2.5 py-1 border border-red-500/20">
                          DISCARDED // BAJO EL SUELO SALARIAL
                        </span>
                      ) : (
                        <div className="flex gap-2">
                          <button 
                            onClick={() => router.push('/dashboard/messages')}
                            className="px-4 py-2 bg-emerald-400 text-black font-bold hover:bg-emerald-300 transition-all text-xs"
                          >
                            ACEPTAR PUJA
                          </button>
                          <button 
                            onClick={() => alert(`Puja de ${bid.company} rechazada.`)}
                            className="px-4 py-2 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-xs"
                          >
                            RECHAZAR
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </main>
  )
}