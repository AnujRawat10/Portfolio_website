"use client";

import ScrollReveal from "../ScrollReveal";

const networks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anujrawat1/" },
  { label: "Instagram", href: "https://www.instagram.com/life.of.anujrawat/" },
  { label: "GitHub", href: "https://github.com/AnujRawat10" },
  { label: "WhatsApp", href: "https://wa.me/918126133363" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="ar-section">
        {/* CTA */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-20 md:mb-28">
            <div className="max-w-2xl">
              <p className="ar-label text-accent mb-5">Contact</p>
              <h2
                className="font-display text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 700 }}
              >
                We&apos;re just an e-mail away.
              </h2>
              <p className="ar-body text-white/45 max-w-md mt-5">
                Have a project in mind? I&apos;d love to hear about it. I&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:anujrawat9639@mail.com"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-accent text-white text-base font-medium rounded-xl hover:bg-accent/85 transition-all duration-300"
              >
                Contact me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4 md:mt-4">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <div>
                <p className="text-sm text-white font-medium">Available for projects</p>
                <p className="text-xs text-white/40">Response within 24h</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 border-t border-white/10 pt-10 pb-4">
          <div>
            <p className="ar-label text-white/25 mb-4">E-mails</p>
            <p className="text-xs text-white/30 mb-1">New project</p>
            <a href="mailto:anujrawat9639@mail.com" className="text-[0.95rem] text-white hover:text-accent transition-colors">
              anujrawat9639@mail.com
            </a>
          </div>

          <div>
            <p className="ar-label text-white/25 mb-4">Networks</p>
            <div className="space-y-2">
              {networks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[0.95rem] text-white/50 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="ar-label text-white/25 mb-4">Services</p>
            <a href="#services" className="block text-[0.95rem] text-white/50 hover:text-white transition-colors mb-2">Design</a>
            <a href="#services" className="block text-[0.95rem] text-white/50 hover:text-white transition-colors">Development</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <p>Based in India. Available worldwide.</p>
          <p>&copy; {new Date().getFullYear()} Anuj Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
