"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface StickerConfig {
  id: string;
  src: string;
  x: number;
  y: number;
  w: number;
  rot: number;
  floatDur: number;
  delay: number;
  tooltip?: string;
  type?: "cutout" | "photo" | "svg";
  h?: number;
  href?: string;
  scrollTo?: string;
  // Mobile overrides
  mx?: number;
  my?: number;
  mw?: number;
  mHide?: boolean;
}

const STICKERS: StickerConfig[] = [
  // MAIN PHOTO CUTOUT — repositioned for mobile (above card)
  { id: "anuj", src: "/stickers/anuj-cutout.png", x: 32, y: -5, w: 260, h: 320, rot: 0, floatDur: 7, delay: 0.1, type: "cutout", tooltip: "Yo! That's me!", scrollTo: "contact",
    mx: 25, my: -2, mw: 150 },

  // TOP ROW
  { id: "phonebooth", src: "/stickers/phone-booth.svg", x: 16, y: 0, w: 65, rot: -4, floatDur: 5.5, delay: 0.2, tooltip: "Ring ring!", scrollTo: "contact",
    mx: -2, my: 1, mw: 40 },
  { id: "sneakers", src: "/stickers/sneakers.svg", x: 26, y: 5, w: 95, rot: -8, floatDur: 4.8, delay: 0.35, tooltip: "Let's walk through my work", scrollTo: "collections",
    mx: 10, my: 6, mw: 55 },
  { id: "sun", src: "/stickers/sun.svg", x: 60, y: -1, w: 75, rot: 10, floatDur: 5, delay: 0.25, tooltip: "Bright ideas ahead!",
    mx: 65, my: -1, mw: 45 },
  { id: "bicycle", src: "/stickers/bicycle.svg", x: 72, y: 2, w: 110, rot: 5, floatDur: 5.2, delay: 0.4, tooltip: "Always moving forward",
    mx: 75, my: 4, mw: 60 },
  { id: "camera", src: "/stickers/camera.svg", x: 40, y: 12, w: 75, rot: -6, floatDur: 4.5, delay: 0.3, tooltip: "Capturing moments", href: "https://www.instagram.com/life.of.anujrawat/",
    mx: 55, my: 10, mw: 40 },

  // LEFT SIDE
  { id: "thumbsup", src: "/stickers/thumbsup.svg", x: -1, y: 10, w: 80, rot: -5, floatDur: 5.8, delay: 0.15, tooltip: "You're awesome!",
    mx: -4, my: 12, mw: 45 },
  { id: "polaroid", src: "/stickers/polaroid.svg", x: 10, y: 24, w: 85, rot: 8, floatDur: 5, delay: 0.45, tooltip: "My memories", href: "https://www.instagram.com/life.of.anujrawat/",
    mx: -3, my: 24, mw: 50 },
  { id: "whatsapp", src: "/stickers/whatsapp.svg", x: 14, y: 42, w: 55, rot: -8, floatDur: 5.3, delay: 0.5, href: "https://wa.me/918126133363", tooltip: "WhatsApp",
    mx: -2, my: 42, mw: 35 },
  { id: "linkedin", src: "/stickers/linkedin.svg", x: 24, y: 28, w: 55, rot: 5, floatDur: 4.6, delay: 0.2, href: "https://www.linkedin.com/in/anujrawat1/", tooltip: "LinkedIn",
    mx: 8, my: 34, mw: 35 },
  { id: "iphone", src: "/stickers/iphone.svg", x: 5, y: 55, w: 50, rot: 15, floatDur: 5.5, delay: 0.55, tooltip: "Tech lover", scrollTo: "tech-stack",
    mx: -3, my: 54, mw: 30 },

  // RIGHT SIDE
  { id: "macbook", src: "/stickers/macbook.svg", x: 70, y: 18, w: 120, rot: 5, floatDur: 5.7, delay: 0.3, tooltip: "My workspace", scrollTo: "tech-stack",
    mx: 72, my: 18, mw: 70 },
  { id: "emailme", src: "/stickers/email-me.svg", x: 64, y: 32, w: 55, rot: 7, floatDur: 4.9, delay: 0.5, href: "mailto:anujrawat9639@mail.com", tooltip: "Email Me",
    mx: 78, my: 32, mw: 35 },
  { id: "flag", src: "/stickers/flag.svg", x: 88, y: 10, w: 55, rot: -3, floatDur: 5.1, delay: 0.35, tooltip: "Jai Hind! \u{1F1EE}\u{1F1F3}",
    mx: 88, my: 10, mw: 35 },
  { id: "callme", src: "/stickers/call-me.svg", x: 76, y: 44, w: 55, rot: -5, floatDur: 5.4, delay: 0.6, href: "https://wa.me/918126133363", tooltip: "Call Me",
    mx: 82, my: 44, mw: 35 },
  { id: "medium", src: "/stickers/medium.svg", x: 90, y: 30, w: 50, rot: 10, floatDur: 4.8, delay: 0.45, href: "https://medium.com/@anujrawatofficial.new", tooltip: "Medium",
    mx: 88, my: 26, mw: 32 },

  // SOCIAL MEDIA ROW
  { id: "github", src: "/stickers/github.svg", x: 2, y: 62, w: 50, rot: -6, floatDur: 5.1, delay: 0.4, href: "https://github.com/AnujRawat10", tooltip: "GitHub",
    mx: -2, my: 64, mw: 32 },
  { id: "instagram", src: "/stickers/instagram.svg", x: 82, y: 56, w: 50, rot: 8, floatDur: 4.7, delay: 0.35, href: "https://www.instagram.com/life.of.anujrawat/", tooltip: "Instagram",
    mx: 84, my: 56, mw: 32 },
  { id: "reddit", src: "/stickers/reddit.svg", x: 92, y: 68, w: 48, rot: -5, floatDur: 5.4, delay: 0.55, href: "https://www.reddit.com/user/LifeOfAnujRawat/", tooltip: "Reddit",
    mx: 86, my: 68, mw: 30 },
  { id: "orcid", src: "/stickers/orcid.svg", x: 82, y: 80, w: 45, rot: 7, floatDur: 5, delay: 0.6, href: "https://orcid.org/my-orcid?orcid=0009-0009-6510-4496", tooltip: "ORCID",
    mx: 84, my: 80, mw: 28 },
  { id: "gmail", src: "/stickers/gmail.svg", x: 14, y: 62, w: 55, rot: 6, floatDur: 4.9, delay: 0.45, href: "mailto:anujrawat9639@mail.com", tooltip: "Gmail",
    mx: 5, my: 62, mw: 35 },

  // BOTTOM ROW
  { id: "thuglife", src: "/stickers/thuglife.svg", x: 6, y: 72, w: 100, rot: -3, floatDur: 4.7, delay: 0.3, tooltip: "Deal with it \u{1F60E}",
    mx: -2, my: 74, mw: 55 },
  { id: "cap", src: "/stickers/cap.svg", x: 38, y: 66, w: 95, rot: -5, floatDur: 5, delay: 0.4, tooltip: "Always learning", scrollTo: "blogs",
    mx: 22, my: 82, mw: 55 },
  { id: "headphones", src: "/stickers/headphones.svg", x: 48, y: 76, w: 75, rot: 5, floatDur: 5.6, delay: 0.65, tooltip: "Coding with beats \u{1F3B5}",
    mx: 40, my: 86, mw: 45 },
  { id: "lego", src: "/stickers/lego.svg", x: 68, y: 68, w: 100, rot: 6, floatDur: 4.3, delay: 0.5, tooltip: "Building block by block", scrollTo: "collections",
    mx: 62, my: 78, mw: 55 },
  { id: "drill", src: "/stickers/drill.svg", x: 22, y: 82, w: 80, rot: -10, floatDur: 5.2, delay: 0.55, tooltip: "Let's build something!", scrollTo: "tech-stack",
    mx: 8, my: 86, mw: 45 },
  { id: "bottle", src: "/stickers/bottle.svg", x: 58, y: 84, w: 35, rot: 8, floatDur: 5.8, delay: 0.6, tooltip: "Stay hydrated!",
    mx: 50, my: 90, mw: 22 },
  { id: "stargold", src: "/stickers/star-gold.svg", x: 78, y: 78, w: 70, rot: 12, floatDur: 4.5, delay: 0.5, tooltip: "\u{2B50} You found me!", scrollTo: "testimonials",
    mx: 78, my: 86, mw: 40 },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function StickerItem({ s, show, isMobile }: { s: StickerConfig; show: boolean; isMobile: boolean }) {
  const [wiggle, setWiggle] = useState(false);
  const [tip, setTip] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const hasMoved = useRef(false);
  const isCutout = s.type === "cutout";
  const isPhoto = s.type === "photo";
  const hasAction = !!(s.href || s.scrollTo);

  const sx = isMobile && s.mx !== undefined ? s.mx : s.x;
  const sy = isMobile && s.my !== undefined ? s.my : s.y;
  const sw = isMobile && s.mw !== undefined ? s.mw : s.w;
  const sh = isCutout ? (isMobile ? (s.mw || s.w) * 1.25 : (s.h || s.w * 1.25)) : undefined;

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    hasMoved.current = false;
    setDragging(true);
  }, [pos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true;
    setPos({ x: dragStart.current.px + dx, y: dragStart.current.py + dy });
  }, [dragging]);

  const onPointerUp = useCallback(() => {
    setDragging(false);
    if (!hasMoved.current) {
      if (s.href) {
        window.open(s.href, "_blank", "noopener,noreferrer");
      } else if (s.scrollTo) {
        const el = document.getElementById(s.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
      if (s.tooltip) {
        setTip(true);
        setTimeout(() => setTip(false), 2500);
      }
    }
  }, [s.tooltip, s.href, s.scrollTo]);

  if (isMobile && s.mHide) return null;

  return (
    <div
      className={`absolute touch-none pointer-events-auto select-none ${dragging ? "cursor-grabbing z-[200]" : hasAction ? "cursor-pointer" : "cursor-grab"}`}
      style={{
        left: `${sx}%`,
        top: `${sy}%`,
        width: sw,
        zIndex: dragging ? 200 : isCutout ? 15 : 10,
        transform: show
          ? `translate(${pos.x}px, ${pos.y}px) rotate(${s.rot}deg) scale(${dragging ? 1.05 : 1})`
          : `rotate(${s.rot - 15}deg) scale(0)`,
        opacity: show ? 1 : 0,
        transition: dragging
          ? "none"
          : `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${s.delay}s, opacity 0.4s ease ${s.delay}s`,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className={wiggle ? "sticker-wiggle" : dragging ? "" : "sticker-float"}
        style={{ "--dur": `${s.floatDur}s`, "--delay": `${s.delay}s` } as React.CSSProperties}
      >
        {isCutout ? (
          <div className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            <div className="relative" style={{ width: sw, height: sh }}>
              <Image src={s.src} alt={s.id} fill className="object-cover object-top" sizes={`${sw}px`} draggable={false} />
            </div>
          </div>
        ) : isPhoto ? (
          <div className="rounded-2xl overflow-hidden border-[3px] border-white/20 shadow-2xl">
            <div className="relative" style={{ width: sw, height: sh || sw * 1.2 }}>
              <Image src={s.src} alt={s.id} fill className="object-cover" sizes={`${sw}px`} draggable={false} />
            </div>
          </div>
        ) : (
          <div className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <Image src={s.src} alt={s.id} width={sw} height={sw} className="w-full h-auto" draggable={false} />
          </div>
        )}
      </div>

      {tip && s.tooltip && (
        <div
          className="absolute -top-10 left-1/2 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap z-50"
          style={{ animation: "bubblePop 0.3s ease-out forwards" }}
        >
          {s.tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white" />
        </div>
      )}
    </div>
  );
}

export default function Stickers() {
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {STICKERS.map((s) => (
        <StickerItem key={s.id} s={s} show={show} isMobile={isMobile} />
      ))}
    </>
  );
}
