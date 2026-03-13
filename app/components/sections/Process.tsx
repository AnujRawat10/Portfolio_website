"use client";

import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your brand, goals, audience, and competitors through in-depth research and conversation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining the site structure, user flows, and content strategy to maximize engagement and conversion.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting high-fidelity UI designs with attention to typography, spacing, and visual hierarchy.",
  },
  {
    number: "04",
    title: "Development",
    description: "Building with modern frameworks — clean, maintainable code with smooth animations and responsive layouts.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous cross-browser, cross-device testing. Performance audits and accessibility checks.",
  },
  {
    number: "06",
    title: "Launch & Iterate",
    description: "Deployment, monitoring, and continuous refinement based on analytics and user feedback.",
  },
];

export default function Process() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            Process
          </p>
        </ScrollReveal>
        <TextReveal text="How I work" className="text-heading text-white mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="group border-t border-white/5 py-8 md:py-10 px-2 md:px-6 flex gap-6 items-start hover:bg-white/[0.01] transition-colors duration-300">
                <span className="font-mono text-2xl md:text-3xl font-bold text-accent/30 group-hover:text-accent transition-colors duration-300 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
