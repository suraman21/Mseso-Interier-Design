import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CALM_EASE, MisesoPillarMark } from './CalmMotion';

export const Preloader: React.FC = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('miseso_intro_seen');
  });

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem('miseso_intro_seen', '1');
      setShow(false);
    }, 1450);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.85, ease: CALM_EASE } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08100C] text-[#F6F2EA]"
        >
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: CALM_EASE }}
            className="mb-6 h-14 w-px origin-top bg-gradient-to-b from-transparent via-[#D4B373] to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: CALM_EASE }}
            className="flex flex-col items-center gap-3"
          >
            <MisesoPillarMark className="h-9 w-9 text-[#D4B373]" />
            <div className="flex items-center gap-3 text-2xl sm:text-3xl tracking-[0.28em] font-editorial font-light">
              <span className="text-[#D4B373] tracking-normal font-[var(--font-ethiopic)]">ምሰሶ</span>
              <span className="h-4 w-px bg-[#D4B373]/40" />
              <span>MISESO</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#F6F2EA]/55">
              Luxurious Interior Design &amp; Build
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, delay: 0.25, ease: CALM_EASE }}
            className="mt-8 h-px w-36 origin-center bg-gradient-to-r from-transparent via-[#D4B373]/75 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
