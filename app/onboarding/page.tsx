"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function OnboardingPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"developer" | "company" | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSelectRole = (role: "developer" | "company") => {
    setSelectedRole(role);
    setIsSyncing(true);
    
    // Redirección directa al canal principal de Feed
    setTimeout(() => {
      router.push("/dashboard/feed");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 overflow-hidden selection:bg-[#00FF88] selection:text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-3">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FF88]">
            INITIALIZATION SEQUENCE // STEP 01
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-none">
            Sincroniza tu <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-emerald-400">Identidad</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Selecciona tu nodo de acceso. El sistema adaptará la física del entorno según tu objetivo en la red.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectRole("developer")}
            disabled={isSyncing}
            className={`p-6 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl ${
              selectedRole === "developer"
                ? "border-[#00FF88] bg-emerald-950/20 shadow-[0_0_30px_rgba(0,255,136,0.15)]"
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-[#00FF88] tracking-widest uppercase">NODE // 01</span>
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            </div>
            <h2 className="text-lg font-medium text-white mb-1">Developer</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Demuestra ejecución con código puro, compite en Arenas y fija tu piso salarial protegido.
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectRole("company")}
            disabled={isSyncing}
            className={`p-6 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl ${
              selectedRole === "company"
                ? "border-[#00FF88] bg-emerald-950/20 shadow-[0_0_30px_rgba(0,255,136,0.15)]"
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">NODE // 02</span>
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
            </div>
            <h2 className="text-lg font-medium text-white mb-1">Company</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Lanza desafíos de código, audita ejecución técnica real y puja por talento calificado.
            </p>
          </motion.button>
        </div>

        {isSyncing && (
          <p className="text-[11px] font-mono text-[#00FF88] tracking-widest uppercase animate-pulse pt-2">
            Estableciendo enlace criptográfico e ingresando al Feed...
          </p>
        )}
      </motion.div>
    </div>
  );
}