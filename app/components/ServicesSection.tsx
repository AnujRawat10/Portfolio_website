"use client";

import React from "react";
import { ExternalLink, Tag, Star, Github } from "lucide-react";

type TagType = "new" | "limited" | null;
type Item = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  tag: TagType;
  image?: string;
  liveDemo?: string;
  code?: string;
};

export default function ServicesSection() {
  const items: Item[] = [
    {
      id: 1,
      title: "E-commerce Platform - The Wouff",
      subtitle:
        "A premium pet accessories e-commerce store built with Shopify Hydrogen, featuring custom themes, optimized checkout flows, and seamless inventory management for a delightful shopping experience.",
      price: "Shopify, Hydrogen, React, Liquid, TypeScript",
      tag: "new",
      liveDemo: "https://www.thewouff.com",
      code: "",
    },
    {
      id: 2,
      title: "Web Platform - WeddingTroop",
      subtitle:
        "A comprehensive wedding planning platform that helps couples organize their special day with vendor management, timeline tracking, and budget planning features.",
      price: "Next.js, React, TypeScript, Tailwind CSS",
      tag: "limited",
      liveDemo: "https://weddingtroop.in/",
      code: "",
    },
    {
      id: 3,
      title: "Landing Page - SkillShift",
      subtitle:
        "A modern landing page for a skill-development platform featuring interactive animations, responsive design, and a clean UX for learners.",
      price: "React, Vite, Tailwind CSS, Framer Motion",
      tag: null,
      liveDemo: "https://skill-shift-landing.vercel.app/",
      code: "",
    },
    {
      id: 4,
      title: "English Learning App",
      subtitle:
        "Interactive English learning with personalized lessons, progress tracking and AI-powered assessments to help students improve fast.",
      price: "React, Node.js, Express, MongoDB",
      tag: null,
      liveDemo: "https://english-learning-client.vercel.app/",
      code: "",
    },
    {
      id: 5,
      title: "LandingDiversity Showcase",
      subtitle:
        "A curated set of landing page templates that demonstrate modern UI patterns and accessibility-first design.",
      price: "Next.js, React, TypeScript, Tailwind CSS",
      tag: null,
      liveDemo: "https://landingdiversity.vercel.app/",
      code: "",
    },
  ];

  const getTechStack = (techString: string) => {
    return techString.split(", ").slice(0, 3);
  };

  return (
    <section
      id='collections'
      className='py-20 lg:py-32 relative overflow-hidden bg-slate-50'
    >
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <header className='max-w-4xl mx-auto text-center mb-16'>
          <div
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6'
            style={{ background: "#f3f4f6", color: "#333" }}
          >
            <Star className='w-4 h-4' style={{ color: "#d9c785" }} />
            Featured Work
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6'>
            Skills & <span style={{ color: "#d9c785" }}>Projects</span>
          </h2>

          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            Showcasing full-stack engineering excellence with modern
            technologies, Shopify, AI integration, and performance-driven solutions.
          </p>
        </header>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
          {items.map((item) => (
            <article
              key={item.id}
              className='group relative bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-400 hover:shadow-2xl border border-gray-200 p-6 flex flex-col justify-between'
            >
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0'>
                  <div
                    className='h-14 w-14 rounded-lg flex items-center justify-center'
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <span
                      className='text-lg font-semibold'
                      style={{ color: "#93c5b6" }}
                    >
                      {getInitials(item.title)}
                    </span>
                  </div>
                </div>

                <div className='min-w-0 flex-1'>
                  <div className='flex items-start justify-between gap-4'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#d9c785] transition-colors duration-200'>
                      {item.title}
                    </h3>

                    {item.tag && (
                      <span
                        className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm ring-1 ring-offset-1 flex-shrink-0'
                        style={{
                          background:
                            item.tag === "new" ? "#d9c785" : "#93c5b6",
                          color: "#fff",
                        }}
                        aria-hidden
                      >
                        <Tag size={14} />
                        {item.tag === "new" ? "New" : "Limited"}
                      </span>
                    )}
                  </div>

                  <p className='text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3'>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className='mt-6 flex flex-col gap-4'>
                <div className='flex flex-wrap gap-2'>
                  {getTechStack(item.price).map((tech, idx) => (
                    <span
                      key={idx}
                      className='inline-flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200'
                    >
                      {tech.trim()}
                    </span>
                  ))}

                  {item.price.split(", ").length > 3 && (
                    <span className='inline-flex items-center px-3 py-1.5 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100'>
                      +{item.price.split(", ").length - 3} more
                    </span>
                  )}
                </div>

                <div className='flex items-center gap-3'>
                  {item.liveDemo && (
                    <a
                      href={item.liveDemo}
                      target='_blank'
                      rel='noreferrer'
                      className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold shadow-sm transition-colors hover:opacity-90'
                      style={{ background: "#d9c785" }}
                    >
                      <ExternalLink size={16} />
                      <span className='hidden sm:inline'>Live Demo</span>
                      <span className='sm:hidden'>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getInitials(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
