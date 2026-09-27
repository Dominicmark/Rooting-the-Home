import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ArrowDown, ArrowUpRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';

interface HeroProps {
  videoUrl: string;
  posterUrl: string;
  onOpenEnrollment: (tier?: 'early' | 'standard' | 'supported') => void;
  onExploreJourney: () => void;
}

export function Hero({
  videoUrl,
  posterUrl,
  onOpenEnrollment,
  onExploreJourney,
}: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] max-h-[1080px] overflow-hidden flex flex-col justify-between"
    >
      {/* 1. Full-bleed Background Video / Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0E0C0A]">
        {/* Instant Poster Base Frame */}
        <img
          src={posterUrl}
          alt="Rooting the Home background preview"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] saturate-[0.9] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          loading="eager"
        />

        {/* Video stream with instant fallback fade */}
        {videoUrl && (
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            src={videoUrl}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-90' : 'opacity-0'
            }`}
          />
        )}

        {/* Minimal Subtle Scrim Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/40 to-[#0E0C0A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* 2. Top Spacer for Sticky Nav */}
      <div className="h-20 w-full z-10" />

      {/* 3. Pure Centerpiece */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center my-auto flex flex-col items-center">
        
        {/* Prominent High-Visibility Date Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#1A1612]/80 backdrop-blur-md border border-[#C98B32]/60 text-[#FAF6F0] mb-6 shadow-xl shadow-black/40"
        >
          <Calendar className="w-4 h-4 text-[#E28863]" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#FAF6F0]">
            Live Kickoff: {PROGRAM_CONFIG.kickoffDate}
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#C98B32]" />
          <span className="hidden sm:inline font-mono text-xs text-[#E4DCD0] tracking-wider">
            4:30 PM CAT (Virtual)
          </span>
        </motion.div>

        {/* Movement Triad */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#E4DCD0] mb-4"
        >
          Look Back <span className="text-[#C98B32] mx-2">·</span> Look Within <span className="text-[#C98B32] mx-2">·</span> Live Forward
        </motion.p>

        {/* High-Impact Minimal Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#FAF6F0] font-normal leading-[0.95]"
        >
          ROOTING
          <br />
          <span className="italic font-light text-[#E4DCD0]">THE HOME</span>
        </motion.h1>

        {/* Single Line Purpose Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 sm:mt-8 font-sans text-sm sm:text-base md:text-lg text-[#CBBFB0] font-light max-w-xl leading-relaxed tracking-wide"
        >
          A four-week guided virtual journey exploring identity, family memory, belonging, and cultural connection.
        </motion.p>

        {/* Primary Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={PROGRAM_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-minimal-join-cta"
            className="px-8 py-4 rounded-full bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:shadow-[#B85028]/40 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer no-underline"
          >
            <span>Join Founding Cohort</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* 4. Bottom Minimal Bar (Sound Toggle, Prominent Date & Scroll Cue) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between text-xs font-mono text-[#A89885]">
        {/* Audio Toggle */}
        <button
          onClick={toggleSound}
          id="hero-sound-toggle-btn"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E0C0A]/60 hover:bg-[#0E0C0A]/90 border border-[#FAF6F0]/15 text-[#FAF6F0] text-[11px] backdrop-blur-md transition-colors cursor-pointer"
          aria-label={isMuted ? 'Turn audio on' : 'Mute audio'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#7A6C5B]" />
              <span className="hidden sm:inline text-[#A89885]">Audio Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#E28863]" />
              <span className="hidden sm:inline text-[#FAF6F0]">Audio On</span>
            </>
          )}
        </button>

        {/* Prominent Kickoff Date Callout */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1612]/70 border border-[#383027] text-[#E4DCD0]">
          <Clock className="w-3.5 h-3.5 text-[#C98B32]" />
          <span className="text-[11px] tracking-widest uppercase font-semibold text-[#FAF6F0]">
            Kickoff: {PROGRAM_CONFIG.kickoffDate}
          </span>
        </div>

        {/* Scroll Cue */}
        <button
          onClick={onExploreJourney}
          className="flex items-center gap-2 text-[#A89885] hover:text-[#FAF6F0] transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B85028] animate-bounce" />
        </button>
      </div>
    </section>
  );
}
