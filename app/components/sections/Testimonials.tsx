"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const testimonials = [
  {
    quote: "Anuj delivered an incredible e-commerce platform that truly captures the essence of our brand. The attention to detail in every animation and interaction was outstanding.",
    author: "Akbar Brass Products",
    role: "Premium Brass Manufacturing",
  },
  {
    quote: "Working with Anuj was a seamless experience. He understood our vision for TrueBerry and brought it to life with beautiful design and flawless development.",
    author: "TrueBerry",
    role: "Organic Berry Brand",
  },
  {
    quote: "The website Anuj built for Phenomenal Spirits is exactly what a premium brand needs — sophisticated, moody, and beautifully crafted. Every scroll tells a story.",
    author: "Phenomenal Spirits",
    role: "Premium Spirits Portfolio",
  },
  {
    quote: "Anuj has a rare ability to combine creative design with technical precision. The Yunorra site feels like a luxury experience — minimal yet powerful.",
    author: "Yunorra",
    role: "Fashion & Luxury Brand",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            Testimonials
          </p>
        </ScrollReveal>
        <TextReveal text="Kind words" className="text-heading text-white mb-16" />

        <div className="max-w-4xl mx-auto text-center min-h-[280px] flex flex-col items-center justify-center">
          {/* Large quote mark */}
          <ScrollReveal>
            <span className="text-8xl md:text-9xl font-display font-bold text-accent/10 leading-none select-none">
              &ldquo;
            </span>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="-mt-12"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed font-display font-medium">
                {testimonials[current].quote}
              </p>
              <div className="mt-8">
                <p className="font-display font-semibold text-white text-base">
                  {testimonials[current].author}
                </p>
                <p className="font-mono text-xs text-white/40 tracking-wider uppercase mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
