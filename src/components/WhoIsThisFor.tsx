import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { WHO_IS_THIS_FOR } from '../config/programContent';

export function WhoIsThisFor() {
  return (
    <section
      id="who-is-this-for"
      className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] text-[#1A1612] overflow-hidden border-t border-[#E8DFC8]"
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
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono block mb-3 font-medium">
            Section 10 — The Audience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1612] font-normal tracking-tight">
            FOR PEOPLE WHO HAVE
            <br />
            <span className="text-[#6B5D4D] italic">QUESTIONS ABOUT HOME.</span>
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#524638] font-light leading-relaxed">
            There is no single mold. Belonging does not require purity or a simple pedigree.
            This space is crafted for anyone holding a quiet curiosity about what came before them:
          </p>
        </motion.div>

        {/* Editorial Inclusive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_IS_THIS_FOR.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-[#FCFAF5] border border-[#E4D7C2] hover:border-[#B85028]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B85028] block mb-4" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1612] font-normal leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="mt-6 font-sans text-xs sm:text-sm text-[#6B5D4D] font-light leading-relaxed pt-4 border-t border-[#EDE4D2]">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Special Framing Box */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: WHO_IS_THIS_FOR.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#EFE6D5] to-[#E5DAC4] border border-[#D5C6A8] flex flex-col justify-center text-center sm:text-left space-y-4 shadow-sm"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-widest text-[#B85028] font-medium">
              <Heart className="w-4 h-4 text-[#B85028]" />
              <span>An Open Door</span>
            </div>
            <p className="font-serif text-xl text-[#2B231A] font-normal italic leading-snug">
              &ldquo;No prior knowledge of your family tree is required. The fragmented pieces you hold right now are more than enough to begin.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
