"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const steps = [
  { number: "01", title: "Meeting" },
  { number: "02", title: "Research" },
  { number: "03", title: "Design" },
  { number: "04", title: "Tests & iterations" },
  { number: "05", title: "Web development" },
  { number: "06", title: "SEO" },
  { number: "07", title: "Delivery" },
  { number: "08", title: "Maintenance" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="process" ref={ref} className="overflow-hidden" style={{ background: "#ede8f5" }}>
      {/* Top */}
      <div className="ar-section pb-0">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="font-display text-foreground"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 700, fontStyle: "italic" }}
              >
                Step by step, I deliver your project on time.
              </h2>
              <a
                href="#contact"
                className="ar-btn-dark mt-10 inline-flex"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Tell me about your project
              </a>
            </div>
            <p
              className="ar-label text-muted/70 max-w-[260px] md:text-right leading-relaxed"
              style={{ fontSize: "0.65rem" }}
            >
              In fact, sometimes I skip a few steps. For example, you can commission me to work just on the{" "}
              <a href="#services" className="underline text-foreground">design</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Giant steps */}
      <div className="pt-16 md:pt-24 pb-12 md:pb-16">
        <motion.div style={{ x }} className="flex items-end whitespace-nowrap">
          {steps.map((step) => (
            <div key={step.number} className="flex-shrink-0 px-5 md:px-10 lg:px-14">
              <span className="block font-mono text-foreground/20" style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>
                {step.number}
              </span>
              <span
                className="block font-display font-bold text-foreground"
                style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {step.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
