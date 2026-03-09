"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  speed?: number;
  onComplete?: () => void;
  isActive: boolean;
}

export default function TypewriterText({ text, speed = 30, onComplete, isActive }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const played = useRef(false);
  const lastText = useRef(text);

  useEffect(() => {
    if (lastText.current !== text) {
      played.current = false;
      lastText.current = text;
    }

    if (!isActive) {
      setDisplayed("");
      setDone(false);
      idx.current = 0;
      return;
    }

    if (played.current) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    idx.current = 0;
    setDisplayed("");
    setDone(false);

    const iv = setInterval(() => {
      if (idx.current < text.length) {
        idx.current++;
        setDisplayed(text.slice(0, idx.current));
      } else {
        clearInterval(iv);
        setDone(true);
        played.current = true;
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(iv);
  }, [text, speed, isActive, onComplete]);

  // Responsive font size based on text length
  const fs =
    text.length > 350 ? "text-[2.8cqw] leading-[1.6]" :
    text.length > 200 ? "text-[3.4cqw] leading-[1.5]" :
    text.length > 100 ? "text-[4cqw] leading-[1.5]" :
                         "text-[5cqw] leading-[1.4]";

  return (
    <span className={`whitespace-pre-wrap font-mono ${fs}`}>
      {displayed}
      {!done && (
        <span className="inline-block w-[2px] h-[0.85em] bg-white cursor-blink align-middle ml-px" />
      )}
    </span>
  );
}
