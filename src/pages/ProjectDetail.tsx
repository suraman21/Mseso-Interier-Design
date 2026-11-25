import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Expand,
  MapPin,
  Play,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { CALM_EASE, CalmImage, CalmReveal, HairlineRule } from '../components/CalmMotion';
import { ImageLightbox } from '../components/ImageLightbox';
import { VideoModal } from '../components/VideoModal';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA] min-h-screen">
      {/* Full-Bleed Architectural Hero */}
      <section className="relative min-h-[75vh] sm:min-h-[84vh] flex flex-col justify-end overflow-hidden pt-28 pb-14">
        <motion.div
          initial={{ scale: 1.07, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: CALM_EASE }}
          className="absolute inset-0"
        >
          <CalmImage
            src={project.coverImage}
            alt={project.title}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1410] via-[#0B1410]/55 to-[#08100C]/45" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 space-y-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D4B373] hover:text-[#F6F2EA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#D4B373]/40 bg-[#0B1410]/70 backdrop-blur-md px-3.5 py-1 text-[10px] uppercase tracking-[0.22em] text-[#D4B373]">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#F6F2EA]/75">
                <MapPin className="h-3.5 w-3.5 text-[#D4B373]" />
                {project.location}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.2rem] font-light leading-[1.04]">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl font-light text-[#F6F2EA]/80">{project.subtitle}</p>
          </div>

          {project.youtubeId && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-3 rounded-full bg-[#D4B373] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0B1410] hover:bg-[#E5C98E] transition-colors"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Play Official Walkthrough Film</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Dossier & Specifications */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-16">
          {/* Spec Strip */}
          <CalmReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 rounded-2xl border border-[#D4B373]/20 bg-[#101D16]/80 p-6 sm:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">Location</p>
                <p className="mt-1.5 text-sm text-[#F6F2EA]">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">
                  Commission Scope
                </p>
                <p className="mt-1.5 text-sm text-[#F6F2EA]">{project.scope}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4B373]">Sector</p>
                <p className="mt-1.5 text-sm text-[#F6F2EA]">{project.category}</p>
              </div>
            </div>
          </CalmReveal>

          {/* Narrative + Deliverables */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <CalmReveal className="lg:col-span-7 space-y-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Architectural Narrative
              </p>
              <p className="text-base sm:text-xl leading-relaxed text-[#F6F2EA] font-editorial">
                {project.summary}
              </p>
              <div className="space-y-4 pt-1">
                {project.story.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base leading-relaxed text-[#F6F2EA]/75 font-light">
                    {para}
                  </p>
                ))}
              </div>
            </CalmReveal>

            <CalmReveal delay={0.1} className="lg:col-span-5 space-y-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                Key Executed Highlights
              </p>
              <ul className="space-y-3.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#F6F2EA]/75"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D4B373]/40 bg-[#D4B373]/10 text-[#D4B373]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CalmReveal>
          </div>

          <HairlineRule />

          {/* Verified Project Gallery */}
          <div className="space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
                  Authentic Project Photography
                </p>
                <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-light text-[#F6F2EA]">
                  Visual Documentation ({project.gallery.length})
                </h2>
              </div>
              <p className="hidden sm:block text-xs text-[#F6F2EA]/50">
                Click any frame to inspect full screen
              </p>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${
                project.gallery.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
              }`}
            >
              {project.gallery.map((imgUrl, idx) => (
                <CalmReveal key={imgUrl} delay={0.05 * (idx % 4)}>
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(idx)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-[#D4B373]/18 bg-[#101D16] focus:outline-none focus:ring-2 focus:ring-[#D4B373]"
                  >
                    <div
                      className={
                        project.gallery.length === 1
                          ? 'aspect-[16/10] w-full'
                          : 'aspect-[16/11] w-full'
                      }
                    >
                      <CalmImage
                        src={imgUrl}
                        alt={`${project.title} — Authentic view ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4B373]/40 bg-[#0B1410]/80 text-[#D4B373] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                  </button>
                </CalmReveal>
              ))}
            </div>
          </div>

          <HairlineRule />

          {/* Next Commission Transition */}
          <CalmReveal>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl border border-[#D4B373]/20 bg-[#101D16] p-8 sm:p-10 transition-all duration-500 hover:border-[#D4B373]/55"
            >
              <div className="space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                  Next Verified Commission
                </p>
                <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#F6F2EA] group-hover:text-[#D4B373] transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs text-[#F6F2EA]/60">
                  {nextProject.category} · {nextProject.location}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4B373]/40 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#D4B373] transition-all duration-500 group-hover:bg-[#D4B373] group-hover:text-[#0B1410]">
                <span>View Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </CalmReveal>
        </div>
      </section>

      <ImageLightbox
        images={project.gallery}
        activeIndex={lightboxIdx}
        altPrefix={project.title}
        onClose={() => setLightboxIdx(null)}
        onNavigate={(idx) => setLightboxIdx(idx)}
      />

      <VideoModal
        youtubeId={showVideo ? project.youtubeId ?? null : null}
        title={project.youtubeTitle || `${project.title} — Official Miseso Walkthrough`}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
};
