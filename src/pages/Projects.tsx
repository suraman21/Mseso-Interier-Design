import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS, type ProjectCategory } from '../data/projects';
import { CALM_EASE, CalmImage, CalmReveal } from '../components/CalmMotion';

const FILTER_OPTIONS: Array<'All' | ProjectCategory> = [
  'All',
  'Real Estate & Residential',
  'Corporate & Institutional',
  'Hospitality & Commercial',
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');

  const filtered =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-[#D4B373]/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: CALM_EASE }}
            className="max-w-3xl space-y-4"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              Selected Works · Verified Commissions
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-light leading-[1.05]">
              Built Spaces Across Ethiopia
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[#F6F2EA]/70">
              Every project below is documented strictly with its own authentic Miseso
              photography and official walkthrough media — spanning flagship hotels, banking
              institutions, civic headquarters, corporate offices, and luxury private residences.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {FILTER_OPTIONS.map((category) => {
              const active = selectedCategory === category;
              const count =
                category === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs tracking-[0.14em] uppercase transition-all duration-500 ${
                    active
                      ? 'bg-[#D4B373] text-[#0B1410] font-medium'
                      : 'border border-[#D4B373]/25 bg-[#101D16]/75 text-[#F6F2EA]/75 hover:border-[#D4B373]/60 hover:text-[#F6F2EA]'
                  }`}
                >
                  {category}{' '}
                  <span className={active ? 'opacity-70' : 'text-[#D4B373]/70'}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.65, ease: CALM_EASE }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4B373]/18 bg-[#101D16]/85 transition-all duration-500 hover:border-[#D4B373]/55"
                  >
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#08100C]">
                      <CalmImage
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08100C]/80 via-transparent to-transparent" />

                      <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[#D4B373]/35 bg-[#0B1410]/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#D4B373]">
                          {project.category}
                        </span>
                        {project.youtubeId && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-[#F6F2EA]/25 bg-[#0B1410]/80 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#F6F2EA]">
                            <Play className="h-2.5 w-2.5 fill-current text-[#D4B373]" />
                            Film
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4B373]/80">
                          {project.location}
                        </p>
                        <h2 className="font-editorial text-2xl sm:text-[1.75rem] font-light text-[#F6F2EA] group-hover:text-[#D4B373] transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-xs leading-relaxed text-[#F6F2EA]/65 line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#F6F2EA]/10 pt-4 text-[11px] uppercase tracking-[0.2em] text-[#F6F2EA]/60 group-hover:text-[#D4B373] transition-colors">
                        <span>
                          {project.gallery.length} Authentic View
                          {project.gallery.length > 1 ? 's' : ''}
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Consultation Note */}
          <CalmReveal className="mt-20 rounded-3xl border border-[#D4B373]/20 bg-[#101D16] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                Private Commissions Beyond the Web Archive
              </p>
              <h3 className="font-editorial text-3xl text-[#F6F2EA]">
                100+ Delivered Works Across Addis Ababa, Bishoftu, Jimma &amp; Jigjiga
              </h3>
              <p className="text-sm text-[#F6F2EA]/65">
                Many private villas (including 500 m²–2,000 m² estates) are kept confidential at
                our clients’ request and shared exclusively during in-studio appointments.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#D4B373] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410] hover:bg-[#E5C98E] transition-colors"
            >
              <span>Request Private Portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </CalmReveal>
        </div>
      </section>
    </div>
  );
};
