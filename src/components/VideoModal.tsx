import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CALM_EASE } from './CalmMotion';

interface VideoModalProps {
  youtubeId: string | null;
  title?: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ youtubeId, title, onClose }) => {
  useEffect(() => {
    if (!youtubeId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [youtubeId, onClose]);

  return (
    <AnimatePresence>
      {youtubeId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: CALM_EASE }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#050A07]/92 backdrop-blur-xl p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.55, ease: CALM_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-[#D4B373]/30 bg-[#0B1410] shadow-[0_30px_90px_rgba(0,0,0,0.75)]"
          >
            <div className="flex items-center justify-between border-b border-[#D4B373]/15 px-5 py-3.5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4B373] truncate pr-4">
                {title || 'Miseso Official Film Walkthrough'}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close video"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F6F2EA]/15 text-[#F6F2EA]/80 hover:border-[#D4B373] hover:text-[#D4B373] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title || 'Miseso Interior Design Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
