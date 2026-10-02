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
      className="relative w-full py-28 sm:py-36 bg-[#FAF8F5] text-[#1C1917] overflow-hidden border-b border-[#E8E0D4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono block mb-3 font-medium">
            Roots Are Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
            THE ARCHIVE OF
            <br />
            <span className="text-[#5C5042] italic">WHAT WE CARRY.</span>
          </h2>
          <p className="mt-5 font-sans text-base sm:text-lg text-[#6B5D4D] font-light leading-relaxed">
            Every family holds an invisible museum: names carried across borders, recipes on folded scraps, and the quiet memories waiting to be reclaimed.
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
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2D8CA] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setSelectedPhoto(portraits[0])}
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#F0EAE1]">
              <img
                src={portraits[0].url}
                alt={portraits[0].alt}
                className="w-full h-full object-cover object-[center_25%] filter saturate-[0.95] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between border-t border-[#EAE3D6] bg-[#FFFFFF]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#B85028] font-mono block mb-1 font-semibold">
                  {portraits[0].label}
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917]">{portraits[0].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#FAF8F5] text-[#54493C] border border-[#E2D8CA] group-hover:bg-[#B85028] group-hover:text-white transition-colors">
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
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2D8CA] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setSelectedPhoto(portraits[1])}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EAE1]">
              <img
                src={portraits[1].url}
                alt={portraits[1].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between border-t border-[#EAE3D6] bg-[#FFFFFF]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#B85028] font-mono block mb-1 font-semibold">
                  {portraits[1].label}
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917]">{portraits[1].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#FAF8F5] text-[#54493C] border border-[#E2D8CA] group-hover:bg-[#B85028] group-hover:text-white transition-colors">
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
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2D8CA] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setSelectedPhoto(portraits[2])}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EAE1]">
              <img
                src={portraits[2].url}
                alt={portraits[2].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between border-t border-[#EAE3D6] bg-[#FFFFFF]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#B85028] font-mono block mb-1 font-semibold">
                  {portraits[2].label}
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917]">{portraits[2].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#FAF8F5] text-[#54493C] border border-[#E2D8CA] group-hover:bg-[#B85028] group-hover:text-white transition-colors">
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
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2D8CA] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setSelectedPhoto(portraits[3])}
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#F0EAE1]">
              <img
                src={portraits[3].url}
                alt={portraits[3].alt}
                className="w-full h-full object-cover object-center filter saturate-[0.95] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8 flex items-end justify-between border-t border-[#EAE3D6] bg-[#FFFFFF]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#B85028] font-mono block mb-1 font-semibold">
                  {portraits[3].label}
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917]">{portraits[3].subtitle}</h3>
              </div>
              <span className="p-2 rounded-full bg-[#FAF8F5] text-[#54493C] border border-[#E2D8CA] group-hover:bg-[#B85028] group-hover:text-white transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Modal for detail viewing */}
        <AnimatePresence>
          {selectedPhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/70 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2D8CA] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/10] max-h-[70vh] w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.alt}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FAF8F5] text-[#1C1917] border border-[#E2D8CA] hover:bg-[#B85028] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#EAE3D6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B85028] font-mono block font-semibold">
                      {selectedPhoto.label}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1C1917] mt-1">{selectedPhoto.subtitle}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7A6C5B]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B85028]" />
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
