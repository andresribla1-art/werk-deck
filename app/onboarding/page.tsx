"use client";

import { motion } from "framer-motion";

export default function OnboardingPage() {
  return (
    <div className="relative min-h-screen bg-oasis-dark flex flex-col items-center justify-center overflow-hidden font-display">
      <div className="absolute top-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,136,0.15)_0%,transparent_70%)] opacity-60" />

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <p className="font-mono text-oasis-emerald text-[10px] tracking-[0.3em] uppercase mb-6 animate-pulse">
          Initialization Sequence // Step 01
        </p>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4">
          Sincroniza tu <br />
          <span className="text-oasis-emerald shadow-oasis-emerald drop-shadow-2xl">Identidad</span>
        </h1>
        
        <p className="text-white/40 max-w-md font-light text-sm md:text-base leading-relaxed mb-12">
          Selecciona tu nodo de acceso. El sistema adaptará la física del entorno según tu objetivo en la red.
        </p>

        <div className="flex gap-4">
          {["Developer", "Company"].map((role) => (
            <button key={role} className="group relative px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-oasis-emerald/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(0,255,136,0)] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-shadow duration-300" />
              <span className="font-mono text-xs tracking-widest text-white/70 group-hover:text-white transition-colors">
                {role}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}