"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

interface ScrollIndicatorProps {
  canGoUp: boolean;
  canGoDown: boolean;
  onUp: () => void;
  onDown: () => void;
}

export default function ScrollIndicator({
  canGoUp,
  canGoDown,
  onUp,
  onDown,
}: ScrollIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onUp}
        disabled={!canGoUp}
        className={`p-2 rounded-full transition-all duration-300 ${
          canGoUp
            ? "text-white/60 hover:text-white hover:bg-white/10"
            : "text-white/10 cursor-not-allowed"
        }`}
        aria-label="Previous slide"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={onDown}
        disabled={!canGoDown}
        className={`p-2 rounded-full transition-all duration-300 ${
          canGoDown
            ? "text-white/60 hover:text-white hover:bg-white/10"
            : "text-white/10 cursor-not-allowed"
        }`}
        style={canGoDown ? { animation: "scrollBounce 2s ease-in-out infinite" } : undefined}
        aria-label="Next slide"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}
