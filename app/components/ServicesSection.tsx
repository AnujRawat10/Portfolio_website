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
};

export default function ServicesSection() {
  const items: Item[] = [
    {
      id: 1,
      title: "Next.js + Spring Boot Revamp",
      subtitle: "Performance +35%, SEO-first architecture",
      price: "Impact: +35% Lighthouse",
      tag: "new",
      image: "https://images.unsplash.com/photo-1581093588401-5c2d4c5d1180?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Mobile UX Overhaul",
      subtitle: "Component system, mobile usability 65 → 92",
      price: "Impact: 65 → 92 Mobile UX",
      tag: "limited",
      image: "https://images.pexels.com/photos/3861956/pexels-photo-3861956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      title: "Inventory Tracker (Spring Boot + MySQL)",
      subtitle: "-40% maintenance via tooling",
      price: "Impact: −40% Maintenance",
      tag: null,
      image: "https://images.unsplash.com/photo-1587613759088-4f0c3772f487?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Email Automation (Node.js)",
      subtitle: "1K+ emails/mo, 98% delivery",
      price: "Impact: 98% Delivery",
      tag: null,
      image: "https://images.pexels.com/photos/3914520/pexels-photo-3914520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      title: "Analytics Dashboard (Streamlit + NLP)",
      subtitle: "+60% insight speed, 10k+ rows",
      price: "Impact: +60% Insights",
      tag: null,
      image: "https://images.unsplash.com/photo-1559028012-cd711def4a23?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let grabbing = false, startX = 0, startLeft = 0;
    const down = (e: PointerEvent) => {
      grabbing = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => grabbing && (el.scrollLeft = startLeft - (e.clientX - startX));
    const up = (e: PointerEvent) => {
      grabbing = false;
      try { el.releasePointerCapture(e.pointerId); } catch {}
      el.style.cursor = "";
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const scrollByAmount = (dir: "prev" | "next") => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? el.clientWidth * 0.85 : -el.clientWidth * 0.85, behavior: "smooth" });
  };

  const EDGE = 48;

  return (
    <section id="collections" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            featured <span className="italic font-normal">skills & projects</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Recent highlights in full-stack engineering, AI/data, and performance-driven delivery.
          </p>
        </header>

        <div className="relative mt-8 sm:mt-10">
          <div className="absolute -top-12 right-0 z-20 flex gap-2">
            <button onClick={() => scrollByAmount("prev")} className="...">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollByAmount("next")} className="...">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={viewportRef}
            className="no-scrollbar overflow-x-auto snap-x scroll-smooth pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 cursor-grab active:cursor-grabbing"
            style={{
              WebkitMaskImage: `linear-gradient(to right, transparent 0, black ${EDGE}px, black calc(100% - ${EDGE}px), transparent 100%)`,
              maskImage: `linear-gradient(to right, transparent 0, black ${EDGE}px, black calc(100% - ${EDGE}px), transparent 100%)`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              scrollPaddingInline: "24px",
              contain: "layout paint",
            } as React.CSSProperties}
            aria-roledescription="carousel"
          >
            <div className="flex gap-5 sm:gap-6">
              {items.map((it, idx) => (
                <article key={it.id} className="snap-start shrink-0 w-[84vw] sm:w-[58vw] md:w-[48vw] lg:w-[34vw] xl:w-[30vw] relative overflow-hidden rounded-[22px] bg-white ring-1 ring-black/5 shadow transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <div className="relative h-[420px] w-full sm:h-[440px]">
                    <Image src={it.image} alt={it.title} fill priority={idx === 0} className="object-cover select-none" sizes="30vw" />
                    {it.tag && <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white shadow ${it.tag === "new" ? "bg-emerald-500" : "bg-amber-500"}`}>{it.tag === "new" ? "New" : "Limited"}</span>}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <h3 className="text-[15px] font-semibold">{it.title}</h3>
                      <p className="mt-0.5 text-[12px] opacity-85">{it.subtitle}</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-white/92 px-3 py-1 text-[13px] font-semibold text-gray-900 ring-1 ring-black/5">
                        {it.price}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
