"use client";

import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";
import { Code2, Palette, ShoppingBag, Sparkles, Monitor, Cpu } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web applications built with Next.js, React, and Node.js. Fast, scalable, and SEO-optimized.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design with a focus on conversion. Clean interfaces that delight users and drive results.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Custom e-commerce solutions with product catalogs, admin dashboards, and seamless checkout flows.",
  },
  {
    icon: Sparkles,
    title: "Creative Development",
    description: "Scroll-triggered animations, parallax effects, and interactive experiences that set your brand apart.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Pixel-perfect layouts that look stunning on every device — from mobile to ultra-wide displays.",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Optimized for Core Web Vitals. Fast load times, clean code, and efficient architecture.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            Services
          </p>
        </ScrollReveal>
        <TextReveal text="What I do" className="text-heading text-white mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="bg-[#0a0a0a] p-8 md:p-10 group hover:bg-white/[0.02] transition-colors duration-500 h-full">
                <s.icon
                  size={28}
                  className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-display font-semibold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
