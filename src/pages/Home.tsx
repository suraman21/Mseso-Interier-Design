import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Play,
  Sparkles,
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { PROJECTS, FEATURED_VIDEOS } from '../data/projects';
import { SERVICES } from '../data/services';
import {
  CALM_EASE,
  CalmImage,
  CalmReveal,
  HairlineRule,
} from '../components/CalmMotion';
import { TransformationSlider } from '../components/TransformationSlider';
import { MaterialAtelier } from '../components/MaterialAtelier';
import { VideoModal } from '../components/VideoModal';

export const Home: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA]">
      {/* =====================================================================
          CHAPTER I — FULL-BLEED CINEMATIC HERO
      ====================================================================== */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-28 pb-14 sm:pb-20">
        <motion.div
          initial={{ scale: 1.09, opacity: 0.55 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 2.2, ease: CALM_EASE }}
          className="absolute inset-0"
        >
          <CalmImage
            src="https://misesointeriors.com/wp-content/uploads/2026/03/DSC00122-scaled.jpg"
            alt="Desalegn Hotel luxury interior completed by Miseso Interior Design"
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08100C] via-[#0B1410]/65 to-[#08100C]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08100C]/85 via-[#0B1410]/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: CALM_EASE }}
                className="inline-flex items-center gap-3 rounded-full border border-[#D4B373]/35 bg-[#0B1410]/65 backdrop-blur-md px-4 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4B373]" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                  ምሰሶ · {BRAND.tagline} · Addis Ababa
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05, delay: 0.25, ease: CALM_EASE }}
                className="font-editorial text-4xl sm:text-6xl lg:text-[4.6rem] font-light leading-[1.03] tracking-tight text-[#F6F2EA]"
              >
                The Pillar of Quiet{' '}
                <span className="italic text-[#D4B373]">Ethiopian</span> Luxury
                Interiors.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: CALM_EASE }}
                className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#F6F2EA]/75 font-light"
              >
                Founded by{' '}
                <span className="text-[#F6F2EA] font-normal">{BRAND.founder.name}</span>,{' '}
                <strong className="font-normal text-[#D4B373]">MISESO (ምሰሶ)</strong> delivers
                complete turnkey architecture, custom millwork, and luxury interiors — from
                private villas and flagship hotels to banking headquarters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.55, ease: CALM_EASE }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D4B373] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410] transition-all duration-500 hover:bg-[#E5C98E]"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setActiveVideo({
                      id: FEATURED_VIDEOS[0].id,
                      title: FEATURED_VIDEOS[0].title,
                    })
                  }
                  className="group inline-flex items-center gap-3 rounded-full border border-[#F6F2EA]/25 bg-[#0B1410]/55 backdrop-blur-md px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-[#F6F2EA] transition-all duration-500 hover:border-[#D4B373] hover:text-[#D4B373]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4B373]/20 text-[#D4B373]">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </span>
                  <span>Watch Studio Film</span>
                </button>
              </motion.div>
            </div>

            {/* Right Floating Founder Signature Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease: CALM_EASE }}
              className="lg:col-span-4"
            >
              <Link
                to="/story"
                className="group block rounded-2xl border border-[#D4B373]/25 bg-[#0D1913]/80 backdrop-blur-xl p-5 transition-all duration-500 hover:border-[#D4B373]/60"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#D4B373]/50">
                    <CalmImage
                      src={BRAND.founder.portraits.editorialCampaign}
                      alt="Betelhem Engida, Founder and CEO of Miseso Interior Design"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">
                      {BRAND.founder.title}
                    </p>
                    <p className="font-editorial text-xl text-[#F6F2EA] truncate">
                      {BRAND.founder.name}
                    </p>
                    <p className="text-xs text-[#F6F2EA]/60 line-clamp-1">
                      “{BRAND.manifesto}”
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#D4B373]/15 pt-3 text-[11px] uppercase tracking-[0.2em] text-[#D4B373]">
                  <span>Read the Owner Story</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Verified Architectural Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: CALM_EASE }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-[#D4B373]/20 pt-8 sm:grid-cols-4"
          >
            {BRAND.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-editorial text-3xl sm:text-4xl font-light text-[#D4B373]">
                  {m.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#F6F2EA]">
                  {m.label}
                </p>
                <p className="mt-0.5 text-[11px] text-[#F6F2EA]/50">{m.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER II — THE MEANING OF ምሰሶ & BETELHEM ENGIDA (WARM IVORY CANVAS)
      ====================================================================== */}
      <section className="relative bg-[#F5F0E6] text-[#121D16] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <CalmReveal className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-[#121D16]/10 shadow-[0_24px_65px_rgba(11,20,16,0.14)]">
                  <CalmImage
                    src={BRAND.founder.portraits.editorialCampaign}
                    alt="Betelhem Engida in a green emerald architectural interior"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-7 sm:-right-7 max-w-[280px] rounded-2xl bg-[#0B1410] p-5 text-[#F6F2EA] shadow-2xl border border-[#D4B373]/30">
                  <p className="font-editorial text-2xl text-[#D4B373]">{BRAND.amharicName}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#F6F2EA]/75">
                    {BRAND.meaning}
                  </p>
                </div>
              </div>
            </CalmReveal>

            <CalmReveal delay={0.15} className="lg:col-span-7 lg:pl-8 space-y-7">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8E6F36] font-medium">
                  Chapter 01 · The Founder &amp; Philosophy
                </p>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.4rem] font-light leading-[1.08] text-[#0E1913]">
                  Crafted With Discipline. <br />
                  <span className="italic text-[#7C5E2A]">Led From Site to Key Handover.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#2C3A31]">
                {BRAND.founder.ceoLetter[0]}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#46564B]">
                {BRAND.founder.ceoLetter[1]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {BRAND.founderPrinciples.slice(0, 2).map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl border border-[#121D16]/10 bg-white/65 p-5"
                  >
                    <span className="font-editorial text-xl text-[#9A7A40]">{item.number}</span>
                    <h3 className="mt-1 font-editorial text-xl text-[#0E1913]">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#46564B]">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/story"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0B1410] px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-[#F6F2EA] transition-all duration-500 hover:bg-[#193024]"
                >
                  <span>Discover Betelhem’s Full Story</span>
                  <ArrowRight className="h-4 w-4 text-[#D4B373] transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </CalmReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER III — SELECTED WORKS EXHIBITION
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0B1410]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
            <CalmReveal className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Chapter 02 · Selected Works
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#F6F2EA]">
                Spaces Built to Endure
              </h2>
            </CalmReveal>
            <CalmReveal delay={0.12}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#D4B373] hover:text-[#F6F2EA] transition-colors"
              >
                <span>View All {PROJECTS.length} Verified Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </CalmReveal>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-12">
            {featuredProjects.map((project, index) => {
              const spanClass =
                index === 0
                  ? 'lg:col-span-7'
                  : index === 1
                  ? 'lg:col-span-5'
                  : index === 2
                  ? 'lg:col-span-5'
                  : index === 3
                  ? 'lg:col-span-7'
                  : 'lg:col-span-6';

              return (
                <CalmReveal key={project.slug} delay={0.07 * (index % 3)} className={spanClass}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group relative block overflow-hidden rounded-2xl border border-[#D4B373]/18 bg-[#101D16]"
                  >
                    <div className="aspect-[16/11] w-full overflow-hidden">
                      <CalmImage
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08100C]/95 via-[#08100C]/30 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="rounded-full border border-[#D4B373]/35 bg-[#0B1410]/75 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#D4B373]">
                        {project.category}
                      </span>
                      {project.youtubeId && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#F6F2EA]/20 bg-[#0B1410]/75 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#F6F2EA]">
                          <Play className="h-2.5 w-2.5 fill-current text-[#D4B373]" />
                          Film
                        </span>
                      )}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[#F6F2EA]/60">
                          {project.location}
                        </p>
                        <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-light text-[#F6F2EA] group-hover:text-[#D4B373] transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#F6F2EA]/65 line-clamp-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4B373]/40 bg-[#0B1410]/70 text-[#D4B373] transition-all duration-500 group-hover:bg-[#D4B373] group-hover:text-[#0B1410]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </CalmReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER IV — BEFORE & AFTER REAL TRANSFORMATION SLIDER
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0E1A14] border-y border-[#D4B373]/12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <CalmReveal className="lg:col-span-7 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Chapter 03 · Turnkey Transformation
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light leading-[1.08] text-[#F6F2EA]">
                From Raw Blockwork &amp; Demolition to Quiet Sanctuary
              </h2>
            </CalmReveal>
            <CalmReveal delay={0.12} className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-[#F6F2EA]/65">
                Every Miseso project is documented from raw structural demolition through MEP
                engineering, acoustic gypsum ceilings, lighting, and custom in-house joinery.
                Slide below to witness our real site-to-sanctuary standard.
              </p>
            </CalmReveal>
          </div>

          <CalmReveal delay={0.1}>
            <TransformationSlider
              beforeImage={BRAND.founder.portraits.onSiteDemolition}
              afterImage="https://misesointeriors.com/wp-content/uploads/2026/04/tracon-2.png"
              beforeLabel="Site Execution · Betelhem On-Site Demolition Walk"
              afterLabel="Turnkey Handover · Tracon Real Estate 4-BR Residence"
            />
          </CalmReveal>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER V — INTERACTIVE COLOR & LIGHTING ATELIER
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0B1410]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CalmReveal>
            <MaterialAtelier />
          </CalmReveal>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER VI — FULL-SPECTRUM SERVICES OVERVIEW
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#09120E] border-t border-[#D4B373]/12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
            <CalmReveal className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Chapter 04 · Design &amp; Build Disciplines
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA]">
                Eight End-to-End Capabilities
              </h2>
            </CalmReveal>
            <CalmReveal delay={0.1}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#D4B373] hover:text-[#F6F2EA] transition-colors"
              >
                <span>Explore Process &amp; Models</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </CalmReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <CalmReveal key={service.id} delay={0.04 * idx}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[#D4B373]/15 bg-[#0F1C16]/80 p-6 transition-all duration-500 hover:border-[#D4B373]/50 hover:bg-[#14251D]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-2xl text-[#D4B373]">
                        {service.number}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#F6F2EA]/35 transition-all duration-500 group-hover:text-[#D4B373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="font-editorial text-2xl font-light text-[#F6F2EA] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#F6F2EA]/60">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 overflow-hidden rounded-xl aspect-[16/10] border border-[#F6F2EA]/10">
                    <CalmImage
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </CalmReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER VII — OFFICIAL WALKTHROUGH FILMS & PARTNERS
      ====================================================================== */}
      <section className="py-20 sm:py-28 bg-[#0B1410] border-t border-[#D4B373]/12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-20">
          {/* Official Film Reel */}
          <div className="space-y-10">
            <CalmReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                  Cinema &amp; Walkthroughs · YouTube
                </p>
                <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F6F2EA]">
                  Inside Our Completed Spaces
                </h2>
              </div>
              <a
                href="https://www.youtube.com/@bettyinteriordesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4B373] hover:text-[#F6F2EA] transition-colors"
              >
                <span>YouTube Channel · 256K+ Views</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </CalmReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FEATURED_VIDEOS.map((video, idx) => (
                <CalmReveal key={video.id} delay={0.08 * idx}>
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ id: video.id, title: video.title })}
                    className="group w-full text-left overflow-hidden rounded-2xl border border-[#D4B373]/20 bg-[#101D16] transition-all duration-500 hover:border-[#D4B373]/60"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <CalmImage
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#08100C]/40 flex items-center justify-center transition-colors group-hover:bg-[#08100C]/20">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4B373] bg-[#0B1410]/80 text-[#D4B373] shadow-2xl transition-transform duration-500 group-hover:scale-110">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </span>
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-md bg-[#0B1410]/85 px-2 py-0.5 text-[10px] tracking-widest text-[#F6F2EA]">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-5 space-y-1.5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4B373]">
                        {video.tag}
                      </p>
                      <h3 className="font-editorial text-xl text-[#F6F2EA] group-hover:text-[#D4B373] transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </button>
                </CalmReveal>
              ))}
            </div>
          </div>

          <HairlineRule />

          {/* Global Partners */}
          <div className="space-y-10">
            <CalmReveal className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Global Supply &amp; Material Ecosystem
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#F6F2EA]">
                Curated European &amp; Ethiopian Finishing Partners
              </h2>
            </CalmReveal>

            <CalmReveal delay={0.1}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {BRAND.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex flex-col justify-between rounded-2xl border border-[#D4B373]/15 bg-[#101D16]/75 p-6"
                  >
                    <div className="h-12 flex items-center">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-10 max-w-[140px] object-contain opacity-90 brightness-110"
                        />
                      ) : (
                        <span className="font-editorial text-2xl tracking-wider text-[#D4B373]">
                          {partner.name}
                        </span>
                      )}
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#F6F2EA]/10">
                      <p className="text-xs font-medium text-[#F6F2EA]">{partner.name}</p>
                      <p className="mt-0.5 text-[11px] text-[#F6F2EA]/55">
                        {partner.origin} · {partner.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CalmReveal>

            {/* Regional Presence Pills */}
            <CalmReveal delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#D4B373] mr-2">
                  Active Delivery Across Ethiopia:
                </span>
                {BRAND.regionsServed.map((region) => (
                  <span
                    key={region.city}
                    title={region.note}
                    className="rounded-full border border-[#D4B373]/25 bg-[#101D16] px-3.5 py-1 text-xs text-[#F6F2EA]/75"
                  >
                    {region.city}
                  </span>
                ))}
              </div>
            </CalmReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER VIII — PRIVATE CONSULTATION SANCTUARY CTA
      ====================================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#0E1B14] border-t border-[#D4B373]/15">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,179,115,0.12),transparent_68%)]"
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-7">
          <CalmReveal className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4B373]/30 bg-[#0B1410]/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>By Appointment Only</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[#F6F2EA] leading-[1.06]">
              Begin Your Quiet Luxury Commission
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-[#F6F2EA]/70">
              Meet with our architects and design leads at our{' '}
              <strong className="font-normal text-[#F6F2EA]">
                Hayahulet Signal (Dema Hope 3rd Floor)
              </strong>{' '}
              headquarters or our{' '}
              <strong className="font-normal text-[#F6F2EA]">Tafo Branch (In front of CCD)</strong>.
            </p>
          </CalmReveal>

          <CalmReveal delay={0.12} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#D4B373] px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410] transition-all duration-500 hover:bg-[#E5C98E]"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href={BRAND.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4B373]/40 bg-[#0B1410]/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#F6F2EA] hover:border-[#D4B373] hover:text-[#D4B373] transition-colors"
            >
              <span>Call {BRAND.contact.phoneDisplay}</span>
            </a>
          </CalmReveal>

          <HairlineRule className="mx-auto max-w-md pt-4" />

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-[#F6F2EA]/55">
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5 text-[#D4B373]" />
              Residential · Commercial · Hospitality
            </span>
            <span className="inline-flex items-center gap-2">
              <Compass className="h-3.5 w-3.5 text-[#D4B373]" />
              100% Turnkey Execution
            </span>
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
