import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SHOWCASE_ARTIFACTS } from '../config/programContent';
import { MediaAsset } from '../config/mediaConfig';

interface ShowcaseProps {
  showcaseImage: MediaAsset;
}

export function Showcase({ showcaseImage }: ShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="showcase"
      className="relative w-full py-28 sm:py-36 bg-[#161310] text-[#FAF6F0] border-y border-[#25201A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16"
        >
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98B32] font-mono block mb-3">
              Section 09 — The Communal Table
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
              WHAT WE FOUND.
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed">
              At the end of the four weeks, participants come together for a virtual Roots Showcase.
              Each person brings an artifact or story representing something meaningful from their journey.
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-[#1D1915] border border-[#383027] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E28863]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Not a Graduation — A Gathering</span>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#FAF6F0] font-light italic">
              &ldquo;This is not a performance. It is a shared table where we witness each other’s archives and recognize how much our stories rhyme.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Ambient Community Table Photo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden mb-12 border border-[#383027] h-64 sm:h-80 group"
        >
          <img
            src={showcaseImage.url}
            alt={showcaseImage.alt}
            className="w-full h-full object-cover object-center filter saturate-[0.85] brightness-[0.8] group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A]/90 via-[#0E0C0A]/40 to-[#0E0C0A]/90" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E4DCD0] font-mono">
                The Community Table
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal">
                Tangible Pieces Brought to the Circle
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Artifact Showcase */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A89885] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#C98B32]" />
            <span>Artifact Examples You Might Bring</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg bg-[#1D1915] hover:bg-[#25201A] border border-[#383027] text-[#FAF6F0] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-[#1D1915] hover:bg-[#25201A] border border-[#383027] text-[#FAF6F0] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        >
          {SHOWCASE_ARTIFACTS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="w-72 sm:w-80 shrink-0 p-6 rounded-xl bg-[#1D1915] border border-[#25201A] hover:border-[#B85028]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C98B32] block mb-2">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-[#FAF6F0] font-normal mb-2 leading-snug">
                  {item.name}
                </h4>
              </div>
              <p className="font-sans text-xs text-[#A89885] font-light leading-relaxed mt-4 pt-3 border-t border-[#25201A]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
