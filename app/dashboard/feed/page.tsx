"use client";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function FeedPage() {
  const { t } = useSystemLanguage();

  return (
    <div className="min-h-screen px-6 pt-8 pb-24 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <p className="text-[10px] font-mono tracking-[0.4em] mb-2" style={{ color: "#00FF88" }}>
            // {t("feedSub")}
          </p>
          <h1
            className="font-black leading-none"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("feedTitle")}
          </h1>
        </div>

        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] tracking-widest"
          style={{
            background: "rgba(0,255,136,0.06)",
            border: "1px solid rgba(0,255,136,0.2)",
            color: "#00FF88",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }}
          />
          LIVE · 100% AUDITED
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Feed stream — 2 cols */}
        <div className="lg:col-span-2 space-y-4">

          {/* Signal card */}
          <div
            className="rounded-2xl p-6 transition-all duration-300 group"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,255,136,0.2)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 40px rgba(0,255,136,0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
            }}
          >
            {/* Author row */}
            <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    background: "rgba(0,255,136,0.1)",
                    border: "1px solid rgba(0,255,136,0.3)",
                    color: "#00FF88",
                    boxShadow: "0 0 16px rgba(0,255,136,0.15)",
                  }}
                >
                  AV
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">@alex_vortex</span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider"
                      style={{
                        background: "rgba(0,255,136,0.1)",
                        border: "1px solid rgba(0,255,136,0.25)",
                        color: "#00FF88",
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-[10px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Hace 2 min · Despliegue en Producción
                  </p>
                </div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00FF88" }} />
            </div>

            {/* Content */}
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.75" }}>
              Implementación del enrutador de agentes autónomos completada. Reducción de latencia a{" "}
              <code
                className="px-1.5 py-0.5 rounded font-mono text-xs font-bold"
                style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}
              >
                &lt; 15ms
              </code>{" "}
              bajo carga concurrente extrema.
            </p>

            {/* Meta */}
            <div
              className="grid grid-cols-2 rounded-xl p-4 font-mono text-xs"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div>
                <p className="text-[9px] tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>TARGET REPO</p>
                <p style={{ color: "rgba(255,255,255,0.8)" }}>werkdeck/core-engine</p>
              </div>
              <div>
                <p className="text-[9px] tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>COMMIT HASH</p>
                <p style={{ color: "#00FF88" }}>a4f89b2</p>
              </div>
            </div>
          </div>

          {/* Empty state hint */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "rgba(255,255,255,0.01)",
              border: "1px dashed rgba(255,255,255,0.06)",
            }}
          >
            <p className="font-mono text-[11px] tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
              SINCRONIZANDO SEÑALES DE LA RED...
            </p>
          </div>
        </div>

        {/* Telemetry panel */}
        <div
          className="rounded-2xl p-6 h-fit"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#00FF88" }}>
              NETWORK TELEMETRY
            </span>
          </div>

          <div className="space-y-5">
            {[
              { label: t("nodesActive"), value: "2,462", color: "white" },
              { label: t("latency"), value: "12ms", color: "#00FF88" },
              { label: t("currentBlock"), value: "#849,201", color: "rgba(255,255,255,0.6)" },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                <span className="font-mono font-bold text-sm" style={{ color }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Live indicator */}
          <div
            className="mt-6 pt-4 flex items-center gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }}
            />
            <span className="font-mono text-[9px] tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
              STREAMING ACTIVO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}