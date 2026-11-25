import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CALM_EASE } from './CalmMotion';

interface ImageLightboxProps {
  images: string[];
  activeIndex: number | null;
  altPrefix: string;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  activeIndex,
  altPrefix,
  onClose,
  onNavigate,
}) => {
  const isOpen = activeIndex !== null && images[activeIndex] !== undefined;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: CALM_EASE }}
          onClick={onClose}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-[#060B08]/95 backdrop-blur-2xl p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410]/80 text-[#F6F2EA] hover:border-[#D4B373] hover:text-[#D4B373] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((activeIndex - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410]/80 text-[#F6F2EA] hover:border-[#D4B373] hover:text-[#D4B373] transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((activeIndex + 1) % images.length);
                }}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B373]/30 bg-[#0B1410]/80 text-[#F6F2EA] hover:border-[#D4B373] hover:text-[#D4B373] transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: CALM_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-6xl flex flex-col items-center gap-4"
          >
            <img
              src={images[activeIndex]}
              alt={`${altPrefix} — View ${activeIndex + 1}`}
              className="max-h-[78vh] w-auto max-w-full rounded-xl border border-[#D4B373]/20 object-contain shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
            />
            <p className="text-xs uppercase tracking-[0.26em] text-[#D4B373]">
              {altPrefix} · {activeIndex + 1} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
