"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    quote: "Anuj delivered an incredible e-commerce platform that truly captures the essence of our brand. The attention to detail was outstanding.",
    name: "Akbar Brass Products",
    role: "Premium Brass Manufacturing",
  },
  {
    quote: "Working with Anuj was seamless. He understood our vision and brought it to life with beautiful design and flawless development.",
    name: "TrueBerry",
    role: "Organic Berry Brand",
  },
  {
    quote: "The website is exactly what a premium brand needs — sophisticated, moody, and beautifully crafted. Highly recommend.",
    name: "Phenomenal Spirits",
    role: "Premium Spirits Portfolio",
  },
  {
    quote: "Anuj combines creative design with technical precision. The site feels like a luxury experience — minimal yet powerful.",
    name: "Yunorra",
    role: "Fashion & Luxury Brand",
  },
];

const all = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section ref={ref} className="border-t border-border overflow-hidden py-20 md:py-28">
      {/* Header */}
      <div className="ar-section py-0 mb-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="ar-headline font-display text-foreground">
              What clients say
            </h2>
            <p className="text-[1rem] text-muted max-w-sm md:text-right">
              And based on what they say, I&apos;m nailing it.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cards */}
      <motion.div style={{ x }} className="flex gap-5">
        {all.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] md:w-[420px] rounded-2xl p-8 md:p-10 flex flex-col justify-between bg-white border border-border"
          >
            <p className="text-[1rem] md:text-[1.05rem] text-foreground/65 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 pt-5 border-t border-border flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center text-white font-display font-bold text-xs">
                {t.name[0]}
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
