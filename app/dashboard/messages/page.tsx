"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function MessagesPage() {
  const router = useRouter()
  const [selectedChat, setSelectedChat] = useState("CyberShield Solutions")

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
            WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">// SECURE_COMMS</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
            <a href="/dashboard/feed" className="hover:text-white transition-colors">Execution Feed</a>
            <a href="/dashboard/arenas" className="hover:text-white transition-colors">Arenas</a>
            <a href="/dashboard/bidding" className="hover:text-white transition-colors">Talent Bidding</a>
            <a href="/dashboard/profile" className="hover:text-white transition-colors">Proof Profile</a>
            <a href="/dashboard/messages" className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Messages</a>
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
        <div className="mb-8 border-b border-zinc-900 pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ENCRYPTED CHANNEL // RECRUITER DIRECT LINK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">Comunicaciones Directas</h1>
          <p className="text-zinc-400 text-sm mt-1">Canal seguro desbloqueado únicamente tras aceptar pujas válidas que superan tu Suelo Salarial.</p>
        </div>

        {/* Interfaz de Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 bg-zinc-950 font-mono min-h-[500px]">
          
          {/* Lista de Chats */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-900">
            <div 
              onClick={() => setSelectedChat("CyberShield Solutions")}
              className={`p-4 border-b border-zinc-900 cursor-pointer transition-colors ${selectedChat === 'CyberShield Solutions' ? 'bg-zinc-900/80 border-l-2 border-l-emerald-400' : 'hover:bg-zinc-900/40'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-bold text-xs">CyberShield Solutions</span>
                <span className="text-zinc-500 text-[10px]">10:42</span>
              </div>
              <p className="text-emerald-400 text-[10px] mb-1">Senior SecOps Engineer</p>
              <p className="text-zinc-400 text-xs truncate">Revisamos tu ProofScore y la ejecución en la Arena Rust...</p>
            </div>

            <div 
              onClick={() => setSelectedChat("AutonomX Systems")}
              className={`p-4 border-b border-zinc-900 cursor-pointer transition-colors ${selectedChat === 'AutonomX Systems' ? 'bg-zinc-900/80 border-l-2 border-l-emerald-400' : 'hover:bg-zinc-900/40'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-bold text-xs">AutonomX Systems</span>
                <span className="text-zinc-500 text-[10px]">Ayer</span>
              </div>
              <p className="text-emerald-400 text-[10px] mb-1">AI Integration Lead</p>
              <p className="text-zinc-400 text-xs truncate">Tu oferta en la subasta fue aceptada. Adjunto el borrador...</p>
            </div>
          </div>

          {/* Ventana de Conversación Activa */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6">
            <div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-6">
                <div>
                  <p className="text-white font-bold text-sm">Elena Rostova <span className="text-zinc-500 font-normal">— {selectedChat}</span></p>
                  <p className="text-emerald-400 text-[10px] mt-0.5">Encrypted Direct Link // Protocol AES-256</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="p-4 bg-black border border-zinc-900 text-zinc-300 text-xs max-w-md">
                <p>Revisamos tu ProofScore y la ejecución en la Arena Rust. ¿Tendrías 15 min esta semana?</p>
                <span className="text-[9px] text-zinc-500 block mt-2 text-right">10:42</span>
              </div>
            </div>

            {/* Input de Mensaje */}
            <div className="pt-6 border-t border-zinc-900 flex gap-4">
              <input 
                type="text" 
                placeholder="Escribe un mensaje encriptado de respuesta..." 
                className="w-full bg-black border border-zinc-800 text-white px-4 py-3 text-xs outline-none focus:border-emerald-500 font-mono"
              />
              <button 
                onClick={() => alert("Mensaje encriptado enviado con éxito a la red.")}
                className="px-6 bg-emerald-400 text-black font-extrabold hover:bg-emerald-300 transition-all text-xs cursor-pointer"
              >
                SEND
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}