"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Tag = "new" | "limited" | null;
type Item = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  tag: Tag;
  image: string;
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
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://weddingtroop.in/",
      code: "https://github.com/DeluluDevelopers/landingdiversity",
    },
    {
      id: 2,
      title: "Landing Page - SkillShift Landing Page",
      subtitle:
        "A modern landing page for skill development platform featuring interactive animations, responsive design, and seamless user experience for educational content.",
      price: "React, Vite, Tailwind CSS, Framer Motion",
      tag: "limited",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://skill-shift-landing.vercel.app/",
      code: "https://github.com/SafalBhandari12/skillShift_landing",
    },
    {
      id: 3,
      title: "Educational App - English Learning Platform",
      subtitle:
        "An interactive English learning application with personalized lessons, progress tracking, and AI-powered language assessment tools for students.",
      price: "React, Node.js, Express, MongoDB",
      tag: null,
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://english-learning-client.vercel.app/",
      code: "https://github.com/SafalBhandari12/englishLearningServer",
    },
    {
      id: 4,
      title: "Landing Page - LandingDiversity",
      subtitle:
        "A showcase of diverse landing page designs and templates, demonstrating modern web development techniques and creative UI/UX solutions.",
      price: "Next.js, React, TypeScript, Tailwind CSS",
      tag: null,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60",
      liveDemo: "https://landingdiversity.vercel.app/",
      code: "https://github.com/DeluluDevelopers/landingdiversity",
    },
  ];

  // ...existing code...

  return (
    <section id='collections' className='py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-2xl'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900'>
            featured{" "}
            <span className='italic font-normal'>skills & projects</span>
          </h2>
          <p className='mt-3 text-gray-600'>
            Recent highlights in full-stack engineering, AI/data, and
            performance-driven delivery.
          </p>
        </header>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {items.map((it) => (
            <article
              key={it.id}
              className='rounded-[22px] bg-white ring-1 ring-black/5 shadow p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]'
            >
              <h3 className='text-[15px] font-semibold text-gray-900'>
                {it.title}
              </h3>
              <p className='mt-1 text-[12px] text-gray-700 opacity-85'>
                {it.subtitle}
              </p>
              <div className='mt-3 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[13px] font-semibold text-gray-900 ring-1 ring-black/5'>
                {it.price}
              </div>
              <div className='mt-3 flex gap-2'>
                {it.liveDemo && (
                  <a
                    href={it.liveDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-emerald-600 transition'
                  >
                    Live Demo
                  </a>
                )}
                {it.code && (
                  <a
                    href={it.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-gray-800 transition'
                  >
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
