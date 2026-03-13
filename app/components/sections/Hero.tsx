"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Jumbo Name */}
      <div className="text-center px-4">
        <div className="overflow-hidden">
          <motion.h1
            className="text-jumbo font-display font-extrabold uppercase tracking-tight text-white"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Anuj
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-jumbo font-display font-extrabold uppercase tracking-tight text-white"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Rawat
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 font-mono text-sm md:text-base text-white/50 tracking-[0.15em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Creative Developer &amp; Designer
        </motion.p>

        {/* Accent line */}
        <motion.div
          className="mx-auto mt-6 h-px bg-accent"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
