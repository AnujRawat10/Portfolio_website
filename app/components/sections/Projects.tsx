"use client";

import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";
import ParallaxImage from "../ParallaxImage";
import { ArrowUpRight } from "lucide-react";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: string[];
  color: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Akbar Brass Products",
    subtitle: "Luxury E-Commerce Platform",
    description:
      "A premium e-commerce experience for a heritage brass manufacturing house established in 1990. Features an admin dashboard, product catalog with 70+ SKUs, and cinematic scroll animations that bring the artisanship to life.",
    tech: ["Next.js", "MongoDB", "GSAP", "Tailwind CSS", "Node.js"],
    images: ["/projects/akbar/hero.webp", "/projects/akbar/product1.jpg", "/projects/akbar/showroom.webp"],
    color: "#d4a853",
    liveUrl: "#",
  },
  {
    number: "02",
    title: "TrueBerry",
    subtitle: "Organic Brand Showcase",
    description:
      "A vibrant, scroll-driven website for an organic berry brand. Built with Framer Motion for buttery-smooth page transitions, featuring product spotlights, farm-to-table storytelling, and a warm, inviting design language.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    images: ["/projects/trueberry/hero.jpg", "/projects/trueberry/product1.jpg", "/projects/trueberry/product2.jpg"],
    color: "#ED1C24",
  },
  {
    number: "03",
    title: "Phenomenal Spirits",
    subtitle: "Premium Whiskey Showcase",
    description:
      "A dark, moody digital experience for a premium spirits portfolio. Featuring immersive product photography, GSAP-powered scroll animations, dual light/dark themes, and a sophisticated e-commerce flow worthy of the brand.",
    tech: ["Next.js", "GSAP", "Radix UI", "Tailwind CSS", "TypeScript"],
    images: ["/projects/phenomenal/hero.png", "/projects/phenomenal/banner.jpg"],
    color: "#c77d3a",
  },
  {
    number: "04",
    title: "Yunorra",
    subtitle: "Fashion & Luxury Brand",
    description:
      "A minimal, editorial-style website for a luxury fashion label. Clean grid layouts, lookbook-style imagery, and refined typography create a premium digital presence that mirrors the brand's aesthetic.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    images: ["/projects/yunorra/hero.jpg", "/projects/yunorra/lookbook.jpg", "/projects/yunorra/product1.jpg"],
    color: "#e8dcc8",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="py-16 md:py-24">
      {/* Project number + title */}
      <div className="mb-8 md:mb-12">
        <ScrollReveal>
          <span
            className="font-mono text-7xl md:text-9xl font-bold opacity-10"
            style={{ color: project.color }}
          >
            {project.number}
          </span>
        </ScrollReveal>
        <TextReveal text={project.title} className="text-heading text-white -mt-6 md:-mt-10" />
        <ScrollReveal delay={0.2}>
          <p className="font-mono text-sm tracking-wider uppercase mt-2" style={{ color: project.color }}>
            {project.subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* Images + Info */}
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start ${isEven ? "" : "md:direction-rtl"}`}>
        {/* Main image */}
        <div className={`${isEven ? "md:col-span-7" : "md:col-span-7 md:col-start-6"}`}>
          <ScrollReveal delay={0.1} direction={isEven ? "left" : "right"}>
            <ParallaxImage
              src={project.images[0]}
              alt={project.title}
              className="aspect-[16/10] rounded-xl"
            />
          </ScrollReveal>
        </div>

        {/* Info + secondary image */}
        <div className={`${isEven ? "md:col-span-5" : "md:col-span-5 md:col-start-1 md:row-start-1"}`}>
          <ScrollReveal delay={0.3}>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </ScrollReveal>

          {/* Tech stack */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Secondary image */}
          {project.images[1] && (
            <ScrollReveal delay={0.5}>
              <ParallaxImage
                src={project.images[1]}
                alt={`${project.title} detail`}
                className="aspect-[4/3] rounded-xl mt-6"
                speed={0.1}
              />
            </ScrollReveal>
          )}

          {/* CTA */}
          {project.liveUrl && (
            <ScrollReveal delay={0.6}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider uppercase text-white/60 hover:text-accent transition-colors group"
              >
                View Project
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="divider mt-16 md:mt-24" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
            Selected Work
          </p>
        </ScrollReveal>
        <TextReveal text="Projects I've crafted" className="text-heading text-white mb-4" />
        <ScrollReveal delay={0.2}>
          <p className="text-white/40 text-lg max-w-2xl mb-8">
            Each project is a unique blend of strategy, design, and engineering — built to perform and built to impress.
          </p>
        </ScrollReveal>

        {projects.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
