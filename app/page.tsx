"use client"

import { useEffect, useState } from "react"
import { SafeSignUpButton } from "../components/clerk-safe"
import { SignInButton, SignUpButton } from "@clerk/nextjs"

type Locale = "es" | "en"

const telemetryMetrics = [
  { label: "CODE QUALITY", value: "92%", width: "92%" },
  { label: "ARCHITECTURE", value: "96%", width: "96%" },
  { label: "CONSISTENCY", value: "89%", width: "89%" },
] as const

const copy = {
  es: {
    topLive: "LIVE / 2,400 DEVELOPERS VERIFIED",
    topRight: "GLOBAL · REMOTE · VERIFIED",
    login: "INICIAR SESIÓN",
    eyebrow: "PROOF ENGINE // LIVE",
    titleLine1: "TU CÓDIGO.",
    titleLine2: "TU PRUEBA.",
    titleLine3: "VERIFICA.",
    subtitle: "Demuestra lo que has construido, no lo que afirmas.",
    connectGithub: "CONECTAR GITHUB",
    emailAccount: "CREAR CUENTA / CORREO",
    startHiring: "EMPEZAR A CONTRATAR",
    telemetryTitle: "LIVE TELEMETRY / PROOF ENGINE",
    telemetryNotice: "Evaluación objetiva en tiempo real sobre repositorios reales.",
    status: "SYS.STATUS // OPERATIONAL · ENCRYPTED · GDPR READY · 24/7",
  },
  en: {
    topLive: "LIVE / 2,400 DEVELOPERS VERIFIED",
    topRight: "GLOBAL · REMOTE · VERIFIED",
    login: "LOG IN",
    eyebrow: "PROOF ENGINE // LIVE",
    titleLine1: "YOUR CODE.",
    titleLine2: "YOUR PROOF.",
    titleLine3: "VERIFY.",
    subtitle: "Prove what you have built, not what you claim.",
    connectGithub: "CONNECT GITHUB",
    emailAccount: "CREATE ACCOUNT / EMAIL",
    startHiring: "START HIRING",
    telemetryTitle: "LIVE TELEMETRY / PROOF ENGINE",
    telemetryNotice: "Objective real-time telemetry from actual production repos.",
    status: "SYS.STATUS // OPERATIONAL · ENCRYPTED · GDPR READY · 24/7",
  },
} as const

function LiveCodeTelemetry({ notice, title }: { notice: string; title: string }) {
  return (
    <div className="w-full max-w-lg border border-emerald-500/30 bg-black/80 p-6 font-mono text-xs text-zinc-300 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-md">
      {/* Header HUD */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-zinc-200 font-bold tracking-wider">{title}</span>
        </div>
        <span className="text-[10px] text-zinc-500">NODE 01 · UPDATED JUST NOW</span>
      </div>

      {/* Realtime Terminal Output */}
      <div className="mb-6 space-y-1.5 rounded border border-zinc-900 bg-zinc-950/90 p-3 text-zinc-400">
        <p><span className="text-emerald-400">&gt;</span> REPO: <span className="text-white">github.com/werkdeck/core</span></p>
        <p><span className="text-emerald-400">&gt;</span> ARCHITECTURE: <span className="text-emerald-400 font-bold">MODULAR // CLEAN</span></p>
        <p><span className="text-emerald-400">&gt;</span> TEST COVERAGE: <span className="text-white">98.4%</span></p>
        <p><span className="text-emerald-400">&gt;</span> PROOF_STATUS: <span className="text-emerald-400 font-bold">VERIFIED</span></p>
      </div>

      {/* Telemetry Metric Bars */}
      <div className="space-y-4">
        {telemetryMetrics.map((m) => (
          <div key={m.label} className="space-y-1">
            <div className="flex justify-between text-[11px] tracking-wider text-zinc-400">
              <span>{m.label}</span>
              <span className="text-emerald-400 font-bold">{m.value}</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900">
              <div
                className="h-full bg-emerald-500 transition-all duration-1000 shadow-[0_0_8px_#10b981]"
                style={{ width: m.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-zinc-900 pt-3 text-[10px] text-zinc-500 leading-relaxed">
        {notice}
      </p>
    </div>
  )
}

export default function WerkDeckLanding() {
  const [locale, setLocale] = useState<Locale>("es")
  const t = copy[locale]

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    setLocale(browserLang.startsWith("en") ? "en" : "es")
  }, [])

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-black font-sans text-white overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Background 4K Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Top Banner Status */}
      <header className="relative z-10 flex items-center justify-between border-b border-zinc-900 bg-black/60 px-6 py-2 font-mono text-[11px] text-zinc-500 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>{t.topLive}</span>
        </div>
        <span className="hidden sm:inline">{t.topRight}</span>
      </header>

      {/* Main Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <a href="#" className="flex items-center gap-3 text-xl font-black tracking-widest text-white">
          WERKDECK <span className="text-xs font-mono text-emerald-400 font-normal">● ONLINE</span>
        </a>
        <SignInButton mode="modal">
          <button className="font-mono text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer" type="button">
            {t.login}
          </button>
        </SignInButton>
      </nav>

      {/* Hero Body */}
      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 gap-12">
        {/* Left Column: Headlines & CTAs */}
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-xs tracking-widest text-emerald-400 font-bold uppercase">{t.eyebrow}</p>
          
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-none">
            {t.titleLine1}<br />
            {t.titleLine2}<br />
            <span className="italic font-serif text-zinc-300">{t.titleLine3}</span>
          </h1>

          <p className="text-lg text-zinc-400 font-normal max-w-lg">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-2 text-zinc-400">
            <span>✓ GITHUB OAUTH</span>
            <span className="text-zinc-700">·</span>
            <span>✓ EMAIL & PASSWORD</span>
            <span className="text-zinc-700">·</span>
            <span>✓ GDPR READY</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Opción 1: Conectar con GitHub (Directo al onboarding o demo) */}
            <SafeSignUpButton forceRedirectUrl="/dev/demo">
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black px-8 py-4 font-mono font-bold tracking-wider text-xs transition-colors border border-white cursor-pointer"
              >
                <span className="border border-black/30 px-1 py-0.5 text-[10px]">GH</span>
                {t.connectGithub}
              </button>
            </SafeSignUpButton>

            {/* Opción 2: Crear cuenta o iniciar sesión con correo tradicional mediante modal de Clerk */}
            <SignUpButton mode="modal">
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 px-8 py-4 font-mono font-bold tracking-wider text-xs transition-colors border border-emerald-500/40 cursor-pointer"
              >
                <span>@</span>
                {t.emailAccount}
              </button>
            </SignUpButton>

            <a
              href="#hirer"
              className="flex items-center justify-center border border-zinc-800 hover:border-zinc-500 bg-zinc-950/80 px-8 py-4 font-mono font-bold tracking-wider text-xs text-zinc-300 hover:text-white transition-all"
            >
              {t.startHiring}
            </a>
          </div>
        </div>

        {/* Right Column: Telemetry Widget */}
        <div className="flex justify-center lg:justify-end">
          <LiveCodeTelemetry notice={t.telemetryNotice} title={t.telemetryTitle} />
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-black/80 px-6 py-4 lg:px-12 font-mono text-xs text-zinc-500 flex items-center justify-between">
        <span>{t.status}</span>
      </footer>
    </main>
  )
}