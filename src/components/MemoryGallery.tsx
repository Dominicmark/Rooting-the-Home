import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { MEDIA_CONFIG } from '../config/mediaConfig';

export function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof MEDIA_CONFIG.familyPortraits)[0] | null>(null);

  const portraits = MEDIA_CONFIG.familyPortraits;

  return (
    <section
      id="archive"
      className="relative w-full py-28 sm:py-36 bg-[#161310] text-[#FAF6F0] overflow-hidden border-t border-[#25201A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98B32] font-mono block mb-3">
            Section 05 — Roots Are Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
            THE ARCHIVE OF
            <br />
            <span className="text-[#E4DCD0] italic">WHAT WE CARRY.</span>
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed">
            Every family holds an invisible museum: names held through migration, quiet portraits on sideboards,
            recipes scribbled in margins, and the unspoken gaps between what is remembered and what was lost.
          </p>
        </motion.div>

        {/* Asymmetric Archival Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Card 1: A NAME (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#1D1915] border border-[#383027] cursor-pointer"
            onClick={() => setSelectedPhoto(portraits[0])}
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={portraits[0].url}
                alt={portraits[0].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.9] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/90 via-[#0E0C0A]/20 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#E28863] font-mono block mb-1">
                  {portraits[0].label}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF6F0]">{portraits[0].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#25201A] text-[#FAF6F0] group-hover:bg-[#B85028] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Card 2: A MIGRATION (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#1D1915] border border-[#383027] cursor-pointer"
            onClick={() => setSelectedPhoto(portraits[1])}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={portraits[1].url}
                alt={portraits[1].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.88] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/90 via-[#0E0C0A]/20 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C98B32] font-mono block mb-1">
                  {portraits[1].label}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF6F0]">{portraits[1].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#25201A] text-[#FAF6F0] group-hover:bg-[#B85028] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: A RITUAL (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#1D1915] border border-[#383027] cursor-pointer"
            onClick={() => setSelectedPhoto(portraits[2])}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={portraits[2].url}
                alt={portraits[2].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.88] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/90 via-[#0E0C0A]/20 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#E4DCD0] font-mono block mb-1">
                  {portraits[2].label}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF6F0]">{portraits[2].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#25201A] text-[#FAF6F0] group-hover:bg-[#B85028] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Card 4: A RECIPE (Col 6-12) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#1D1915] border border-[#383027] cursor-pointer"
            onClick={() => setSelectedPhoto(portraits[3])}
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={portraits[3].url}
                alt={portraits[3].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.9] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/90 via-[#0E0C0A]/20 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#E28863] font-mono block mb-1">
                  {portraits[3].label}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF6F0]">{portraits[3].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#25201A] text-[#FAF6F0] group-hover:bg-[#B85028] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Modal for detail viewing */}
        <AnimatePresence>
          {selectedPhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-[#161310] border border-[#383027] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/10] max-h-[70vh] w-full overflow-hidden">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.alt}
                    className="w-full h-full object-contain bg-[#0E0C0A]"
                  />
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0E0C0A]/80 text-[#FAF6F0] hover:bg-[#B85028] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 sm:p-8 bg-[#161310] border-t border-[#25201A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C98B32] font-mono block">
                      {selectedPhoto.label}
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF6F0] mt-1">{selectedPhoto.subtitle}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A89885]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E28863]" />
                    <span>Archival Family Specimen</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
