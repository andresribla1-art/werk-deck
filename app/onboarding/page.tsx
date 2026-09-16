"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, ArrowRight, Loader2 } from "lucide-react";
import { useSystemLanguage } from "@/hooks/useSystemLanguage";

export default function OnboardingPage() {
  const router = useRouter();
  const { t } = useSystemLanguage();
  const [selectedRole, setSelectedRole] = useState<"developer" | "company" | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSelectRole = (role: "developer" | "company") => {
    setSelectedRole(role);
    setIsConnecting(true);

    // Almacenamos el rol y redirigimos sin bloqueos
    if (typeof window !== "undefined") {
      localStorage.setItem("werkdeck_role", role);
    }

    setTimeout(() => {
      router.push("/dashboard");
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-4 select-none">
      {/* Fondo Neón Cyberpunk / Grid de OASIS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Encabezado Principal */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs tracking-widest font-mono">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          <span>INITIALIZATION SEQUENCE // STEP 01</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {t.onboardingTitle.split(" ")[0]} {t.onboardingTitle.split(" ")[1]}{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {t.onboardingTitle.split(" ")[2] || "Identidad"}
          </span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed text-center">
          {t.onboardingSub}
        </p>
      </div>

      {/* Tarjetas de Selección de Nodo */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* NODO DEVELOPER */}
        <motion.div
          whileHover={{ scale: isConnecting ? 1 : 1.02 }}
          whileTap={{ scale: isConnecting ? 1 : 0.98 }}
          onClick={() => !isConnecting && handleSelectRole("developer")}
          className={`relative group rounded-xl border p-8 cursor-pointer transition-all duration-300 overflow-hidden ${
            selectedRole === "developer"
              ? "border-emerald-500 bg-emerald-950/20 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              : "border-zinc-800 bg-zinc-950/60 hover:border-emerald-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-emerald-400 tracking-wider">NODE // 01</span>
            <div className={`w-2.5 h-2.5 rounded-full ${selectedRole === "developer" ? "bg-emerald-400 animate-ping" : "bg-zinc-700 group-hover:bg-emerald-400"}`} />
          </div>

          <AnimatePresence mode="wait">
            {isConnecting && selectedRole === "developer" ? (
              <motion.div
                key="loading-dev"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-6 flex flex-col items-center justify-center space-y-3"
              >
                <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                <p className="text-xs font-mono text-emerald-400 text-center tracking-wider">
                  {t.connecting}
                </p>
              </motion.div>
            ) : (
              <motion.div key="content-dev" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {t.devTitle}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {t.devDesc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* NODO COMPANY */}
        <motion.div
          whileHover={{ scale: isConnecting ? 1 : 1.02 }}
          whileTap={{ scale: isConnecting ? 1 : 0.98 }}
          onClick={() => !isConnecting && handleSelectRole("company")}
          className={`relative group rounded-xl border p-8 cursor-pointer transition-all duration-300 overflow-hidden ${
            selectedRole === "company"
              ? "border-emerald-500 bg-emerald-950/20 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              : "border-zinc-800 bg-zinc-950/60 hover:border-emerald-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-emerald-400 tracking-wider">NODE // 02</span>
            <div className={`w-2.5 h-2.5 rounded-full ${selectedRole === "company" ? "bg-emerald-400 animate-ping" : "bg-zinc-700 group-hover:bg-emerald-400"}`} />
          </div>

          <AnimatePresence mode="wait">
            {isConnecting && selectedRole === "company" ? (
              <motion.div
                key="loading-company"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-6 flex flex-col items-center justify-center space-y-3"
              >
                <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                <p className="text-xs font-mono text-emerald-400 text-center tracking-wider">
                  {t.connecting}
                </p>
              </motion.div>
            ) : (
              <motion.div key="content-company" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {t.companyTitle}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {t.companyDesc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}