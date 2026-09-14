"use client";

import { useState } from "react";

interface Message {
  id: string;
  sender: "recruiter" | "dev";
  text: string;
  timestamp: string;
}

interface Thread {
  id: string;
  company: string;
  recruiter: string;
  role: string;
  time: string;
  messages: Message[];
}

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState("1");
  const [inputText, setInputText] = useState("");

  const [threads, setThreads] = useState<Thread[]>([
    {
      id: "1",
      company: "CyberShield Solutions",
      recruiter: "Elena Rostova",
      role: "Senior SecOps Engineer",
      time: "10:42",
      messages: [
        {
          id: "m1",
          sender: "recruiter",
          text: "Revisamos tu ProofScore y la ejecución en la Arena Rust. ¿Tendrías 15 min esta semana?",
          timestamp: "10:42",
        },
      ],
    },
    {
      id: "2",
      company: "AutonomX Systems",
      recruiter: "Markus Weber",
      role: "AI Integration Lead",
      time: "Ayer",
      messages: [
        {
          id: "m2",
          sender: "recruiter",
          text: "Tu oferta en la subasta fue aceptada. Adjunto el borrador del contrato B2B.",
          timestamp: "Ayer 16:30",
        },
      ],
    },
  ]);

  const activeThread = threads.find((t) => t.id === activeChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeThread) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "dev",
      text: inputText,
      timestamp: "Ahora",
    };

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === activeChat
          ? { ...thread, messages: [...thread.messages, newMessage] }
          : thread
      )
    );

    setInputText("");
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-800 pb-4">
        <h1 className="text-xl font-bold text-emerald-400">// RECRUITER MESSAGES</h1>
        <p className="text-xs text-zinc-400 mt-1">
          Canal directo encriptado con empresas que hayan igualado o superado tu Suelo Salarial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden">
        {/* Lista de Conversaciones */}
        <div className="border-r border-zinc-800 divide-y divide-zinc-900">
          {threads.map((t) => {
            const lastMsg = t.messages[t.messages.length - 1];
            return (
              <div
                key={t.id}
                onClick={() => setActiveChat(t.id)}
                className={`p-4 cursor-pointer transition-colors ${
                  activeChat === t.id
                    ? "bg-zinc-900/80 border-l-2 border-emerald-500"
                    : "hover:bg-zinc-900/30"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-xs text-zinc-200">{t.company}</span>
                  <span className="text-[10px] text-zinc-500">{t.time}</span>
                </div>
                <div className="text-[11px] text-emerald-400 mb-1">{t.role}</div>
                <p className="text-[11px] text-zinc-400 truncate">{lastMsg?.text}</p>
              </div>
            );
          })}
        </div>

        {/* Ventana de Chat */}
        <div className="md:col-span-2 flex flex-col justify-between p-4 bg-zinc-950">
          <div className="border-b border-zinc-800 pb-3">
            <h3 className="font-bold text-xs text-zinc-100">
              {activeThread?.recruiter} —{" "}
              <span className="text-zinc-400">{activeThread?.company}</span>
            </h3>
            <span className="text-[10px] text-emerald-400 font-mono">
              Encrypted Direct Link
            </span>
          </div>

          <div className="flex-1 py-4 space-y-3 overflow-y-auto font-mono text-xs">
            {activeThread?.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "dev" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "dev"
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] text-zinc-500 block text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2 pt-3 border-t border-zinc-800">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe un mensaje de respuesta..."
              className="flex-1 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 font-mono placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs rounded transition-colors"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}