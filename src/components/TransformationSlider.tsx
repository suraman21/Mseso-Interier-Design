import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { CalmImage } from './CalmMotion';

interface TransformationSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before · Raw Demolition & Site Stage',
  afterLabel = 'After · Miseso Turnkey Luxury Delivery',
}) => {
  const [position, setPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, pct)));
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === 'touch') {
            updateFromClientX(e.clientX);
          }
        }}
        onClick={(e) => updateFromClientX(e.clientX)}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#D4B373]/25 bg-[#09120E] select-none cursor-ew-resize touch-none shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
      >
        {/* After Image (Full Base) */}
        <CalmImage
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <CalmImage
            src={beforeImage}
            alt={beforeLabel}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1410]/20" />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-[#0B1410]/75 backdrop-blur-md border border-[#F6F2EA]/15 px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#F6F2EA]">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-[#0B1410]/75 backdrop-blur-md border border-[#D4B373]/40 px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#D4B373]">
          {afterLabel}
        </span>

        {/* Divider Line & Handle */}
        <div
          style={{ left: `${position}%` }}
          className="pointer-events-none absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center"
        >
          <div className="h-full w-px bg-[#D4B373]/85 shadow-[0_0_16px_rgba(212,179,115,0.8)]" />
          <div className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B373] bg-[#0B1410]/90 text-[#D4B373] shadow-[0_0_28px_rgba(212,179,115,0.45)] backdrop-blur-md">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Accessible Slider Fallback */}
      <div className="flex items-center justify-between gap-4 px-1">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#F6F2EA]/50">
          Drag across image to reveal transformation
        </span>
        <input
          type="range"
          min={4}
          max={96}
          value={Math.round(position)}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Compare before demolition and after luxury finishing"
          className="w-32 sm:w-44 accent-[#D4B373] cursor-pointer"
        />
      </div>
    </div>
  );
};
