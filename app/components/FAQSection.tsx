"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

type Faq = { q: string; a: string };

const DEFAULT_FAQS: Faq[] = [
  { 
    q: "What technologies do you work with?", 
    a: "I specialize in full stack development using React, Next.js, Node.js, Express, and MongoDB. On the AI side, I work with Python, machine learning, and large language models (LLMs). I also integrate marketing analytics and automation tools into projects." 
  },
  { 
    q: "Do you take freelance or contract projects?", 
    a: "Yes — I collaborate with startups, agencies, and individuals on both freelance and contract projects. My focus is on delivering scalable solutions that merge technology with business goals." 
  },
  { 
    q: "Can you help integrate AI into applications?", 
    a: "Absolutely. From building AI-powered chatbots and recommendation engines to setting up analytics dashboards, I bring AI into real-world apps to improve performance and customer experience." 
  },
  { 
    q: "Do you also work on digital marketing?", 
    a: "Yes — beyond coding, I understand marketing funnels, SEO, and campaign strategy. This helps me build products that are not only technically sound but also business-ready." 
  },
  { 
    q: "Do you create content as well?", 
    a: "Yes, I’m also a content creator. I share insights on web development, AI, and digital growth through blogs, tutorials, and social media content." 
  },
  { 
    q: "Are you open to collaborations?", 
    a: "Definitely! I enjoy collaborating with like-minded professionals, businesses, and creators. If you have an idea or project in mind, let’s connect and explore how we can build something impactful together." 
  },
];


export default function FaqSection({
  faqs = DEFAULT_FAQS,
  id = "faq",
}: {
  faqs?: Faq[];
  id?: string;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section
      id={id}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-medium tracking-wide text-gray-500">Faq&apos;s</p>
          <h2
            id="faq-title"
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900"
          >
            Have a question <span className="font-semibold">I&apos;am here to help.</span>
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            I&apos;am here to assist you.
          </p>
        </div>

        {/* Grid (2 columns on md+) */}
        <div
          role="list"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
        >
          {faqs.map((item, i) => {
            const isOpen = !!open[i];
            return (
              <div
                key={i}
                role="listitem"
                className="rounded-[24px] bg-white shadow-sm ring-1 ring-black/5"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 rounded-[24px] px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="text-[18px] sm:text-[20px] text-gray-900">
                    {item.q}
                  </span>
                  <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>

                {/* Collapsible panel */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-0 text-gray-600">
                      <p className="text-sm sm:text-base leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-white shadow-md transition hover:shadow-lg"
          >
            <span className="pr-8 text-[15px] sm:text-base">Contact me</span>
            <span className="absolute right-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 transition group-hover:translate-x-[2px]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
