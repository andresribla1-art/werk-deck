"use client";
import { ShieldCheck, Terminal, Award } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function ProfilePage() {
  const { t } = useSystemLanguage();

  return (
    <div className="min-h-screen px-6 pt-8 pb-24 max-w-6xl mx-auto space-y-6">

      {/* Hero identity card */}
      <div
        className="rounded-2xl p-8 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-xl flex-shrink-0"
              style={{
                background: "rgba(0,255,136,0.08)",
                border: "2px solid rgba(0,255,136,0.3)",
                color: "#00FF88",
                boxShadow: "0 0 30px rgba(0,255,136,0.2), inset 0 0 20px rgba(0,255,136,0.05)",
              }}
            >
              JD
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-black text-white" style={{ letterSpacing: "-0.03em" }}>
                  John Doe
                </h1>
                <ShieldCheck className="w-5 h-5" style={{ color: "#00FF88" }} />
              </div>
              <p className="font-mono text-[11px] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                &gt;_ ID: WDK-8894-A
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.6", maxWidth: "460px" }}>
                Ingeniero de Sistemas Distribuidos. Especialista en arquitecturas Rust de baja latencia y mitigación de vulnerabilidades Zero-Day.
              </p>
            </div>
          </div>

          {/* ProofScore — el elemento dominante */}
          <div
            className="flex-shrink-0 text-center px-8 py-5 rounded-2xl"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(0,255,136,0.15)",
              boxShadow: "0 0 40px rgba(0,255,136,0.08)",
            }}
          >
            <p className="font-mono text-[9px] tracking-[0.3em] mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
              PROOFSCORE
            </p>
            <p
              className="font-black leading-none"
              style={{
                fontSize: "4rem",
                letterSpacing: "-0.05em",
                color: "#00FF88",
                textShadow: "0 0 40px rgba(0,255,136,0.6)",
              }}
            >
              890
            </p>
            <div
              className="mt-2 px-3 py-1 rounded-full font-mono text-[9px] font-bold tracking-widest"
              style={{
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.2)",
                color: "#00FF88",
              }}
            >
              TOP 2% GLOBAL
            </div>
          </div>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="rounded-2xl p-6 space-y-5"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <Terminal className="w-4 h-4" style={{ color: "#00FF88" }} />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#00FF88" }}>
              {t("metricsTitle")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <p className="font-mono text-[9px] tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                {t("commitsVerified")}
              </p>
              <p className="text-3xl font-black text-white" style={{ letterSpacing: "-0.04em" }}>342</p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <p className="font-mono text-[9px] tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                {t("deploySuccess")}
              </p>
              <p className="text-3xl font-black" style={{ color: "#00FF88", letterSpacing: "-0.04em" }}>98.4%</p>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 space-y-4"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <Award className="w-4 h-4" style={{ color: "#00FF88" }} />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#00FF88" }}>
              {t("arenaHistory")}
            </span>
          </div>

          <div className="space-y-3">
            {[
              { name: "Zero-Latency Router", reward: "1,500 USDC", color: "#00FF88" },
              { name: "SecOps CTF Challenge", reward: "800 USDC", color: "#F59E0B" },
            ].map(({ name, reward, color }) => (
              <div
                key={name}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <span className="font-mono text-sm font-semibold text-white">{name}</span>
                <span className="font-mono text-sm font-bold" style={{ color }}>{reward}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}