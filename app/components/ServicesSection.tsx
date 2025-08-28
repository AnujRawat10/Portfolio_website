"use client";

import React from "react";
import { ExternalLink, Tag as TagIcon, Star, Github } from "lucide-react";

type Tag = "new" | "limited" | null;
type Item = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  tag: Tag;
  image?: string; // kept for backwards compatibility but intentionally unused
  liveDemo?: string;
  code?: string;
};

export default function ServicesSection() {
  const items: Item[] = [
    {
      id: 1,
      title: "Web Platform - WeddingTroop",
      subtitle:
        "A comprehensive wedding planning platform that helps couples organize their special day with vendor management, timeline tracking, and budget planning features.",
      price: "Next.js, React, TypeScript, Tailwind CSS",
      tag: "new",
      liveDemo: "https://weddingtroop.in/",
      code: "https://github.com/DeluluDevelopers/landingdiversity",
    },
    {
      id: 2,
      title: "Landing Page - SkillShift",
      subtitle:
        "A modern landing page for a skill-development platform featuring interactive animations, responsive design, and a clean UX for learners.",
      price: "React, Vite, Tailwind CSS, Framer Motion",
      tag: "limited",
      liveDemo: "https://skill-shift-landing.vercel.app/",
      code: "https://github.com/SafalBhandari12/skillShift_landing",
    },
    {
      id: 3,
      title: "English Learning App",
      subtitle:
        "Interactive English learning with personalized lessons, progress tracking and AI-powered assessments to help students improve fast.",
      price: "React, Node.js, Express, MongoDB",
      tag: null,
      liveDemo: "https://english-learning-client.vercel.app/",
      code: "https://github.com/SafalBhandari12/englishLearningServer",
    },
    {
      id: 4,
      title: "LandingDiversity Showcase",
      subtitle:
        "A curated set of landing page templates that demonstrate modern UI patterns and accessibility-first design.",
      price: "Next.js, React, TypeScript, Tailwind CSS",
      tag: null,
      liveDemo: "https://landingdiversity.vercel.app/",
      code: "https://github.com/DeluluDevelopers/landingdiversity",
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
            technologies, AI integration, and performance-driven solutions.
          </p>
        </header>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10'>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-400 hover:shadow-2xl border border-gray-200 p-6 flex flex-col justify-between ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Card header: left accent + title */}
              <div className='flex items-start gap-4'>
                {/* Accent block with initials */}
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
                        className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm ring-1 ring-offset-1'
                        style={{
                          background:
                            item.tag === "new" ? "#d9c785" : "#93c5b6",
                          color: "#fff",
                        }}
                        aria-hidden
                      >
                        <TagIcon size={14} />
                        {item.tag === "new" ? "New" : "Limited"}
                      </span>
                    )}
                  </div>

                  <p className='text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3'>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Meta + tech chips */}
              <div className='mt-6 flex items-center justify-between gap-4'>
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

                <div className='hidden md:flex items-center gap-3'>
                  {item.liveDemo && (
                    <a
                      href={item.liveDemo}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm transition-colors'
                      style={{ background: "#d9c785" }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {item.code && (
                    <a
                      href={item.code}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm font-semibold hover:bg-gray-50 transition-colors'
                      style={{ borderColor: "#c7b2ba" }}
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile actions */}
              <div className='mt-6 md:hidden flex gap-3'>
                {item.liveDemo && (
                  <a
                    href={item.liveDemo}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-semibold shadow-md transition-colors'
                    style={{ background: "#d9c785" }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}

                {item.code && (
                  <a
                    href={item.code}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-800 text-sm font-semibold hover:bg-gray-50 transition-colors'
                    style={{ borderColor: "#c7b2ba" }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Small helper outside default export
function getInitials(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
