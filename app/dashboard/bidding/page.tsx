"use client";

import { useState } from "react";

interface Bid {
  id: string;
  company: string;
  role: string;
  salary: number;
  location: string;
  status: "pending" | "accepted" | "rejected";
  timestamp: string;
}

type ModalityKey = "remote" | "hybrid" | "b2b" | "eor";

export default function BiddingPage() {
  const [salaryFloor, setSalaryFloor] = useState<number>(85000);
  const [currency, setCurrency] = useState<"USD" | "EUR">("EUR");
  const [modalities, setModalities] = useState<Record<ModalityKey, boolean>>({
    remote: true,
    hybrid: true,
    b2b: false,
    eor: true,
  });

  const [bids, setBids] = useState<Bid[]>([
    {
      id: "bid-1",
      company: "CyberShield Solutions",
      role: "Senior SecOps Engineer",
      salary: 95000,
      location: "Full Remote (EU)",
      status: "pending",
      timestamp: "Hace 2h",
    },
    {
      id: "bid-2",
      company: "AutonomX Systems",
      role: "AI Integration Lead",
      salary: 110000,
      location: "Hybrid (Ingolstadt/Bavaria)",
      status: "pending",
      timestamp: "Hace 5h",
    },
    {
      id: "bid-3",
      company: "DataCloud Global",
      role: "Fullstack Rust/Next.js Dev",
      salary: 78000,
      location: "Full Remote",
      status: "rejected",
      timestamp: "Ayer",
    },
  ]);

  const handleAction = (id: string, action: "accepted" | "rejected") => {
    setBids((prev) =>
      prev.map((bid) => (bid.id === id ? { ...bid, status: action } : bid))
    );
  };

  const toggleModality = (key: ModalityKey) => {
    setModalities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const modalityItems: { key: ModalityKey; label: string }[] = [
    { key: "remote", label: "Remote" },
    { key: "hybrid", label: "Hybrid" },
    { key: "b2b", label: "B2B Contract" },
    { key: "eor", label: "EOR Ready" },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-800 pb-4">
        <h1 className="text-xl font-bold text-emerald-400">// TALENT BIDDING & LIVE AUCTION</h1>
        <p className="text-xs text-zinc-400 mt-1">
          Las empresas pujan públicamente por tu perfil basándose en tu ProofScore. Las ofertas inferiores a tu Suelo Salarial son filtradas automáticamente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel Izquierdo: Configuración */}
        <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-lg space-y-6">
          <h2 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
            [1] Configuración del Suelo Salarial
          </h2>

          <div className="space-y-2">
            <label className="text-xs text-zinc-400">Suelo Salarial Mínimo (Por Año)</label>
            <div className="flex items-center space-x-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as "USD" | "EUR")}
                className="bg-zinc-900 text-zinc-100 border border-zinc-800 text-xs rounded px-2 py-2 focus:outline-none focus:border-emerald-500 font-mono"
              >
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
              </select>
              <input
                type="number"
                step="5000"
                value={salaryFloor}
                onChange={(e) => setSalaryFloor(Number(e.target.value))}
                className="w-full bg-zinc-900 text-emerald-400 font-bold border border-zinc-800 text-sm rounded px-3 py-2 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
            <p className="text-[10px] text-zinc-500">
              Cualquier puja por debajo de {currency === "EUR" ? "€" : "$"}{salaryFloor.toLocaleString()} será rechazada automáticamente.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-900">
            <label className="text-xs text-zinc-400">Modalidades Aceptadas</label>

            <div className="space-y-3 text-xs">
              {modalityItems.map((item) => (
                <label key={item.key} className="flex items-center justify-between text-zinc-300 cursor-pointer hover:text-white">
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={modalities[item.key]}
                    onChange={() => toggleModality(item.key)}
                    className="!w-4 !h-4 !min-w-[16px] !min-h-[16px] accent-emerald-500 border border-zinc-700 bg-zinc-900 rounded cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Panel Derecho: Pujas */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
            [2] Pujas Recibidas ({bids.length})
          </h2>

          <div className="space-y-3">
            {bids.map((bid) => {
              const isBelowFloor = bid.salary < salaryFloor;

              return (
                <div
                  key={bid.id}
                  className={`border p-4 rounded-lg bg-zinc-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
                    bid.status === "accepted"
                      ? "border-emerald-500/50 bg-emerald-950/10"
                      : bid.status === "rejected" || isBelowFloor
                      ? "border-zinc-800 opacity-60"
                      : "border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-zinc-100">{bid.company}</span>
                      <span className="text-[10px] text-zinc-500">• {bid.timestamp}</span>
                    </div>
                    <div className="text-xs text-zinc-300">{bid.role}</div>
                    <div className="text-[11px] text-zinc-500">{bid.location}</div>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto gap-2">
                    <div className="text-right">
                      <div className={`text-base font-bold font-mono ${isBelowFloor ? "text-red-400 line-through" : "text-emerald-400"}`}>
                        {currency === "EUR" ? "€" : "$"}{bid.salary.toLocaleString()}/año
                      </div>
                      {isBelowFloor && (
                        <span className="text-[9px] text-red-500 block">Bajo el suelo salarial</span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      {bid.status === "pending" && !isBelowFloor && (
                        <>
                          <button
                            onClick={() => handleAction(bid.id, "accepted")}
                            className="px-3 py-1 text-xs bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded transition-colors"
                          >
                            ACCEPT BID
                          </button>
                          <button
                            onClick={() => handleAction(bid.id, "rejected")}
                            className="px-3 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
                          >
                            REJECT
                          </button>
                        </>
                      )}
                      {bid.status === "accepted" && (
                        <span className="px-2 py-1 text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-mono">
                          ACCEPTED & CHAT OPENED
                        </span>
                      )}
                      {(bid.status === "rejected" || isBelowFloor) && (
                        <span className="px-2 py-1 text-[10px] bg-zinc-800 text-zinc-500 rounded font-mono">
                          DISCARDED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}