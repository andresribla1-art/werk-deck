'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Arena {
  id: string;
  title: string;
  sponsor: string;
  prize_pool: string;
  participants_count: number;
  status: string;
  time_remaining: string;
  tags: string[];
}

export default function ArenasPage() {
  const [arenas, setArenas] = useState<Arena[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArenas() {
      const { data, error } = await supabase
        .from('arenas')
        .select('*')
        .order('participants_count', { ascending: false });

      if (error) {
        console.error('Error al cargar las arenas:', error);
      } else {
        setArenas(data || []);
      }
      setLoading(false);
    }

    fetchArenas();
  }, []);

  return (
    <div className="p-8 max-w-6xl space-y-6 font-mono">
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-emerald-400">// COMPETITION ARENAS</h1>
        <p className="text-xs text-zinc-400">
          Demuestra tus habilidades en retos reales respaldados por empresas y escala en el ranking.
        </p>
      </div>

      {loading ? (
        <div className="text-xs text-emerald-500 py-12 text-center">CARGANDO_ARENAS_DESDE_SUPABASE...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {arenas.map((arena) => (
            <div key={arena.id} className="border border-zinc-800 bg-zinc-950 p-5 rounded-md space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-500 font-bold">[{arena.sponsor}]</span>
                  <span className="text-zinc-500">{arena.time_remaining}</span>
                </div>
                <h2 className="text-base font-bold text-white">{arena.title}</h2>
                <div className="flex flex-wrap gap-1 pt-1">
                  {arena.tags?.map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px]">PRIZE POOL</span>
                  <span className="text-emerald-400 font-bold">{arena.prize_pool}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">PARTICIPANTS</span>
                  <span className="text-zinc-200">{arena.participants_count} DEVS</span>
                </div>
                <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-3 py-1.5 rounded text-xs">
                  ENTER ARENA
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}