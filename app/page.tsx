"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { slides } from "./components/milo/slidesData";
import SlideCard from "./components/milo/SlideCard";
import Stickers from "./components/milo/Stickers";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastWheel = useRef(0);
  const touchY = useRef(0);
  const wrap = useRef<HTMLDivElement>(null);
  const total = slides.length;

  /* Intro */
  useEffect(() => {
    let raf: number;
    let p = 0;
    const tick = () => {
      p += 1.8 + Math.random() * 1.2;
      if (p >= 100) {
        setProgress(100);
        setTimeout(() => setIntroDone(true), 350);
        setTimeout(() => setReady(true), 700);
        return;
      }
      setProgress(Math.min(p, 100));
      raf = requestAnimationFrame(tick);
    };
    const t = setTimeout(() => { raf = requestAnimationFrame(tick); }, 250);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, []);

  const go = useCallback((i: number) => {
    if (locked || i === current || i < 0 || i >= total) return;
    setLocked(true);
    setCurrent(i);
    setTimeout(() => setLocked(false), 600);
  }, [current, locked, total]);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  /* Wheel */
  useEffect(() => {
    const el = wrap.current;
    const fn = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel.current < 850) return;
      lastWheel.current = now;
      if (e.deltaY > 20) next(); else if (e.deltaY < -20) prev();
    };
    el?.addEventListener("wheel", fn, { passive: false });
    return () => el?.removeEventListener("wheel", fn);
  }, [next, prev]);

  /* Touch */
  useEffect(() => {
    const el = wrap.current;
    const s = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };
    const e2 = (e: TouchEvent) => {
      const d = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(d) > 50) { d > 0 ? next() : prev(); }
    };
    el?.addEventListener("touchstart", s, { passive: true });
    el?.addEventListener("touchend", e2, { passive: true });
    return () => { el?.removeEventListener("touchstart", s); el?.removeEventListener("touchend", e2); };
  }, [next, prev]);

  /* Keys */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [next, prev]);

  /* INTRO */
  if (!introDone) {
    return (
      <div className="fixed inset-0 h-[100dvh] w-full flex items-center justify-center bg-black select-none">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-white font-bold tracking-[0.3em] text-lg uppercase">
            <span style={{ opacity: progress > 5 ? 1 : 0, transition: "opacity 0.4s" }}>ANUJ</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span style={{ opacity: progress > 10 ? 1 : 0, transition: "opacity 0.4s 0.1s" }}>RAWAT</span>
          </div>
          <div className="w-52 h-[1px] bg-white/10 overflow-hidden">
            <div className="h-full bg-white/80" style={{ width: `${progress}%`, transition: "width 0.08s linear" }} />
          </div>
          <span className="text-[10px] tracking-[0.4em] text-white/20 tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    );
  }

  /* MAIN */
  return (
    <div
      ref={wrap}
      className="fixed inset-0 h-[100dvh] w-full bg-black grid-bg select-none overflow-hidden cursor-grab"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s ease" }}
    >
      {/* Stickers — full viewport */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Stickers />
      </div>

      {/* CENTERED CARD */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[500px] px-4">
          {/* Stacked deck effect */}
          <div className="relative">
            {/* Card shadow 3 (deepest) */}
            <div className="absolute inset-x-4 -bottom-3 h-full bg-black/40 border-2 border-white/[0.06] rounded-[2rem]" />
            {/* Card shadow 2 */}
            <div className="absolute inset-x-2.5 -bottom-2 h-full bg-black/60 border-2 border-white/[0.1] rounded-[2rem]" />
            {/* Card shadow 1 */}
            <div className="absolute inset-x-1 -bottom-1 h-full bg-black/80 border-2 border-white/[0.15] rounded-[2rem]" />

            {/* Main card */}
            <div
              className="relative bg-black border-2 border-white rounded-[2rem] [container-type:size] pointer-events-auto"
              style={{
                aspectRatio: "4 / 3",
                boxShadow: "0 20px 80px rgba(0,0,0,0.8)",
                clipPath: "inset(0 round 2rem)",
              }}
            >
              {/* Nav inside card — top right */}
              <div className="absolute top-[6cqw] right-[6cqw] z-30 flex items-center gap-[2cqw] pointer-events-auto">
                <div className="w-[6cqw] h-[6cqw] flex items-center justify-center">
                  <button
                    onClick={prev}
                    disabled={current === 0}
                    className={`w-full h-full rounded-full border flex items-center justify-center transition-all ${
                      current > 0
                        ? "border-white text-white hover:scale-110 active:scale-125"
                        : "border-white/50 text-white/50 cursor-not-allowed"
                    }`}
                    aria-label="Previous slide"
                  >
                    <ChevronUp className="w-[3cqw] h-[3cqw]" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="flex items-center justify-center font-bold tracking-widest text-white font-mono gap-[1cqw] text-[3cqw]">
                  <span>{current + 1}</span>
                  <span className="opacity-50">/</span>
                  <span>{total}</span>
                </div>
                <div className="w-[6cqw] h-[6cqw] flex items-center justify-center">
                  <button
                    onClick={next}
                    disabled={current === total - 1}
                    className={`w-full h-full rounded-full border flex items-center justify-center transition-all ${
                      current < total - 1
                        ? "border-white text-white hover:scale-110 active:scale-125"
                        : "border-white/50 text-white/50 cursor-not-allowed"
                    }`}
                    aria-label="Next slide"
                  >
                    <ChevronDown className="w-[3cqw] h-[3cqw]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Slides */}
              {slides.map((slide, i) => (
                <div
                  key={slide.slug}
                  className="absolute inset-0"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? "translateY(0)" : i < current ? "translateY(-25px)" : "translateY(25px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                    pointerEvents: i === current ? "auto" : "none",
                  }}
                >
                  <SlideCard slide={slide} isActive={i === current} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
