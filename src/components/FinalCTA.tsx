import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MediaAsset } from '../config/mediaConfig';
import { PROGRAM_CONFIG } from '../config/programContent';
import { Countdown } from './Countdown';

interface FinalCTAProps {
  finalImage: MediaAsset;
  onOpenEnrollment: (tier?: 'early' | 'standard' | 'supported') => void;
}

export function FinalCTA({ finalImage, onOpenEnrollment }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative w-full py-36 sm:py-48 bg-[#0E0C0A] text-[#FAF6F0] overflow-hidden flex items-center justify-center"
    >
      {/* Cinematic Background Image Layer with gentle zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={finalImage.url}
          alt={finalImage.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.38] saturate-[0.85]"
          loading="lazy"
        />
        {/* Layered dark & earthy gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/70 to-[#0E0C0A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,12,10,0.85)_100%)]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FAF6F0]/20 bg-[#161310]/60 backdrop-blur-md text-[11px] font-mono tracking-[0.24em] uppercase text-[#E4DCD0] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C98B32]" />
          <span>Founding Cohort · 10 October 2026</span>
        </motion.div>

        {/* Large Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF6F0] font-normal tracking-tight leading-[1.1]">
            YOU DON’T NEED TO HAVE
            <br />
            <span className="text-[#A89885] italic">ALL THE ANSWERS.</span>
          </h2>

          <p className="font-serif text-2xl sm:text-4xl text-[#E28863] font-light">
            START WITH THE QUESTIONS.
          </p>
        </motion.div>

        {/* Supporting Movement Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-6 font-serif text-sm sm:text-base uppercase tracking-[0.24em] text-[#CBBFB0]"
        >
          <span>Look back.</span>
          <span className="w-1 h-1 rounded-full bg-[#54493C]" />
          <span>Look within.</span>
          <span className="w-1 h-1 rounded-full bg-[#54493C]" />
          <span>Live forward.</span>
        </motion.div>

        {/* Live Kickoff Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8"
        >
          <Countdown variant="hero" />
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={PROGRAM_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="final-section-join-cta"
            className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-2xl hover:shadow-[#B85028]/30 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 cursor-pointer no-underline"
          >
            <span>Join the Founding Cohort</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-xs text-[#7A6C5B] font-light"
        >
          A calm, intimate space for personal discovery. Virtual kickoff begins 10 October 2026.
        </motion.p>
      </div>
    </section>
  );
}
