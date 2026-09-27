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
      className="relative w-full py-28 sm:py-36 bg-[#161310] text-[#FAF6F0] border-y border-[#25201A]"
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C98B32] font-mono">
                Section 03 — The Intention
              </span>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight leading-[1.08]">
                ROOTING <br className="hidden sm:inline" />
                THE HOME
              </h2>

              <p className="mt-6 font-serif text-lg sm:text-xl text-[#E4DCD0] italic font-light">
                An invitation into curiosity, not prescription.
              </p>
            </div>

            {/* Editorial photography with subtle frame */}
            <div className="mt-10 relative group overflow-hidden rounded-xl bg-[#1D1915] border border-[#383027]/70">
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                src={image.url}
                alt={image.alt}
                className="w-full h-80 sm:h-96 object-cover object-center filter saturate-[0.88] brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/80 via-transparent to-transparent" />
              {image.caption && (
                <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-[#E4DCD0] tracking-wide font-light">
                  {image.caption}
                </div>
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
            <div className="space-y-6">
              <p className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal leading-snug">
                Rooting the Home is a four-week guided experience exploring identity, family history,
                belonging, rootedness and cultural connection.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#CBBFB0] leading-relaxed font-light">
                It is a space to investigate where you come from, understand what shaped you, and
                become more intentional about what you choose to carry forward.
              </p>
            </div>

            {/* Important Framing Callout Block */}
            <div className="p-7 sm:p-8 rounded-xl bg-[#1D1915] border border-[#B85028]/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B85028]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#E28863] font-medium block mb-2">
                A Crucial Distinction
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#FAF6F0] font-normal leading-snug">
                &ldquo;You are not being asked to discover the &lsquo;correct&rsquo; version of yourself.&rdquo;
              </p>
              <p className="mt-3 font-sans text-sm sm:text-base text-[#CBBFB0] font-light leading-relaxed">
                You are gathering pieces so that you can make more intentional choices about who you are becoming.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="p-4 rounded-lg bg-[#1D1915]/60 border border-[#25201A]"
              >
                <Compass className="w-5 h-5 text-[#C98B32] mb-2" />
                <h4 className="font-serif text-sm text-[#FAF6F0] font-medium">Inquiry Over Answers</h4>
                <p className="mt-1 text-xs text-[#A89885] leading-relaxed font-light">
                  Asking the questions that open memories and unlock dialogue.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="p-4 rounded-lg bg-[#1D1915]/60 border border-[#25201A]"
              >
                <BookOpen className="w-5 h-5 text-[#E28863] mb-2" />
                <h4 className="font-serif text-sm text-[#FAF6F0] font-medium">Living Archive</h4>
                <p className="mt-1 text-xs text-[#A89885] leading-relaxed font-light">
                  Tracing names, recipes, languages, migrations, and unspoken gaps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="p-4 rounded-lg bg-[#1D1915]/60 border border-[#25201A]"
              >
                <HeartHandshake className="w-5 h-5 text-[#FAF6F0] mb-2" />
                <h4 className="font-serif text-sm text-[#FAF6F0] font-medium">Community Ground</h4>
                <p className="mt-1 text-xs text-[#A89885] leading-relaxed font-light">
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
