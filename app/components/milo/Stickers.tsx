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
}

const STICKERS: StickerConfig[] = [
  // MAIN PHOTO CUTOUT
  { id: "anuj", src: "/stickers/anuj-cutout.png", x: 32, y: -5, w: 260, h: 320, rot: 0, floatDur: 7, delay: 0.1, type: "cutout", tooltip: "Yo!" },

  // TOP ROW
  { id: "phonebooth", src: "/stickers/phone-booth.svg", x: 16, y: 0, w: 65, rot: -4, floatDur: 5.5, delay: 0.2 },
  { id: "sneakers", src: "/stickers/sneakers.svg", x: 26, y: 5, w: 95, rot: -8, floatDur: 4.8, delay: 0.35 },
  { id: "sun", src: "/stickers/sun.svg", x: 60, y: -1, w: 75, rot: 10, floatDur: 5, delay: 0.25 },
  { id: "bicycle", src: "/stickers/bicycle.svg", x: 72, y: 2, w: 110, rot: 5, floatDur: 5.2, delay: 0.4 },
  { id: "camera", src: "/stickers/camera.svg", x: 40, y: 12, w: 75, rot: -6, floatDur: 4.5, delay: 0.3 },

  // LEFT SIDE
  { id: "thumbsup", src: "/stickers/thumbsup.svg", x: -1, y: 10, w: 80, rot: -5, floatDur: 5.8, delay: 0.15 },
  { id: "polaroid", src: "/stickers/polaroid.svg", x: 10, y: 24, w: 85, rot: 8, floatDur: 5, delay: 0.45 },
  { id: "whatsapp", src: "/stickers/whatsapp.svg", x: 14, y: 42, w: 55, rot: -8, floatDur: 5.3, delay: 0.5 },
  { id: "linkedin", src: "/stickers/linkedin.svg", x: 24, y: 28, w: 55, rot: 5, floatDur: 4.6, delay: 0.2 },
  { id: "iphone", src: "/stickers/iphone.svg", x: 5, y: 55, w: 50, rot: 15, floatDur: 5.5, delay: 0.55 },

  // RIGHT SIDE
  { id: "macbook", src: "/stickers/macbook.svg", x: 70, y: 18, w: 120, rot: 5, floatDur: 5.7, delay: 0.3 },
  { id: "emailme", src: "/stickers/email-me.svg", x: 64, y: 32, w: 100, rot: 7, floatDur: 4.9, delay: 0.5 },
  { id: "flag", src: "/stickers/flag.svg", x: 88, y: 10, w: 55, rot: -3, floatDur: 5.1, delay: 0.35 },
  { id: "callme", src: "/stickers/call-me.svg", x: 76, y: 44, w: 85, rot: -5, floatDur: 5.4, delay: 0.6 },
  { id: "medium", src: "/stickers/medium.svg", x: 90, y: 30, w: 50, rot: 10, floatDur: 4.8, delay: 0.45 },

  // BOTTOM ROW
  { id: "thuglife", src: "/stickers/thuglife.svg", x: 6, y: 72, w: 100, rot: -3, floatDur: 4.7, delay: 0.3 },
  { id: "cap", src: "/stickers/cap.svg", x: 38, y: 66, w: 95, rot: -5, floatDur: 5, delay: 0.4 },
  { id: "headphones", src: "/stickers/headphones.svg", x: 48, y: 76, w: 75, rot: 5, floatDur: 5.6, delay: 0.65 },
  { id: "lego", src: "/stickers/lego.svg", x: 68, y: 68, w: 100, rot: 6, floatDur: 4.3, delay: 0.5 },
  { id: "drill", src: "/stickers/drill.svg", x: 22, y: 82, w: 80, rot: -10, floatDur: 5.2, delay: 0.55 },
  { id: "bottle", src: "/stickers/bottle.svg", x: 58, y: 84, w: 35, rot: 8, floatDur: 5.8, delay: 0.6 },
  { id: "stargold", src: "/stickers/star-gold.svg", x: 78, y: 78, w: 70, rot: 12, floatDur: 4.5, delay: 0.5 },
];

function StickerItem({ s, show }: { s: StickerConfig; show: boolean }) {
  const [wiggle, setWiggle] = useState(false);
  const [tip, setTip] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const hasMoved = useRef(false);
  const isCutout = s.type === "cutout";
  const isPhoto = s.type === "photo";

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
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
      if (s.tooltip) {
        setTip(true);
        setTimeout(() => setTip(false), 2000);
      }
    }
  }, [s.tooltip]);

  return (
    <div
      className={`absolute touch-none pointer-events-auto select-none ${dragging ? "cursor-grabbing z-[200]" : "cursor-grab"}`}
      style={{
        left: `${s.x}%`,
        top: `${s.y}%`,
        width: s.w,
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
            <div className="relative" style={{ width: s.w, height: s.h || s.w * 1.25 }}>
              <Image src={s.src} alt={s.id} fill className="object-cover object-top" sizes={`${s.w}px`} draggable={false} />
            </div>
          </div>
        ) : isPhoto ? (
          <div className="rounded-2xl overflow-hidden border-[3px] border-white/20 shadow-2xl">
            <div className="relative" style={{ width: s.w, height: s.h || s.w * 1.2 }}>
              <Image src={s.src} alt={s.id} fill className="object-cover" sizes={`${s.w}px`} draggable={false} />
            </div>
          </div>
        ) : (
          <div className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <Image src={s.src} alt={s.id} width={s.w} height={s.w} className="w-full h-auto" draggable={false} />
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
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {STICKERS.map((s) => (
        <StickerItem key={s.id} s={s} show={show} />
      ))}
    </>
  );
}
