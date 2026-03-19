"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 md:px-12">
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="ar-display font-display text-foreground">
          Eye-catching designs
        </h1>
        <h1 className="ar-display font-display text-foreground">
          and easy-to-manage
        </h1>
        <h1 className="ar-display font-display text-accent">
          websites.
        </h1>
      </motion.div>

      <motion.p
        className="ar-body text-muted max-w-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Creative developer specialized in UX/UI design and bespoke web development.
        I create tailor-made websites optimized for conversion. Otherwise, what&apos;s the point?
      </motion.p>

      <motion.a
        href="#contact"
        className="ar-btn-dark mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Request a quote
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
