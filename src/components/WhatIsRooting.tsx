import { motion } from 'motion/react';
import { Compass, BookOpen, HeartHandshake } from 'lucide-react';
import { MediaAsset } from '../config/mediaConfig';

interface WhatIsRootingProps {
  image: MediaAsset;
}

export function WhatIsRooting({ image }: WhatIsRootingProps) {
  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E8E0D4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Editorial Accent */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#B85028] font-mono font-medium">
                The Intention
              </span>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight leading-[1.08]">
                ROOTING <br className="hidden sm:inline" />
                THE HOME
              </h2>

              <p className="mt-4 font-serif text-lg sm:text-xl text-[#5C5042] italic font-light">
                An invitation into curiosity, not prescription.
              </p>
            </div>

            {/* Editorial photography with subtle frame */}
            <div className="mt-8">
              <div className="relative group overflow-hidden rounded-xl bg-[#F0EAE1] border border-[#DDD3C4] shadow-md">
                <motion.img
                  initial={{ scale: 1.02 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[360px] sm:h-[420px] object-cover object-bottom filter saturate-[0.95] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {image.caption && (
                <p className="mt-2.5 text-xs font-sans text-[#7A6C5B] tracking-wide font-light italic">
                  {image.caption}
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Copy & Framing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-6"
          >
            <div className="space-y-4">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] font-normal leading-snug">
                Uncover what shaped you. <br />
                <span className="text-[#B85028]">Decide what you carry forward.</span>
              </p>

              {/* Scannable 3-point bullet summary */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] mt-2 shrink-0" />
                  <p className="font-sans text-sm sm:text-base text-[#4A4036] font-light leading-relaxed">
                    <strong className="font-medium text-[#1C1917]">Investigate Origins:</strong> Unpack the names, migrations, and unspoken family stories.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] mt-2 shrink-0" />
                  <p className="font-sans text-sm sm:text-base text-[#4A4036] font-light leading-relaxed">
                    <strong className="font-medium text-[#1C1917]">Exercise Agency:</strong> Discern which traditions to honor and which burdens to lay down.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] mt-2 shrink-0" />
                  <p className="font-sans text-sm sm:text-base text-[#4A4036] font-light leading-relaxed">
                    <strong className="font-medium text-[#1C1917]">Harvest Legacy:</strong> Create a tangible artifact of memory for those who come after.
                  </p>
                </div>
              </div>
            </div>

            {/* Crucial Distinction Callout */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#F4EEE5] border border-[#E2D8CA] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B85028]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#B85028] font-semibold block mb-1.5">
                The Guiding Principle
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#1C1917] font-normal leading-snug italic">
                &ldquo;You are not being asked to discover the &lsquo;correct&rsquo; version of yourself. You are gathering pieces to live with intention.&rdquo;
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBD0] shadow-sm"
              >
                <Compass className="w-5 h-5 text-[#B85028] mb-2" />
                <h4 className="font-serif text-sm text-[#1C1917] font-medium">Inquiry Over Answers</h4>
                <p className="mt-1 text-xs text-[#7A6C5B] leading-relaxed font-light">
                  Asking the questions that open memories and unlock dialogue.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBD0] shadow-sm"
              >
                <BookOpen className="w-5 h-5 text-[#384B3B] mb-2" />
                <h4 className="font-serif text-sm text-[#1C1917] font-medium">Living Archive</h4>
                <p className="mt-1 text-xs text-[#7A6C5B] leading-relaxed font-light">
                  Tracing names, recipes, languages, migrations, and unspoken gaps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DBD0] shadow-sm"
              >
                <HeartHandshake className="w-5 h-5 text-[#C07828] mb-2" />
                <h4 className="font-serif text-sm text-[#1C1917] font-medium">Community Ground</h4>
                <p className="mt-1 text-xs text-[#7A6C5B] leading-relaxed font-light">
                  Walking alongside others seeking deeper roots and honest clarity.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
