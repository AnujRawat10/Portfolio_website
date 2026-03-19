"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
        style={{
          paddingTop: scrolled ? "0.7rem" : "1.1rem",
          paddingBottom: scrolled ? "0.7rem" : "1.1rem",
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-lg tracking-tight text-foreground"
        >
          Anuj Rawat
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[14px] text-muted hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#contact")} className="ar-btn-outline">
            Get in touch
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-foreground text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="white" strokeWidth="1.5" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="white" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <line x1="0" y1="1" x2="16" y2="1" stroke="white" strokeWidth="1.5" />
              <line x1="4" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-center px-8"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => scrollTo(l.href)}
                className="text-[2.5rem] font-display font-bold text-foreground hover:text-accent transition-colors duration-200 mb-2"
              >
                {l.label}
              </motion.button>
            ))}
            <div className="mt-12 text-sm text-muted">
              <a href="mailto:anujrawat9639@mail.com">anujrawat9639@mail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
