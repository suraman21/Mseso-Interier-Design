import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND } from '../data/brand';
import { HairlineRule, MisesoPillarMark } from './CalmMotion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070D0A] text-[#F6F2EA] border-t border-[#D4B373]/15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <MisesoPillarMark className="h-8 w-8 text-[#D4B373]" />
              <div className="flex items-center gap-2.5 font-editorial text-2xl tracking-[0.24em]">
                <span className="text-[#D4B373] tracking-normal">ምሰሶ</span>
                <span className="h-4 w-px bg-[#D4B373]/35" />
                <span>MISESO</span>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#F6F2EA]/65">
              {BRAND.meaning} Founded by{' '}
              <span className="text-[#F6F2EA]">{BRAND.founder.name}</span>, delivering turnkey
              luxury residences, hospitality landmarks, and institutional interiors across Ethiopia.
            </p>
            <p className="font-editorial italic text-lg text-[#D4B373]">
              “{BRAND.manifesto}”
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
              Studio Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#F6F2EA]/70">
              <li>
                <Link to="/" className="hover:text-[#D4B373] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#D4B373] transition-colors">
                  Owner Story · Betelhem Engida
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#D4B373] transition-colors">
                  Selected Works &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4B373] transition-colors">
                  Services &amp; 5-Stage Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4B373] transition-colors">
                  Book Private Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#D4B373]">
              Studios &amp; Direct Contact
            </h3>
            <div className="space-y-4 text-sm text-[#F6F2EA]/70">
              {BRAND.branches.map((branch) => (
                <div key={branch.id} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4B373]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#F6F2EA]">
                      {branch.name}
                    </p>
                    <p className="text-xs text-[#F6F2EA]/60 mt-0.5">
                      {branch.address}, {branch.city}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 pt-1">
                <Phone className="h-4 w-4 shrink-0 text-[#D4B373]" />
                <a
                  href={BRAND.contact.phoneHref}
                  className="hover:text-[#D4B373] transition-colors tracking-wide"
                >
                  {BRAND.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#D4B373]" />
                <a
                  href={`mailto:${BRAND.contact.primaryEmail}`}
                  className="hover:text-[#D4B373] transition-colors"
                >
                  {BRAND.contact.primaryEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <HairlineRule />

        {/* Social Strip & Copyright */}
        <div className="pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            {BRAND.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#F6F2EA]/65 hover:text-[#D4B373] transition-colors"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <p className="text-xs text-[#F6F2EA]/45">
            © {new Date().getFullYear()} {BRAND.fullName} ({BRAND.amharicFullName}). Addis Ababa, Ethiopia.
          </p>
        </div>
      </div>
    </footer>
  );
};
