"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { PawPrint } from "lucide-react";

interface HeroSectionProps {
  onBgColorChange: (color: string) => void;
}

const STEP_MS = 3000; // one clock for text + images

export default function HeroSection({ onBgColorChange }: HeroSectionProps) {
  const heroBackgrounds = useMemo(
    () => [
      {
        bgColor: "#e0ce8a",
        image: "/dogs/1.svg",
        alt: "p1",
        heading: "developer",
      },
      {
        bgColor: "#9acbda",
        image: "/dogs/2.svg",
        alt: "p2",
        heading: "innovator",
      },
      {
        bgColor: "#e3b3c3",
        image: "/dogs/pink.svg",
        alt: "p3",
        heading: "creator",
      },
      {
        bgColor: "#98cbbc",
        image: "/dogs/4.svg",
        alt: "p4",
        heading: "strategist",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = heroBackgrounds[index];

  // rotate every STEP_MS
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % heroBackgrounds.length),
      STEP_MS
    );
    return () => clearInterval(t);
  }, [heroBackgrounds.length]);

  // bubble bg color up (include color in deps to satisfy lint)
  useEffect(() => {
    onBgColorChange(current.bgColor);
  }, [current.bgColor, onBgColorChange]);

  // md breakpoint (for wheel size)
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(min-width: 768px)");
    const fn = () => setIsMd(q.matches);
    fn();
    q.addEventListener?.("change", fn);
    return () => q.removeEventListener?.("change", fn);
  }, []);

  // wheel geometry (sized to avoid navbar overlap / right bleed)
  const anglePer = 360 / heroBackgrounds.length;
  const wheelSize = isMd ? 560 : 320; // was 640/360
  const radius = isMd ? 175 : 110; // was 190/120
  const frontSize = isMd ? 340 : 210; // was 360/220
  const sideSize = isMd ? 140 : 100; // was 150/110

  return (
    <section
      className='relative flex-1 flex flex-col justify-center overflow-x-clip transition-colors duration-700 ease-in-out section-clip-overflow pt-4 md:pt-8 lg:pt-12'
      style={{ backgroundColor: current.bgColor }}
      aria-label='Hero'
    >
      {/* soft gradient for legibility, like reference */}
      <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-black/10 via-transparent to-black/5' />

      <div className='relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Responsive grid, no forced min-h, just padding for breathing room */}
        <div className='grid grid-cols-1 items-center gap-2 pb-8 md:grid-cols-2 md:gap-12 md:pb-12'>
          {/* ---- text ---- */}
          <div className='order-2 md:order-1'>
            {/* big white changing word */}
            <h1
              className='lowercase font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm
                         text-[54px] sm:text-[64px] md:text-[88px] lg:text-[96px]'
            >
              <span
                key={index}
                className='block animate-hero-word'
                style={{ animationDuration: `${STEP_MS}ms` }}
              >
                {current.heading}
              </span>
            </h1>

            {/* dark sub-heading below */}
            <h2 className='mt-2 lowercase font-medium text-gray-800 text-[30px] sm:text-[36px] md:text-[44px] leading-tight'>
              building solutions with code + creativity
            </h2>

            <p className='mt-5 max-w-[54ch] text-gray-700/90 text-base sm:text-lg leading-relaxed'>
              “I’m a full stack developer with a passion for AI, data science,
              and marketing. I design applications that merge technology,
              insights, and storytelling.”
            </p>

            <div className='mt-7'>
              <a
                href='#book'
                className='inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-2
                           text-sm font-semibold text-white shadow-[0_2px_0_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all
                           hover:bg-white/10'
                aria-label='Shop now'
              >
                <PawPrint className='h-4 w-4' />
                View My Work
              </a>
            </div>
          </div>

          {/* ---- wheel of circular images ---- */}
          <div className='order-1 md:order-2'>
            <div
              className='relative mx-auto md:ml-auto md:mr-0 mt-8 sm:mt-12 md:mt-16 lg:mt-20'
              style={{ width: wheelSize, height: wheelSize }}
              aria-hidden
            >
              {/* subtle base circle */}
              <div
                className='absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
                style={{
                  width: wheelSize * 0.85,
                  height: wheelSize * 0.85,
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.28), rgba(255,255,255,0))",
                }}
              />

              {/* Mirror the entire wheel horizontally */}
              <div
                className='absolute inset-0'
                style={{ transform: "scaleX(-1)" }}
              >
                {heroBackgrounds.map((bg, i) => {
                  const angle = (i - index) * anglePer; // 0deg = front
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  const norm = ((angle % 360) + 360) % 360;
                  const isFront = norm <= 45 || norm >= 315;

                  const size = isFront ? frontSize : sideSize;
                  const opacity = isFront ? 1 : 0.55;
                  const z = isFront ? 30 : 10;

                  return (
                    <div
                      key={i}
                      className='absolute overflow-hidden rounded-full bg-white/30 shadow-xl backdrop-blur-sm transition-all duration-700 ease-in-out'
                      style={{
                        width: size,
                        height: size,
                        transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px)) translate(-50%, -50%) scaleX(-1)`,
                        opacity,
                        zIndex: z,
                      }}
                    >
                      <Image
                        src={bg.image || "/placeholder.svg"}
                        alt={bg.alt}
                        fill
                        className='object-cover'
                        sizes={isMd ? "560px" : "320px"}
                        priority={isFront}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
