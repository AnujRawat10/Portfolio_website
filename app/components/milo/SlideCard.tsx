"use client";

import { Slide } from "./slidesData";
import TypewriterText from "./TypewriterText";
import { ArrowUpRight } from "lucide-react";

interface SlideCardProps {
  slide: Slide;
  isActive: boolean;
}

export default function SlideCard({ slide, isActive }: SlideCardProps) {
  const { content, button_text, button_link } = slide;

  return (
    <div className="absolute inset-[8cqw] flex flex-col">
      {/* Main text */}
      <div className="flex-1 flex items-center min-h-0">
        <TypewriterText text={content.text} isActive={isActive} speed={22} />
      </div>

      {/* Button */}
      {button_text && button_link && (
        <div className="shrink-0 mt-[3cqw]">
          <a
            href={button_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[1cqw] rounded-full bg-white text-black
                       font-mono font-semibold text-[2.5cqw] px-[3.5cqw] py-[1.5cqw]
                       hover:bg-gray-200 active:scale-95 transition-transform
                       pointer-events-auto"
          >
            {button_text}
            <ArrowUpRight className="w-[2cqw] h-[2cqw]" strokeWidth={2} />
          </a>
        </div>
      )}
    </div>
  );
}
