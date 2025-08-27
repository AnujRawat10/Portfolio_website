"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;      // we’ll use “Role, Org” here to avoid inventing personal identities
  rating: number;
  avatarUrl?: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: 1,
        quote:
          "Anuj led a Next.js + Spring Boot revamp that boosted Lighthouse performance by 35%. His focus on SEO and scalability made a real business impact.",
        name: "Project Lead, Delhi Digital Company",
        rating: 5,
      },
      {
        id: 2,
        quote:
          "He rebuilt key React components and design systems that took mobile usability from 65 to 92. Shipping quality UI at speed.",
        name: "Mentor, AiZone",
        rating: 5,
      },
      {
        id: 3,
        quote:
          "Our Spring Boot + MySQL inventory tracker reduced manual maintenance logging by ~40%. Pragmatic engineering with measurable results.",
        name: "Operations Head, Indoplast",
        rating: 5,
      },
      {
        id: 4,
        quote:
          "Built a Node.js email automation pipeline handling 1K+ emails/month with 98% delivery. Clean integration and strong monitoring.",
        name: "Marketing Team, Client Project",
        rating: 5,
      },
      {
        id: 5,
        quote:
          "His Streamlit/NLP analytics dashboard improved insight discovery by ~60% on 10k+ records—useful visualizations, not just charts.",
        name: "Data Stakeholder, Internal Tools",
        rating: 5,
      },
    ],
    [],
  );

  const SECTION_BG = "#e0ce8a";
  const QUOTE_TINT = "#d4b253";

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const centerActive = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const slides = Array.from(track.querySelectorAll<HTMLDivElement>(".t-slide"));
    const slide = slides[active];
    if (!slide) return;

    const x = slide.offsetLeft + slide.offsetWidth / 2 - viewport.clientWidth / 2;
    track.style.transform = `translateX(${-x}px)`;
  }, [active]);

  useEffect(() => {
    centerActive();
    const ro = new ResizeObserver(() => centerActive());
    viewportRef.current && ro.observe(viewportRef.current);
    window.addEventListener("resize", centerActive);
    window.addEventListener("orientationchange", centerActive);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", centerActive);
      window.removeEventListener("orientationchange", centerActive);
    };
  }, [centerActive]);

  const goPrev = useCallback(
    () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length),
    [testimonials.length],
  );
  const goNext = useCallback(
    () => setActive((i) => (i + 1) % testimonials.length),
    [testimonials.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    if (isHover) return;
    const id = setInterval(() => goNext(), 4500);
    return () => clearInterval(id);
  }, [isHover, goNext]);

  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-14 lg:py-16"
      style={{ backgroundColor: SECTION_BG }}
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10 max-w-3xl">
          <h2
            className="
              lowercase font-semibold tracking-tight leading-tight
              text-[clamp(28px,6.2vw,56px)]
              text-gray-900
            "
          >
            kind words from <span style={{ color: "#9acbda" }}>collaborators</span>
          </h2>

          <p className="mt-3 text-[clamp(14px,2.2vw,18px)] text-gray-900/80">
            Results-focused engineering across full stack, AI, and data—measured by performance,
            usability, automation reliability, and insight quality.
          </p>
        </div>

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="relative overflow-hidden pb-16"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform transition-transform duration-500 ease-out"
            style={{ transform: "translateX(0px)" }}
            aria-roledescription="carousel"
            aria-live="polite"
          >
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.id}
                  className={[
                    "t-slide shrink-0",
                    "w-[86vw] sm:w-[62vw] md:w-[48vw] lg:w-[40vw] xl:w-[36vw]",
                    "transition-all duration-500",
                    isActive ? "opacity-100 scale-[1.0]" : "opacity-55 scale-[0.98]",
                  ].join(" ")}
                >
                  <article className="rounded-3xl bg-white/90 p-5 sm:p-6 md:p-7 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
                    {/* Stars */}
                    <div className="mb-3 flex">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="mr-1 h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote
                      className="mb-5 leading-snug"
                      style={{
                        color: QUOTE_TINT,
                        fontSize: "clamp(16px,2.1vw,22px)",
                        fontWeight: 600,
                      }}
                    >
                      “{t.quote}”
                    </blockquote>

                    {/* Author */}
                    <div className="mt-5 flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                        {t.avatarUrl ? (
                          <Image
                            src={t.avatarUrl}
                            alt={t.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                      <div className="text-gray-900">
                        <p className="font-semibold text-[15px]">{t.name}</p>
                        <p className="text-xs text-gray-600">Collaboration feedback</p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Nav arrows */}
          <div className="absolute bottom-4 left-4 z-10 flex gap-3">
            <button
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
