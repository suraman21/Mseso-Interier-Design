import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Users } from 'lucide-react';
import { BRAND } from '../data/brand';
import {
  CALM_EASE,
  CalmImage,
  CalmReveal,
  HairlineRule,
} from '../components/CalmMotion';
import { VideoModal } from '../components/VideoModal';

export const Story: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA]">
      {/* =====================================================================
          HERO — EDITORIAL PORTRAIT OF BETELHEM ENGIDA
      ====================================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-[560px] w-[560px] rounded-full bg-[#D4B373]/10 blur-[140px]"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: CALM_EASE }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                The Owner Story · {BRAND.amharicFullName}
              </p>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.2rem] font-light leading-[1.05]">
                {BRAND.founder.name}:{' '}
                <span className="italic text-[#D4B373]">Building Ethiopia’s Pillar</span> of
                Turnkey Luxury.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#F6F2EA]/75 max-w-2xl font-light">
                Known across Ethiopia’s architecture and design community as{' '}
                <strong className="font-normal text-[#F6F2EA]">
                  {BRAND.founder.publicHandle}
                </strong>
                , founder and CEO{' '}
                <strong className="font-normal text-[#D4B373]">{BRAND.founder.name}</strong>{' '}
                transformed an authentic mastery of color, light, and spatial calm into a verified
                100+ person interior design and construction institution.
              </p>

              <blockquote className="border-l-2 border-[#D4B373] pl-5 py-1 font-editorial italic text-2xl sm:text-3xl text-[#F6F2EA]/90">
                “{BRAND.founder.shortQuote}”
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: CALM_EASE }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#D4B373]/30 bg-[#101D16] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <CalmImage
                  src={BRAND.founder.portraits.editorialCampaign}
                  alt="Betelhem Engida, Founder and CEO of Miseso Interior Design"
                  priority
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08100C] via-[#08100C]/65 to-transparent p-6">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#D4B373]">
                    {BRAND.founder.title}
                  </p>
                  <p className="mt-1 font-editorial text-2xl text-[#F6F2EA]">
                    {BRAND.founder.name} ({BRAND.founder.nickname})
                  </p>
                  <p className="text-xs text-[#F6F2EA]/60">
                    {BRAND.fullName} · Addis Ababa
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          THE ETYMOLOGY OF ምሰሶ & FOUNDER'S LETTER (WARM IVORY EDITORIAL SECTION)
      ====================================================================== */}
      <section className="bg-[#F5F0E6] text-[#111C15] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <CalmReveal className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-[#0B1410] p-10 text-center text-[#F6F2EA] border border-[#D4B373]/30 shadow-2xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4B373]">
                  Amharic Architectural Heritage
                </p>
                <p className="mt-5 font-[var(--font-ethiopic)] text-7xl sm:text-8xl text-[#D4B373] leading-none">
                  {BRAND.amharicName}
                </p>
                <p className="mt-4 font-editorial text-2xl tracking-[0.22em] uppercase">
                  MI · SE · SO
                </p>
                <div className="mx-auto my-6 h-px w-24 bg-[#D4B373]/40" />
                <p className="text-sm leading-relaxed text-[#F6F2EA]/75">{BRAND.meaning}</p>
              </div>
            </CalmReveal>

            <CalmReveal delay={0.12} className="lg:col-span-7 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8E6F36] font-medium">
                Founder’s Letter &amp; Ethos
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#0E1913] leading-[1.08]">
                More Than Decoration — Structural Accountability From First Sketch to Final Curtain.
              </h2>

              <div className="space-y-4">
                {BRAND.founder.ceoLetter.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base leading-relaxed text-[#2C3A31]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveVideo({
                      id: 'lCu5wH6gOVM',
                      title: 'Inside Miseso 4-Bedroom Luxury Finishing & Site Supervision',
                    })
                  }
                  className="inline-flex items-center gap-3 rounded-full bg-[#0B1410] px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-[#F6F2EA] hover:bg-[#193024] transition-colors"
                >
                  <Play className="h-3.5 w-3.5 fill-current text-[#D4B373]" />
                  <span>Watch Betelhem’s Walkthrough Film</span>
                </button>
              </div>
            </CalmReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          REAL BEHIND-THE-SCENES PHOTO ESSAY
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0B1410]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-14">
          <CalmReveal className="max-w-2xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              In the Field &amp; Across the Industry
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA]">
              Presence on Every Site. Voice in Ethiopian Design.
            </h2>
          </CalmReveal>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            <CalmReveal className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#D4B373]/20 aspect-[4/4.3]">
                <CalmImage
                  src={BRAND.founder.portraits.onSiteDemolition}
                  alt="Betelhem Engida walking an active demolition site"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">
                01 · Hands-On Site Leadership
              </p>
              <h3 className="font-editorial text-2xl text-[#F6F2EA]">
                From Raw Blockwork &amp; Demolition
              </h3>
              <p className="text-xs leading-relaxed text-[#F6F2EA]/65">
                Betelhem personally walks active demolition and renovation floors with site
                engineers and foremen to verify spatial flow, curved corridor walls, and MEP
                alignment before finishing begins.
              </p>
            </CalmReveal>

            <CalmReveal delay={0.1} className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#D4B373]/20 aspect-[4/4.3]">
                <CalmImage
                  src={BRAND.founder.portraits.jotunEvent}
                  alt="Betelhem Engida representing Miseso at Jotun Soulful Spaces Ethiopia"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">
                02 · Color &amp; Paint Mastery
              </p>
              <h3 className="font-editorial text-2xl text-[#F6F2EA]">
                Jotun “Soulful Spaces” Ethiopia
              </h3>
              <p className="text-xs leading-relaxed text-[#F6F2EA]/65">
                Participating alongside international paint and finishing leaders at Jotun
                Ethiopia’s Soulful Spaces showcase — advancing quiet earth-tone palettes tailored
                to Addis Ababa’s highland sunlight.
              </p>
            </CalmReveal>

            <CalmReveal delay={0.2} className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#D4B373]/20 aspect-[4/4.3]">
                <CalmImage
                  src={BRAND.founder.portraits.studioPortrait}
                  alt="Betelhem Engida official Miseso studio portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">
                03 · Institutional Leadership
              </p>
              <h3 className="font-editorial text-2xl text-[#F6F2EA]">
                Verified 100+ Person Design House
              </h3>
              <p className="text-xs leading-relaxed text-[#F6F2EA]/65">
                Backed by full-time permanent teams across Architecture, Quantity Surveying,
                Site Engineering, Construction Coordination, and In-House Cabinet Manufacturing.
              </p>
            </CalmReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOUR DESIGN PRINCIPLES OF BETELHEM ENGIDA
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0E1A14] border-y border-[#D4B373]/12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-14">
          <CalmReveal className="max-w-2xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              Architectural Code
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA]">
              Four Principles That Guide Every Room
            </h2>
          </CalmReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {BRAND.founderPrinciples.map((p, idx) => (
              <CalmReveal key={p.number} delay={0.07 * idx}>
                <div className="h-full rounded-2xl border border-[#D4B373]/18 bg-[#0B1410]/75 p-8 space-y-3">
                  <span className="font-editorial text-2xl text-[#D4B373]">{p.number}</span>
                  <h3 className="font-editorial text-3xl font-light text-[#F6F2EA]">{p.title}</h3>
                  <p className="font-editorial italic text-lg text-[#D4B373]/90">“{p.quote}”</p>
                  <p className="text-sm leading-relaxed text-[#F6F2EA]/65">{p.body}</p>
                </div>
              </CalmReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          TIMELINE — EVOLUTION OF MISESO
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0B1410]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CalmReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              Verified Studio Timeline
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA]">
              From Independent Vision to Two-Branch Institution
            </h2>
          </CalmReveal>

          <div className="space-y-6">
            {BRAND.timeline.map((step, idx) => (
              <CalmReveal key={step.period} delay={0.06 * idx}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 items-start rounded-2xl border border-[#D4B373]/15 bg-[#101D16]/70 p-6 sm:p-8">
                  <div className="md:col-span-4 space-y-1">
                    <span className="font-editorial text-3xl text-[#D4B373]">{step.period}</span>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/55">
                      {step.location}
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-2">
                    <h3 className="font-editorial text-2xl text-[#F6F2EA]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#F6F2EA]/70">{step.description}</p>
                  </div>
                </div>
              </CalmReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          OUR 100+ TEAM ARCHITECTURE
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#09120E] border-t border-[#D4B373]/12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <CalmReveal className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                <Users className="h-3.5 w-3.5" />
                <span>Organizational Backbone</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA] leading-[1.08]">
                A Multidisciplinary Machine Behind Quiet Spaces
              </h2>
              <p className="text-sm leading-relaxed text-[#F6F2EA]/65">
                Verified as a permanent Ethiopian employer across GeezJobs and Afriwork, Miseso
                operates structured technical departments rather than ad-hoc subcontractors.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4B373]/30 bg-[#101D16] px-4 py-2 text-xs text-[#D4B373]">
                <ShieldCheck className="h-4 w-4" />
                <span>In-House Architecture, QS, Engineering &amp; Cabinetry</span>
              </div>
            </CalmReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BRAND.departments.map((dept, idx) => (
                <CalmReveal key={dept.name} delay={0.07 * idx}>
                  <div className="h-full rounded-2xl border border-[#D4B373]/18 bg-[#101D16]/75 p-6 space-y-3">
                    <span className="font-editorial text-xl text-[#D4B373]">0{idx + 1}</span>
                    <h3 className="font-editorial text-2xl text-[#F6F2EA]">{dept.name}</h3>
                    <p className="text-xs leading-relaxed text-[#F6F2EA]/65">{dept.detail}</p>
                  </div>
                </CalmReveal>
              ))}
            </div>
          </div>

          <HairlineRule />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-editorial text-3xl text-[#F6F2EA]">
                Ready to see our craft in built reality?
              </p>
              <p className="text-sm text-[#F6F2EA]/60 mt-1">
                Explore 12 verified residential, hospitality, and institutional works.
              </p>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#D4B373] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410] hover:bg-[#E5C98E] transition-colors"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <VideoModal
        youtubeId={activeVideo?.id ?? null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
};
