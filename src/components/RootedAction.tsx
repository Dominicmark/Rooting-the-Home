import { motion } from 'motion/react';
import { ROOTED_ACTIONS } from '../config/programContent';
import { MediaAsset } from '../config/mediaConfig';

interface RootedActionProps {
  image: MediaAsset;
}

export function RootedAction({ image }: RootedActionProps) {
  return (
    <section
      id="rooted-action"
      className="relative w-full py-28 sm:py-36 bg-[#0E0C0A] text-[#FAF6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with warm framing */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#1D1915] border border-[#383027] group">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-96 sm:h-[480px] object-cover object-center filter saturate-[0.9] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/90 via-[#0E0C0A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#161310]/80 backdrop-blur-sm border border-[#383027]/50">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C98B32] font-mono block mb-1">
                  Living Continuity
                </span>
                <p className="font-serif text-sm sm:text-base text-[#FAF6F0] italic font-light">
                  {image.caption || 'Rootedness as a living, daily practice.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading and Action Grid */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#E28863] font-mono block mb-3">
                Section 08 — Agency & Embodiment
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
                KNOWING IS ONLY
                <br />
                <span className="text-[#E4DCD0] italic">THE BEGINNING.</span>
              </h2>
              <p className="mt-6 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed">
                Rootedness is not just nostalgic remembrance. It can become something we actively practice.
                During Week 3 and 4, participants choose one deliberate, tangible action inspired by what they discover:
              </p>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {ROOTED_ACTIONS.map((action, idx) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl bg-[#161310] border border-[#25201A] hover:border-[#383027] hover:bg-[#1D1915] transition-all duration-300 flex items-start gap-3 group"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#B85028] group-hover:scale-150 transition-transform shrink-0" />
                  <div>
                    <h4 className="font-serif text-sm sm:text-base text-[#FAF6F0] font-medium group-hover:text-[#E28863] transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-xs text-[#A89885] font-light mt-0.5 leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <p className="font-serif text-sm sm:text-base text-[#FAF6F0] italic font-light border-l-2 border-[#C98B32] pl-4 py-1">
                &ldquo;You do not need to solve the entire mystery of your lineage to take one step that honors it.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
