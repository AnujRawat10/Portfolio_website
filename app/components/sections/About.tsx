"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const stats = [
  { number: "10+", label: "Projects Delivered" },
  { number: "4+", label: "Happy Clients" },
  { number: "Full", label: "Stack Developer" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            About
          </p>
        </ScrollReveal>

        <TextReveal
          text="I craft digital experiences that blend aesthetics with performance"
          as="h2"
          className="text-heading text-white max-w-4xl"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-2xl">
              <Image
                src="/stickers/anuj-cutout.png"
                alt="Anuj Rawat"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                I&apos;m Anuj Rawat — a creative developer and designer based in India.
                I specialize in building beautifully crafted, high-performance websites
                and web applications that help brands stand out and convert.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
                From luxury e-commerce to organic brand showcases, I bring ideas to life
                with clean code, thoughtful design, and pixel-perfect execution.
                Every project is built with purpose — optimized for both humans and search engines.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div className="mt-12 flex gap-10 md:gap-14">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={0.5 + i * 0.1}>
                  <div>
                    <p className="text-3xl md:text-4xl font-display font-bold text-accent">
                      {s.number}
                    </p>
                    <p className="mt-1 font-mono text-xs text-white/40 tracking-wider uppercase">
                      {s.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
