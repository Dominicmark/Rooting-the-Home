import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Calendar, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';
import { Countdown } from './Countdown';

interface PricingSectionProps {
  onSelectTier: (tier: 'early' | 'standard' | 'supported') => void;
}

const TIMEZONES = [
  { city: 'Kigali / CAT', time: '4:30 PM – 6:30 PM' },
  { city: 'London / BST', time: '3:30 PM – 5:30 PM' },
  { city: 'Paris / CEST', time: '4:30 PM – 6:30 PM' },
  { city: 'Nairobi / EAT', time: '5:30 PM – 7:30 PM' },
  { city: 'New York / EDT', time: '10:30 AM – 12:30 PM' },
  { city: 'Toronto / EDT', time: '10:30 AM – 12:30 PM' },
  { city: 'Johannesburg / SAST', time: '4:30 PM – 6:30 PM' },
];

export function PricingSection({ onSelectTier }: PricingSectionProps) {
  const [selectedTz, setSelectedTz] = useState(0);

  return (
    <section
      id="pricing"
      className="relative w-full py-28 sm:py-36 bg-[#161310] text-[#FAF6F0] border-t border-[#25201A] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98B32] font-mono block mb-3">
            Section 12 — Participation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
            JOIN THE FOUNDING COHORT.
          </h2>
          <p className="mt-5 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed">
            Four weeks of live guided virtual gatherings, asynchronous inquiry, and intimate community connection.
          </p>
        </motion.div>

        {/* PROMINENT Featured Kickoff Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#241D17] to-[#1A1612] border-2 border-[#B85028]/60 shadow-2xl shadow-[#B85028]/15 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B85028]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left: Big Bold Date */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85028]/20 border border-[#B85028]/40 text-[#E28863] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Live Cohort Gathering</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#A89885] block mb-1">
                  Official Launch Date
                </span>
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
                  {PROGRAM_CONFIG.kickoffDate}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#CBBFB0] font-light">
                <Clock className="w-4 h-4 text-[#C98B32]" />
                <span>{PROGRAM_CONFIG.kickoffTimeRwanda}</span>
              </div>
            </div>

            {/* Right: Interactive Timezone Checker */}
            <div className="md:max-w-xs w-full p-5 rounded-xl bg-[#14110E] border border-[#383027] space-y-3 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E28863]">
                <Globe className="w-4 h-4" />
                <span>Check Your Local Time</span>
              </div>
              <select
                value={selectedTz}
                onChange={(e) => setSelectedTz(Number(e.target.value))}
                className="w-full text-xs font-mono bg-[#1E1914] border border-[#383027] rounded-lg p-2.5 text-[#FAF6F0] focus:outline-none focus:border-[#B85028]"
              >
                {TIMEZONES.map((tz, idx) => (
                  <option key={tz.city} value={idx}>
                    {tz.city}: {tz.time}
                  </option>
                ))}
              </select>
              <div className="p-3 rounded bg-[#1A1612] text-center border border-[#2B241D]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6C5B] block">Selected Time</span>
                <span className="text-sm font-mono text-[#FAF6F0] font-semibold">{TIMEZONES[selectedTz].time}</span>
              </div>
            </div>
          </div>

          {/* Integrated Live Countdown Strip */}
          <div className="relative z-10 mt-8 pt-8 border-t border-[#383027]/70">
            <Countdown variant="strip" onOpenEnrollment={() => onSelectTier('early')} />
          </div>
        </motion.div>

        {/* Editorial Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tier 1: Early Bird */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#1D1915] border-2 border-[#B85028] relative flex flex-col justify-between shadow-2xl shadow-[#B85028]/10"
          >
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#B85028] text-[#FAF6F0] text-[10px] font-mono uppercase tracking-[0.2em]">
              Founding Tier
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#E28863] block mb-2">
                {PROGRAM_CONFIG.pricing.earlyBird.label}
              </span>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-5xl sm:text-6xl text-[#FAF6F0] font-normal">
                  US$65
                </span>
                <span className="text-xs font-mono text-[#A89885]">one-time</span>
              </div>

              <p className="text-xs text-[#CBBFB0] font-light mb-8">
                {PROGRAM_CONFIG.pricing.earlyBird.note}
              </p>

              <div className="space-y-3.5 pt-4 border-t border-[#383027]">
                {[
                  'Four live 90-minute weekly guided virtual gatherings',
                  'Asynchronous weekly archival & inquiry prompts',
                  'Access to the private Roots participant circle',
                  'Participant entry for the final Roots Showcase',
                  'Lifetime access to personal inquiry templates',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#B85028] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#E4DCD0] font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-early-bird-cta"
                className="w-full py-4 rounded-xl bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <span>Join the Founding Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Tier 2: Standard */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#1D1915] border border-[#383027] flex flex-col justify-between hover:border-[#7A6C5B] transition-colors"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#A89885] block mb-2">
                {PROGRAM_CONFIG.pricing.standard.label}
              </span>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-5xl sm:text-6xl text-[#FAF6F0] font-normal">
                  US$85
                </span>
                <span className="text-xs font-mono text-[#A89885]">one-time</span>
              </div>

              <p className="text-xs text-[#A89885] font-light mb-8">
                {PROGRAM_CONFIG.pricing.standard.note}
              </p>

              <div className="space-y-3.5 pt-4 border-t border-[#383027]">
                {[
                  'Four live 90-minute weekly guided virtual gatherings',
                  'Asynchronous weekly archival & inquiry prompts',
                  'Access to the private Roots participant circle',
                  'Participant entry for the final Roots Showcase',
                  'Lifetime access to personal inquiry templates',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#7A6C5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#CBBFB0] font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => onSelectTier('standard')}
                id="pricing-standard-cta"
                className="w-full py-4 rounded-xl border border-[#CBBFB0]/40 hover:border-[#FAF6F0] text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.18em] transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Standard Tier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Supported Places Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0E0C0A] border border-[#383027] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5">
            <h4 className="font-serif text-lg text-[#FAF6F0]">
              Limited supported places available.
            </h4>
            <p className="text-xs sm:text-sm text-[#A89885] font-light max-w-2xl">
              {PROGRAM_CONFIG.pricing.supportedNote}
            </p>
          </div>

          <button
            onClick={() => onSelectTier('supported')}
            id="apply-supported-place-btn"
            className="shrink-0 px-5 py-2.5 rounded-lg border border-[#C98B32]/50 text-xs font-mono uppercase tracking-wider text-[#E4DCD0] hover:bg-[#C98B32]/10 transition-colors cursor-pointer"
          >
            Request Supported Place
          </button>
        </motion.div>

        {/* Subtitle / Program Info line */}
        <div className="mt-10 text-center text-xs font-sans text-[#7A6C5B] tracking-wide">
          Founding cohort · Four-week virtual experience · Beginning 10 October 2026
        </div>
      </div>
    </section>
  );
}
