"use client";

interface NavigationDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export default function NavigationDots({ total, current, onDotClick }: NavigationDotsProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`rounded-full transition-all duration-300 ${
            i === current
              ? "w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              : "w-2 h-2 bg-white/30 hover:bg-white/50"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
