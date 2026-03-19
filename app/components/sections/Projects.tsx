"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

const projects = [
  {
    title: "Akbar Brass Products",
    description: "Premium e-commerce platform for a heritage brass manufacturing house.",
    tags: ["Design", "Development", "E-Commerce"],
    image: "/projects/akbar/hero.webp",
    year: "2025",
  },
  {
    title: "TrueBerry",
    description: "Vibrant, scroll-driven website for an organic berry brand.",
    tags: ["Design", "Development", "Motion"],
    image: "/projects/trueberry/hero.jpg",
    year: "2025",
  },
  {
    title: "Phenomenal Spirits",
    description: "Dark, moody digital experience for a premium spirits portfolio.",
    tags: ["Design", "Development", "Animation"],
    image: "/projects/phenomenal/hero.png",
    year: "2024",
  },
  {
    title: "Yunorra",
    description: "Minimal, editorial-style website for a luxury fashion label.",
    tags: ["Design", "Development"],
    image: "/projects/yunorra/hero.jpg",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <section id="work" className="ar-section border-t border-border">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <h2 className="ar-headline font-display text-foreground">
            Selected work
          </h2>
          <p className="text-[1rem] text-muted max-w-sm md:text-right">
            Each project built from scratch with custom design and clean code.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-20">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i % 2 === 1 ? 0.1 : 0}>
            <article className="group">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="text-lg font-display font-semibold text-foreground">{project.title}</h3>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>
                <p className="text-[0.95rem] text-muted leading-relaxed mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="ar-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
