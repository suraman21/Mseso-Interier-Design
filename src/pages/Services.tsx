import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Layers, Sparkles } from 'lucide-react';
import {
  ENGAGEMENT_MODELS,
  PROCESS_STEPS,
  SERVICES,
} from '../data/services';
import { CALM_EASE, CalmImage, CalmReveal, HairlineRule } from '../components/CalmMotion';

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) ?? SERVICES[0];

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA] min-h-screen">
      {/* =====================================================================
          HERO
      ====================================================================== */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#D4B373]/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: CALM_EASE }}
            className="max-w-3xl space-y-5"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              Design · Engineering · Turnkey Execution
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-light leading-[1.05]">
              One Studio. Eight Disciplines.{' '}
              <span className="italic text-[#D4B373]">Complete Accountability.</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[#F6F2EA]/70">
              From photorealistic architectural visualization and full-scale construction to
              in-house custom cabinetry and white-glove key handover, Miseso unifies every craft
              under one roof in Addis Ababa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          THREE ENGAGEMENT MODELS
      ====================================================================== */}
      <section className="py-20 sm:py-28 bg-[#0E1A14]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-12">
          <CalmReveal className="max-w-2xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              How We Partner With You
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F6F2EA]">
              Three Tailored Commission Models
            </h2>
          </CalmReveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, idx) => {
              const isFlagship = model.number === '02';
              return (
                <CalmReveal key={model.number} delay={0.08 * idx}>
                  <div
                    className={`flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-500 ${
                      isFlagship
                        ? 'border border-[#D4B373] bg-[#14251C] shadow-[0_24px_70px_rgba(0,0,0,0.4)]'
                        : 'border border-[#D4B373]/18 bg-[#0B1410]/75'
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#D4B373]/35 bg-[#D4B373]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#D4B373]">
                          Model {model.number}
                        </span>
                        {isFlagship && <Sparkles className="h-4 w-4 text-[#D4B373]" />}
                      </div>

                      <div>
                        <h3 className="font-editorial text-3xl text-[#F6F2EA]">{model.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#D4B373]/85">
                          {model.subtitle}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-[#F6F2EA]/75">
                        {model.description}
                      </p>

                      <div className="rounded-xl border border-[#F6F2EA]/10 bg-[#0B1410]/55 p-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4B373]">
                          Ideal For
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#F6F2EA]/75">
                          {model.idealFor}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#D4B373]/15">
                      <Link
                        to="/contact"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors ${
                          isFlagship
                            ? 'bg-[#D4B373] font-medium text-[#0B1410] hover:bg-[#E5C98E]'
                            : 'border border-[#D4B373]/40 text-[#F6F2EA] hover:border-[#D4B373] hover:text-[#D4B373]'
                        }`}
                      >
                        <span>Inquire About This Model</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </CalmReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE 8 OFFICIAL SERVICES SHOWCASE
      ====================================================================== */}
      <section className="py-24 sm:py-32 bg-[#0B1410]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-12">
          <CalmReveal className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              <Layers className="h-3.5 w-3.5" />
              <span>Eight Core Disciplines</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#F6F2EA]">
              Explore Our Official Capabilities
            </h2>
          </CalmReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Vertical Index */}
            <div className="lg:col-span-5 space-y-2.5">
              {SERVICES.map((service) => {
                const isActive = service.id === activeService.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-500 ${
                      isActive
                        ? 'border-[#D4B373] bg-[#14261D]'
                        : 'border-[#F6F2EA]/10 bg-[#0F1B15]/70 hover:border-[#D4B373]/40'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-editorial text-xl text-[#D4B373]">
                        {service.number}
                      </span>
                      <div>
                        <p
                          className={`font-editorial text-xl sm:text-2xl ${
                            isActive ? 'text-[#F6F2EA]' : 'text-[#F6F2EA]/80'
                          }`}
                        >
                          {service.title}
                        </p>
                        <p className="text-[11px] text-[#F6F2EA]/50 line-clamp-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Active Service Architectural Dossier */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: CALM_EASE }}
                className="rounded-3xl border border-[#D4B373]/25 bg-[#101D16] p-6 sm:p-10 space-y-7"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.26em] text-[#D4B373]">
                    Discipline {activeService.number}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#F6F2EA]">
                    {activeService.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#F6F2EA]/75">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Real Service Photos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-xl border border-[#F6F2EA]/10 aspect-[16/11]">
                    <CalmImage
                      src={activeService.image}
                      alt={`${activeService.title} showcase 1`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {activeService.secondaryImage && (
                    <div className="overflow-hidden rounded-xl border border-[#F6F2EA]/10 aspect-[16/11]">
                      <CalmImage
                        src={activeService.secondaryImage}
                        alt={`${activeService.title} showcase 2`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Deliverables */}
                <div className="space-y-3 pt-2">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4B373]">
                    Included Scope &amp; Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-[#F6F2EA]/10 bg-[#0B1410]/65 px-4 py-3 text-xs text-[#F6F2EA]/80"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4B373]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5-STAGE QUIET-LUXURY DELIVERY PROCESS (WARM IVORY CONTRAST)
      ====================================================================== */}
      <section className="bg-[#F5F0E6] text-[#111C15] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-14">
          <CalmReveal className="max-w-2xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8E6F36] font-medium">
              Our Turnkey Method
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#0E1913]">
              Five Calm Stages From Brief to Handover
            </h2>
          </CalmReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((item, idx) => (
              <CalmReveal key={item.step} delay={0.07 * idx}>
                <div className="h-full rounded-2xl border border-[#121D16]/12 bg-white/75 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="font-editorial text-3xl text-[#9A7A40]">{item.step}</span>
                    <div>
                      <h3 className="font-editorial text-2xl text-[#0E1913] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[#8E6F36]">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-[#46564B]">{item.description}</p>
                  </div>
                  <div className="h-0.5 w-10 bg-[#9A7A40]/45" />
                </div>
              </CalmReveal>
            ))}
          </div>

          <HairlineRule />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-editorial text-3xl text-[#0E1913]">
                Planning a new residence, hotel, or corporate office?
              </p>
              <p className="text-sm text-[#46564B]">
                Book a private consultation at Hayahulet Signal or our Tafo studio.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#0B1410] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[#F6F2EA] hover:bg-[#1A3024] transition-colors"
            >
              <span>Schedule Private Visit</span>
              <ArrowRight className="h-4 w-4 text-[#D4B373]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
