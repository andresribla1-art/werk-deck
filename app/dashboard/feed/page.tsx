'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface FeedEvent {
  id: string;
  username: string;
  user_score: number;
  event_type: string;
  repo_name: string | null;
  detail: string;
  created_at: string;
}

export default function ExecutionFeedPage() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeed() {
      const { data, error } = await supabase
        .from('feed_events')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error cargando el feed:', error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    }

    fetchFeed();
  }, []);

  if (loading) return <div className="p-8 text-emerald-500 font-mono">LOADING_REALTIME_FEED...</div>;

  return (
    <div className="p-8 space-y-4 max-w-4xl">
      <h1 className="text-xl font-bold text-emerald-400 font-mono mb-6">// EXECUTION FEED & LIVE DISPATCH</h1>
      
      {events.map((event) => (
        <div key={event.id} className="border border-zinc-800 bg-zinc-950 p-4 rounded-md font-mono space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="text-emerald-500 font-bold">@{event.username} ({event.user_score} PTS)</span>
            <span>{new Date(event.created_at).toLocaleTimeString()}</span>
          </div>
          <div className="text-sm font-semibold text-white">
            [{event.event_type}] {event.repo_name && <span className="text-zinc-400">{event.repo_name}</span>}
          </div>
          <p className="text-xs text-zinc-300">{event.detail}</p>
        </div>
      ))}
    </div>
  );
}