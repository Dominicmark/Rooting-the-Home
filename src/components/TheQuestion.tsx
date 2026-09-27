import { motion } from 'motion/react';

export function TheQuestion() {
  return (
    <section
      id="the-question"
      className="relative w-full py-32 sm:py-44 md:py-52 bg-[#FAF6EE] text-[#1A1612] overflow-hidden border-b border-[#E8DFC8]"
    >
      {/* Subtle organic background warmth & grain nuance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,80,40,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Subtle Section Category Marker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-10"
        >
          <span className="text-[11px] uppercase tracking-[0.32em] text-[#8C6D46] font-mono font-medium">
            The Premise
          </span>
          <div className="w-8 h-px bg-[#B85028]/60 mx-auto mt-2" />
        </motion.div>

        {/* The Central Question */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#5C5245] font-light italic leading-snug">
            When someone asks,
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A1612] font-normal leading-[1.15] tracking-tight">
            &ldquo;Where are you from?&rdquo;
            <br />
            <span className="text-[#B85028]">how long is your real answer?</span>
          </h2>
        </motion.div>

        {/* Reflective prose below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#3D352E] leading-relaxed font-normal tracking-wide">
            Our identities are rarely contained in a passport, a profession or a single place.
          </p>
          <p className="mt-6 font-sans text-sm sm:text-base md:text-lg text-[#6B5D4D] leading-relaxed font-light">
            They are shaped by people, names, languages, migrations, memories, relationships,
            traditions and stories passed down — and sometimes by the stories that were interrupted or forgotten.
          </p>
        </motion.div>

        {/* Visual anchor / breathing divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-16 h-px bg-[#D9CEB8] mx-auto mt-16"
        />
      </div>
    </section>
  );
}
