"use client";

import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const networks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anujrawat1/" },
  { label: "Instagram", href: "https://www.instagram.com/life.of.anujrawat/" },
  { label: "GitHub", href: "https://github.com/AnujRawat10" },
  { label: "Medium", href: "https://medium.com/@anujrawatofficial.new" },
  { label: "WhatsApp", href: "https://wa.me/918126133363" },
];

export default function Contact() {
  return (
    <section id="contact" className="ar-section bg-foreground text-white">
        {/* Centered CTA */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal>
            <p className="ar-label text-accent mb-4">Contact</p>
          </ScrollReveal>

          <TextReveal
            text="We're just an e-mail away"
            as="h2"
            className="ar-headline font-display text-white"
          />

          <ScrollReveal delay={0.2}>
            <p className="ar-body text-white/50 max-w-md mx-auto mt-4">
              Have a project in mind? I&apos;d love to hear about it. I&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="mailto:anujrawat9639@mail.com"
              className="ar-btn mt-8 inline-flex"
            >
              Contact me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </ScrollReveal>
        </div>

        {/* Bottom info — 50/50 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <div>
            <ScrollReveal>
              <p className="ar-label text-white/30 mb-5">E-mail</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a
                href="mailto:anujrawat9639@mail.com"
                className="ar-body text-white hover:text-accent transition-colors"
              >
                anujrawat9639@mail.com
              </a>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal>
              <p className="ar-label text-white/30 mb-5">Networks</p>
            </ScrollReveal>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {networks.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.1 + i * 0.04}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[1rem] text-white/70 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
