"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} Anuj Rawat. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20">
            Designed &amp; Built by Anuj Rawat
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-accent transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
