"use client"

import { FormEvent, useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { getSupabaseClient } from "../lib/supabase"

type Signal = {
  id: string
  content: string
  kind: string | null
  created_at: string
  author_name?: string | null
}

export function SignalFeed() {
  const { isLoaded, user } = useUser()
  const [signals, setSignals] = useState<Signal[]>([])
  const [content, setContent] = useState("")
  const [kind, setKind] = useState("snippet")
  const [loading, setLoading] = useState(true)
  const [publishing, setPublishing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoaded || !user) return

    let active = true
    const client = getSupabaseClient()

    const loadSignals = async () => {
      const { data, error: queryError } = await client
        .from("signals")
        .select("id, content, kind, created_at")
        .order("created_at", { ascending: false })
        .limit(30)

      if (!active) return
      if (queryError) setError("Unable to load the Signal Feed yet.")
      else setSignals((data ?? []) as Signal[])
      setLoading(false)
    }

    void client.from("profiles").upsert({
      id: user.id,
      full_name: user.fullName ?? user.username ?? null,
      avatar_url: user.imageUrl ?? null,
      github_username: user.username ?? null,
    }, { onConflict: "id" })

    void loadSignals()

    const channel = client
      .channel("signals-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "signals" }, () => {
        void loadSignals()
      })
      .subscribe()

    return () => {
      active = false
      void client.removeChannel(channel)
    }
  }, [isLoaded, user])

  const publishSignal = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = content.trim()
    if (!user || !trimmed || publishing) return

    setPublishing(true)
    setError(null)
    const { data, error: insertError } = await getSupabaseClient()
      .from("signals")
      .insert({ user_id: user.id, content: trimmed, kind })
      .select("id, content, kind, created_at")
      .single()

    if (insertError) setError("The signal could not be published. Check your Supabase policies.")
    else if (data) {
      setSignals((current) => [data as Signal, ...current])
      setContent("")
    }
    setPublishing(false)
  }

  return <section className="signal-feed dash-module">
    <div className="module-heading"><div><span className="module-kicker">01 / SIGNAL FEED</span><h2>Verified community signal</h2></div><span className="module-count">REALTIME</span></div>
    <form className="signal-composer" onSubmit={publishSignal}>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Share a verified snippet, deploy, or architecture signal..." maxLength={2000} disabled={!isLoaded || !user || publishing} />
      <div className="signal-composer-actions"><select value={kind} onChange={(event) => setKind(event.target.value)} disabled={publishing}><option value="snippet">CODE SNIPPET</option><option value="deploy">VERIFIED DEPLOY</option><option value="architecture">ARCHITECTURE</option></select><button type="submit" disabled={!content.trim() || !user || publishing}>{publishing ? "PUBLISHING..." : "PUBLISH SIGNAL ↗"}</button></div>
    </form>
    {error && <p className="signal-error" role="alert">{error}</p>}
    {loading ? <p className="signal-empty">LOADING VERIFIED SIGNALS...</p> : signals.length === 0 ? <p className="signal-empty">No signals published yet. Be the first verified voice.</p> : <div className="signal-list">{signals.map((signal) => <article className="signal-card" key={signal.id}><div><span className="signal-kind">{(signal.kind ?? "signal").toUpperCase()}</span><time dateTime={signal.created_at}>{new Date(signal.created_at).toLocaleString()}</time></div><p>{signal.content}</p></article>)}</div>}
  </section>
}
