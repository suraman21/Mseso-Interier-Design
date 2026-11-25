import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { BRAND } from '../data/brand';
import { CALM_EASE, MisesoPillarMark } from './CalmMotion';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Owner Story', path: '/story' },
  { label: 'Portfolio', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'py-3.5 bg-[#0B1410]/85 backdrop-blur-xl border-b border-[#D4B373]/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
            : 'py-5 bg-gradient-to-b from-[#070C09]/80 via-[#070C09]/35 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="group flex items-center gap-3 focus:outline-none">
            <MisesoPillarMark className="h-10 transition-transform duration-700 group-hover:scale-105" />
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2 font-editorial text-lg sm:text-xl tracking-[0.22em] text-[#F6F2EA]">
                <span className="text-[#D4B373] tracking-normal text-base sm:text-lg">ምሰሶ</span>
                <span className="h-3.5 w-px bg-[#D4B373]/35" />
                <span>MISESO</span>
              </div>
              <span className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-[#F6F2EA]/55 hidden sm:block">
                Interior Design &amp; Build
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
            {NAV_LINKS.map((item) => {
              const active =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-xs uppercase tracking-[0.22em] transition-colors duration-500 ${
                    active ? 'text-[#D4B373]' : 'text-[#F6F2EA]/75 hover:text-[#F6F2EA]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-dot"
                      transition={{ duration: 0.6, ease: CALM_EASE }}
                      className="absolute -bottom-2 left-0 right-0 h-px bg-[#D4B373]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={BRAND.contact.phoneHref}
              className="flex items-center gap-2 text-xs tracking-[0.14em] text-[#F6F2EA]/70 hover:text-[#D4B373] transition-colors duration-500"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4B373]" />
              <span>{BRAND.contact.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D4B373]/55 bg-[#D4B373]/10 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#F6F2EA] transition-all duration-500 hover:bg-[#D4B373] hover:text-[#0B1410]"
            >
              <span>Book Private Visit</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#111F18]/70 text-[#F6F2EA] transition-colors hover:border-[#D4B373]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Serene Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: CALM_EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#09120E]/98 backdrop-blur-2xl px-6 pt-28 pb-10 lg:hidden"
          >
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              {NAV_LINKS.map((item, idx) => {
                const active =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.65, ease: CALM_EASE }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-baseline justify-between border-b border-[#D4B373]/12 pb-4 font-editorial text-3xl tracking-wide transition-colors ${
                        active ? 'text-[#D4B373]' : 'text-[#F6F2EA]/85'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-sans tracking-[0.2em] text-[#D4B373]/60">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65, ease: CALM_EASE }}
              className="space-y-4 border-t border-[#D4B373]/15 pt-6"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#D4B373]">
                By Appointment · Addis Ababa
              </p>
              <div className="flex flex-col gap-2 text-sm text-[#F6F2EA]/75">
                <a href={BRAND.contact.phoneHref} className="hover:text-[#D4B373]">
                  {BRAND.contact.phoneDisplay}
                </a>
                <a href={`mailto:${BRAND.contact.primaryEmail}`} className="hover:text-[#D4B373]">
                  {BRAND.contact.primaryEmail}
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4B373] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#0B1410]"
              >
                <span>Schedule Private Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
