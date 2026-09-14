'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Bid {
  id: string;
  company_name: string;
  role: string;
  amount: number;
  work_mode: string;
  location: string;
  time_ago: string;
  status: string;
}

export default function BiddingPage() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBids() {
      const { data, error } = await supabase
        .from('bids')
        .select('*')
        .order('amount', { ascending: false });

      if (error) {
        console.error('Error al cargar pujas:', error);
      } else {
        setBids(data || []);
      }
      setLoading(false);
    }

    fetchBids();
  }, []);

  return (
    <div className="p-8 max-w-6xl space-y-6 font-mono">
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-emerald-400">// TALENT BIDDING & LIVE AUCTION</h1>
        <p className="text-xs text-zinc-400">
          Las empresas pujan públicamente por tu perfil basándose en tu ProofScore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel Izquierdo: Suelo Salarial */}
        <div className="border border-zinc-800 bg-zinc-950 p-5 rounded-md space-y-4">
          <h2 className="text-sm font-bold text-zinc-200">[1] CONFIGURACIÓN DEL SUELO SALARIAL</h2>
          
          <div className="space-y-2">
            <label className="text-xs text-zinc-400 block">Suelo Salarial Mínimo (Por Año)</label>
            <div className="flex gap-2">
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-2 rounded">EUR (€)</span>
              <input 
                type="number" 
                defaultValue={85000} 
                className="bg-zinc-900 border border-zinc-800 text-white text-xs p-2 rounded w-full focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs text-zinc-400 block">Modalidades Aceptadas</span>
            <div className="space-y-1 text-xs text-zinc-300">
              <label className="flex items-center justify-between">
                <span>Remote</span>
                <input type="checkbox" defaultChecked className="accent-emerald-500" />
              </label>
              <label className="flex items-center justify-between">
                <span>Hybrid</span>
                <input type="checkbox" defaultChecked className="accent-emerald-500" />
              </label>
              <label className="flex items-center justify-between">
                <span>B2B Contract</span>
                <input type="checkbox" className="accent-emerald-500" />
              </label>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Lista de Pujas en Vivo */}
        <div className="md:col-span-2 border border-zinc-800 bg-zinc-950 p-5 rounded-md space-y-4">
          <h2 className="text-sm font-bold text-zinc-200">
            [2] PUJAS RECIBIDAS ({bids.length})
          </h2>

          {loading ? (
            <div className="text-xs text-emerald-500 py-8 text-center">CARGANDO_PUJAS_DESDE_SUPABASE...</div>
          ) : (
            <div className="space-y-3">
              {bids.map((bid) => {
                const isUnderFloor = bid.status === 'DISCARDED' || bid.amount < 85000;
                return (
                  <div 
                    key={bid.id} 
                    className={`border p-4 rounded-md flex justify-between items-center ${
                      isUnderFloor ? 'border-red-950 bg-red-950/10' : 'border-zinc-800 bg-zinc-900/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{bid.company_name}</span>
                        <span className="text-[10px] text-zinc-500">• {bid.time_ago}</span>
                      </div>
                      <div className="text-xs text-zinc-300">{bid.role}</div>
                      <div className="text-[10px] text-zinc-500">{bid.work_mode} ({bid.location})</div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className={`text-sm font-bold ${isUnderFloor ? 'text-red-500 line-through' : 'text-emerald-400'}`}>
                        €{bid.amount.toLocaleString()}/año
                      </div>
                      {isUnderFloor ? (
                        <span className="text-[10px] text-red-400 block">Bajo el suelo salarial</span>
                      ) : (
                        <div className="flex gap-2">
                          <button className="text-[10px] border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-2 py-1 rounded">
                            ACCEPT BID
                          </button>
                          <button className="text-[10px] border border-zinc-700 text-zinc-400 hover:bg-zinc-800 px-2 py-1 rounded">
                            REJECT
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}