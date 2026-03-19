"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const designServices = [
  "Art direction",
  "UX/UI Design",
  "Motion Design",
  "Design System",
  "Content strategy",
  "Usability testing",
];

const devServices = [
  "Front-end/back-end development",
  "Custom Next.js website",
  "Custom Shopify E-Commerce",
  "Creative web development",
  "Scroll animations & interactions",
  "SEO",
];

const marqueeItems = ["No logo", "No print", "No social media", "No branding"];
const allMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function Services() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="services" className="border-t border-border">
      <div className="ar-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {/* Design */}
          <ScrollReveal>
            <div>
              <h2
                className="font-display font-bold text-foreground"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Design
              </h2>
              <div className="border-t border-foreground/15 mt-4">
                {designServices.map((s) => (
                  <div key={s} className="py-4 md:py-5 border-b border-foreground/10">
                    <span className="text-[1.05rem] md:text-[1.15rem] text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Development */}
          <ScrollReveal delay={0.15}>
            <div>
              <h2
                className="font-display font-bold text-foreground"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Development
              </h2>
              <div className="border-t border-foreground/15 mt-4">
                {devServices.map((s) => (
                  <div key={s} className="py-4 md:py-5 border-b border-foreground/10">
                    <span className="text-[1.05rem] md:text-[1.15rem] text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="overflow-hidden bg-accent/10 py-10 md:py-14">
        <motion.div style={{ x }} className="flex items-center gap-8 whitespace-nowrap">
          {allMarquee.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="w-3 h-3 rounded-sm bg-accent/50 flex-shrink-0" />
              <span
                className="font-display font-bold text-foreground select-none"
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {item}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
