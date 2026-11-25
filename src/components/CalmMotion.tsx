import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const CALM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const CalmReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 26, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.95, delay, ease: CALM_EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HairlineRule: React.FC<{ className?: string; delay?: number }> = ({
  className = '',
  delay = 0,
}) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 1.15, delay, ease: CALM_EASE }}
    className={`h-px origin-left bg-gradient-to-r from-[#D4B373]/60 via-[#D4B373]/25 to-transparent ${className}`}
  />
);

export const ScrollProgressPillar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#9E8149] via-[#D4B373] to-[#F6F2EA]/80 pointer-events-none"
    />
  );
};

export const AmbientCursorLight: React.FC = () => {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition-opacity duration-700"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(212, 179, 115, 0.065), transparent 65%)`,
      }}
    />
  );
};

export const CalmImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
}> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/images/real/betty-campaign-clean.jpg',
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
      className={`${className} transition-opacity duration-1000 ease-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

export const MisesoPillarMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    <rect x="6" y="4" width="28" height="1.8" fill="currentColor" opacity="0.9" />
    <rect x="10" y="8" width="20" height="1" fill="currentColor" opacity="0.55" />
    <rect x="18.2" y="10" width="3.6" height="20" fill="currentColor" />
    <rect x="13" y="12" width="1.2" height="16" fill="currentColor" opacity="0.45" />
    <rect x="25.8" y="12" width="1.2" height="16" fill="currentColor" opacity="0.45" />
    <rect x="10" y="31" width="20" height="1" fill="currentColor" opacity="0.55" />
    <rect x="6" y="34.2" width="28" height="1.8" fill="currentColor" opacity="0.9" />
  </svg>
);
