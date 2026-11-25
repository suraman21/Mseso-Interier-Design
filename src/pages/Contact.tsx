import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { CALM_EASE, CalmReveal } from '../components/CalmMotion';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Private Residence / Villa',
    engagementModel: 'Design & Build (Turnkey)',
    preferredBranch: 'Headquarters — Hayahulet Signal (Dema Hope 3rd Floor)',
    location: 'Addis Ababa',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B1410] text-[#F6F2EA] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-[#D4B373]/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: CALM_EASE }}
            className="max-w-3xl space-y-5"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4B373]">
              Private Consultation · By Appointment Only
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl font-light leading-[1.05]">
              Let Us Shape Your <span className="italic text-[#D4B373]">Sanctuary</span> Together.
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[#F6F2EA]/70">
              Whether you are building a residential estate in Addis Ababa, renovating a hotel,
              or commissioning a banking headquarters, share your brief below or contact our studio
              directly to reserve an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Verified Contact Channels & Branches */}
            <div className="lg:col-span-5 space-y-8">
              <CalmReveal className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                  Two Addis Ababa Studios
                </p>
                {BRAND.branches.map((branch) => (
                  <div
                    key={branch.id}
                    className="rounded-2xl border border-[#D4B373]/20 bg-[#101D16]/85 p-6 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4B373]">
                          {branch.label}
                        </p>
                        <h2 className="mt-1 font-editorial text-2xl text-[#F6F2EA]">
                          {branch.name}
                        </h2>
                      </div>
                      <MapPin className="h-4 w-4 shrink-0 text-[#D4B373] mt-1" />
                    </div>
                    <p className="text-sm text-[#F6F2EA]/85">{branch.address}</p>
                    <p className="text-xs text-[#F6F2EA]/55">{branch.hours}</p>
                    <p className="text-xs text-[#F6F2EA]/60 pt-1 border-t border-[#F6F2EA]/10">
                      {branch.focus}
                    </p>
                  </div>
                ))}
              </CalmReveal>

              <CalmReveal
                delay={0.1}
                className="rounded-2xl border border-[#D4B373]/20 bg-[#101D16]/85 p-6 space-y-5"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                  Direct Concierge Lines
                </p>

                <div className="space-y-4 text-sm">
                  <a
                    href={BRAND.contact.phoneHref}
                    className="flex items-center gap-3.5 text-[#F6F2EA] hover:text-[#D4B373] transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410] text-[#D4B373]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#F6F2EA]/50">
                        Direct Telephone
                      </p>
                      <p className="font-medium tracking-wide">{BRAND.contact.phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND.contact.primaryEmail}`}
                    className="flex items-center gap-3.5 text-[#F6F2EA] hover:text-[#D4B373] transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410] text-[#D4B373]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#F6F2EA]/50">
                        Official Email
                      </p>
                      <p className="font-medium">{BRAND.contact.primaryEmail}</p>
                      <p className="text-xs text-[#F6F2EA]/55">{BRAND.contact.secondaryEmail}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-[#F6F2EA]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410] text-[#D4B373]">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#F6F2EA]/50">
                        Consultation Policy
                      </p>
                      <p className="text-xs text-[#D4B373] leading-relaxed">
                        {BRAND.contact.consultationNote}
                      </p>
                    </div>
                  </div>
                </div>
              </CalmReveal>

              {/* Verified Socials & Careers */}
              <CalmReveal delay={0.15} className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                  Official Social Channels &amp; Careers
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {BRAND.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl border border-[#D4B373]/18 bg-[#101D16]/75 p-4 transition-all duration-500 hover:border-[#D4B373]/55"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#F6F2EA]">{s.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#D4B373] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="mt-1 text-[11px] text-[#D4B373]">{s.stats}</p>
                      <p className="text-[10px] text-[#F6F2EA]/50 truncate">{s.handle}</p>
                    </a>
                  ))}
                </div>
                <p className="text-xs text-[#F6F2EA]/55 pt-1">
                  Architects, Site Engineers &amp; Finishing Specialists: submit portfolios via
                  our verified Telegram recruitment handle{' '}
                  <span className="text-[#D4B373]">@MIDesign1</span>.
                </p>
              </CalmReveal>
            </div>

            {/* Right Interactive Private Consultation Form */}
            <CalmReveal delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-[#D4B373]/25 bg-[#101D16] p-7 sm:p-11">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: CALM_EASE }}
                    className="py-14 text-center space-y-5"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B373]/50 bg-[#D4B373]/15 text-[#D4B373]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h2 className="font-editorial text-4xl font-light text-[#F6F2EA]">
                      Your Commission Brief Is Received
                    </h2>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-[#F6F2EA]/70">
                      Thank you, <strong className="text-[#F6F2EA]">{formData.fullName}</strong>.
                      Our client liaison team for{' '}
                      <span className="text-[#D4B373]">{formData.preferredBranch}</span> will
                      reach out to confirm your private appointment. For urgent inquiries, please
                      call{' '}
                      <a href={BRAND.contact.phoneHref} className="text-[#D4B373] underline">
                        {BRAND.contact.phoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D4B373]/40 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#D4B373] hover:bg-[#D4B373] hover:text-[#0B1410] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 pb-2">
                      <p className="text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
                        Commission Brief
                      </p>
                      <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#F6F2EA]">
                        Request a Private Appointment
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] placeholder:text-[#F6F2EA]/30 focus:border-[#D4B373] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+251 9..."
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] placeholder:text-[#F6F2EA]/30 focus:border-[#D4B373] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] placeholder:text-[#F6F2EA]/30 focus:border-[#D4B373] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Project Location
                        </label>
                        <select
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] focus:border-[#D4B373] focus:outline-none transition-colors"
                        >
                          {BRAND.regionsServed.map((region) => (
                            <option key={region.city} value={region.city}>
                              {region.city}
                            </option>
                          ))}
                          <option value="Other / Diaspora Project">Other / Diaspora Project</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Property Type
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] focus:border-[#D4B373] focus:outline-none transition-colors"
                        >
                          <option>Private Residence / Villa</option>
                          <option>Luxury Apartment Finishing</option>
                          <option>Hotel &amp; Hospitality</option>
                          <option>Bank / Corporate Headquarters</option>
                          <option>Boutique / Salon / Retail</option>
                          <option>Complete Renovation</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="engagementModel"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                        >
                          Preferred Scope
                        </label>
                        <select
                          id="engagementModel"
                          value={formData.engagementModel}
                          onChange={(e) =>
                            setFormData({ ...formData, engagementModel: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] focus:border-[#D4B373] focus:outline-none transition-colors"
                        >
                          <option>Design &amp; Build (Turnkey)</option>
                          <option>Design Only</option>
                          <option>Build (with Modification)</option>
                          <option>Custom Kitchen Cabinets &amp; Feature Walls</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredBranch"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                      >
                        Preferred Studio Branch
                      </label>
                      <select
                        id="preferredBranch"
                        value={formData.preferredBranch}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredBranch: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] focus:border-[#D4B373] focus:outline-none transition-colors"
                      >
                        <option>Headquarters — Hayahulet Signal (Dema Hope 3rd Floor)</option>
                        <option>Second Branch — Tafo (In front of CCD)</option>
                        <option>Online Video Consultation (Diaspora / Regional)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#F6F2EA]/65 mb-2"
                      >
                        Space Size, Timeline &amp; Vision
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your space (e.g., G+2 villa, 170 m² apartment, hotel renovation), current construction stage, and desired timeline..."
                        className="w-full rounded-xl border border-[#F6F2EA]/15 bg-[#0B1410] px-4 py-3.5 text-sm text-[#F6F2EA] placeholder:text-[#F6F2EA]/30 focus:border-[#D4B373] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4B373] px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410] transition-all duration-500 hover:bg-[#E5C98E]"
                    >
                      <span>Request Private Consultation</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </CalmReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
