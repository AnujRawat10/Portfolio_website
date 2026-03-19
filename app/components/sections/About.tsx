"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function About() {
  return (
    <section id="about" className="ar-section border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Portrait */}
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card max-w-md mx-auto md:mx-0">
            <Image
              src="/stickers/anuj-cutout.png"
              alt="Anuj Rawat"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div>
            <p className="ar-label text-accent mb-6">About</p>
            <h2
              className="font-display font-bold text-foreground mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1.15 }}
            >
              Creativity, strategy, and technology — combined.
            </h2>
            <p className="ar-body text-muted">
              Based in India, available worldwide. I specialize in building beautifully crafted, high-performance websites and web applications that help brands stand out and convert.
            </p>
            <p className="mt-5 ar-body text-muted">
              From heritage brass manufacturers to organic berry brands to luxury fashion labels — every project is built with purpose, clean code, and pixel-perfect execution.
            </p>
            <a
              href="#contact"
              className="ar-btn-dark mt-10 inline-flex"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let&apos;s start your project
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
