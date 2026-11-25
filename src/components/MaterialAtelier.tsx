import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sun } from 'lucide-react';
import { MATERIAL_PALETTES } from '../data/services';
import { CALM_EASE, CalmImage } from './CalmMotion';

export const MaterialAtelier: React.FC = () => {
  const [activeId, setActiveId] = useState(MATERIAL_PALETTES[0].id);
  const active = MATERIAL_PALETTES.find((p) => p.id === activeId) ?? MATERIAL_PALETTES[0];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#D4B373]/20 bg-[#101D16] p-6 sm:p-10 lg:p-14 transition-colors duration-1000">
      {/* Dynamic Ambient Warm Light Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[120px] transition-all duration-1000"
        style={{ background: active.accentGlow }}
      />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Controls & Material Specification */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Color &amp; Lighting Atelier</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F2EA] leading-[1.1]">
              Specialized in Color, Calm Light &amp; Material Dialogue
            </h2>
            <p className="text-sm text-[#F6F2EA]/65 leading-relaxed">
              Select a curated Miseso atmosphere below to explore how Betelhem Engida pairs tones,
              natural textures, and warm Kelvin lighting across residences, hotels, and executive
              headquarters.
            </p>
          </div>

          {/* Palette Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MATERIAL_PALETTES.map((palette) => {
              const isSelected = palette.id === active.id;
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => setActiveId(palette.id)}
                  className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition-all duration-500 ${
                    isSelected
                      ? 'border-[#D4B373] bg-[#182C21] shadow-[0_8px_30px_rgba(0,0,0,0.28)]'
                      : 'border-[#F6F2EA]/10 bg-[#0B1410]/55 hover:border-[#D4B373]/40'
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-medium tracking-wide transition-colors ${
                        isSelected ? 'text-[#D4B373]' : 'text-[#F6F2EA]/85'
                      }`}
                    >
                      {palette.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#F6F2EA]/45">{palette.amharicNote}</p>
                  </div>
                  <div className="flex -space-x-1.5 shrink-0 ml-2">
                    {palette.swatches.slice(0, 3).map((s) => (
                      <span
                        key={s.name}
                        className="h-4 w-4 rounded-full border border-[#F6F2EA]/30"
                        style={{ backgroundColor: s.hex }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Swatch Breakdown */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: CALM_EASE }}
              className="space-y-5 pt-2"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#D4B373]">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4B373]/30 bg-[#D4B373]/10 px-3 py-1">
                  <Sun className="h-3.5 w-3.5" />
                  {active.lightingTemp}
                </span>
                <span className="text-[#F6F2EA]/55 uppercase tracking-[0.18em] text-[10px]">
                  {active.mood}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#F6F2EA]/75">{active.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {active.swatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    className="rounded-xl border border-[#F6F2EA]/10 bg-[#0B1410]/65 p-3"
                  >
                    <div
                      className="mb-2.5 h-10 w-full rounded-lg border border-white/15"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <p className="text-xs font-medium text-[#F6F2EA]">{swatch.name}</p>
                    <p className="mt-0.5 text-[10px] leading-snug text-[#F6F2EA]/50">
                      {swatch.material}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Real Miseso Project Preview */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/4.6] sm:aspect-[4/4.2] w-full overflow-hidden rounded-2xl border border-[#D4B373]/25 bg-[#09120E]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.85, ease: CALM_EASE }}
                className="h-full w-full"
              >
                <CalmImage
                  src={active.previewImage}
                  alt={active.name}
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08100C]/90 via-[#08100C]/40 to-transparent p-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4B373]">
                Real Miseso Execution
              </p>
              <p className="mt-1 font-editorial text-2xl text-[#F6F2EA]">{active.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
