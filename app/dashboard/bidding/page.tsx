"use client"

import { useState } from "react"

export default function TalentBiddingPage() {
  const [currency, setCurrency] = useState("EUR")
  const [salaryFloor, setSalaryFloor] = useState(85000)
  const [saved, setSaved] = useState(false)

  const bids = [
    {
      id: "bid-01",
      company: "CyberShield Solutions",
      role: "Senior SecOps Engineer",
      location: "Full Remote (EU)",
      amount: 95000,
      status: "ACTIVE",
      time: "Hace 2h"
    },
    {
      id: "bid-02",
      company: "AutonomX Systems",
      role: "AI Integration Lead",
      location: "Hybrid (Ingolstadt/Bavaria)",
      amount: 110000,
      status: "ACTIVE",
      time: "Hace 5h"
    },
    {
      id: "bid-03",
      company: "DataCloud Global",
      role: "Fullstack Rust/Next.js Dev",
      location: "Full Remote",
      amount: 78000,
      status: "DISCARDED",
      time: "Ayer"
    }
  ]

  const handleSaveFloor = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* 4K Cyber Grid Background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="border-b border-zinc-900 pb-6 mb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MERCADO GLOBAL // SUBASTA DE TALENTO VIVA</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
            Control de Suelo Salarial
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Las ofertas corporativas inferiores a tu umbral son descartadas automáticamente por el kernel. Cero negociaciones a ciegas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Config Salary Floor */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500" />

            <h2 className="font-mono text-xs text-emerald-400 mb-6 uppercase tracking-wider flex items-center justify-between">
              <span>// CONFIGURAR SUELO SALARIAL</span>
              <span>🔒 KERNEL SECURE</span>
            </h2>

            <form onSubmit={handleSaveFloor} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-2">MONEDA Y UMBRAL MÍNIMO (ANUAL)</label>
                <div className="grid grid-cols-3 gap-2">
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-black border border-zinc-800 text-emerald-400 font-mono p-3 outline-none"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="USDC">USDC</option>
                  </select>
                  <input 
                    type="number" 
                    value={salaryFloor}
                    onChange={(e) => setSalaryFloor(Number(e.target.value))}
                    className="col-span-2 bg-black border border-zinc-800 text-white font-mono p-3 outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="border border-zinc-900 bg-black p-4 space-y-2 font-mono text-xs text-zinc-400">
                <p className="text-emerald-400 font-bold">REGLA ALGORÍTMICA ACTIVA:</p>
                <p>Cualquier propuesta corporativa por debajo de <strong className="text-white">{currency} {salaryFloor.toLocaleString()}</strong> será bloqueada y rechazada de inmediato.</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold py-3 transition-colors uppercase tracking-wider"
              >
                {saved ? "✓ SUELO SALARIAL ACTUALIZADO" : "ACTUALIZAR UMBRAL EN LA RED"}
              </button>
            </form>
          </div>

          {/* Right Column: Incoming Bids Stream */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
              // PUJAS CORPORATIVAS RECIBIDAS (3)
            </h2>

            {bids.map((bid) => (
              <div 
                key={bid.id}
                className={`p-5 bg-zinc-950 border transition-all ${bid.status === "ACTIVE" ? "border-zinc-900 hover:border-emerald-500/50" : "border-red-950/40 opacity-60"}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-1">
                      <strong className="text-white">{bid.company}</strong>
                      <span>·</span>
                      <span>{bid.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{bid.role}</h3>
                    <span className="font-mono text-xs text-emerald-400/80 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5">
                      {bid.location}
                    </span>
                  </div>

                  <div className="text-right flex flex-col items-start md:items-end justify-between">
                    <span className={`font-mono text-xl font-bold ${bid.status === "ACTIVE" ? "text-emerald-400" : "text-red-400 line-through"}`}>
                      {currency === "EUR" ? "€" : "$"}{bid.amount.toLocaleString()}/año
                    </span>

                    {bid.status === "ACTIVE" ? (
                      <div className="flex items-center gap-2 mt-3 font-mono text-xs">
                        <button 
                          onClick={() => router.push("/dashboard/messages")}
                          className="bg-emerald-500 text-black font-bold px-3 py-1.5 hover:bg-emerald-400 transition-colors"
                        >
                          ACEPTAR PUJA →
                        </button>
                        <button className="border border-zinc-800 text-zinc-400 px-3 py-1.5 hover:text-white transition-colors">
                          RECHAZAR
                        </button>
                      </div>
                    ) : (
                      <span className="font-mono text-[10px] text-red-400 mt-2 bg-red-950/40 border border-red-900/50 px-2 py-1">
                        DISCARDED // BAJO EL SUELO SALARIAL
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}