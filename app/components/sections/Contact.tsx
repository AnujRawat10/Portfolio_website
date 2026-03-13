"use client";

import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/AnujRawat10" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anujrawat1/" },
  { label: "Instagram", href: "https://www.instagram.com/life.of.anujrawat/" },
  { label: "Medium", href: "https://medium.com/@anujrawatofficial.new" },
  { label: "Reddit", href: "https://www.reddit.com/user/LifeOfAnujRawat/" },
  { label: "ORCID", href: "https://orcid.org/my-orcid?orcid=0009-0009-6510-4496" },
  { label: "WhatsApp", href: "https://wa.me/918126133363" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            Contact
          </p>
        </ScrollReveal>

        <TextReveal
          text="Let's build something great together"
          className="text-heading text-white max-w-4xl"
        />

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-lg text-white/40 max-w-2xl">
            Have a project in mind? I&apos;d love to hear about it. Drop me an email
            or reach out on any of my socials — I usually respond within 24 hours.
          </p>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={0.4}>
          <a
            href="mailto:anujrawat9639@mail.com"
            className="inline-flex items-center gap-3 mt-10 group"
          >
            <span className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
              anujrawat9639@mail.com
            </span>
            <ArrowUpRight
              size={32}
              className="text-white/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </a>
        </ScrollReveal>

        {/* Social links */}
        <div className="mt-14 flex flex-wrap gap-4">
          {socials.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.5 + i * 0.06}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent font-mono text-sm text-white/40 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider mt-20" />
      </div>
    </section>
  );
}
