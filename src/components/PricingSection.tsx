import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Calendar, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAM_CONFIG, WORKBOOK_CONFIG } from '../config/programContent';
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
      className="relative w-full py-28 sm:py-36 bg-[#F5EFE6] text-[#1C1917] border-t border-[#E4DBD0] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono block mb-3 font-medium">
            Participation &amp; Cohort
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
            THE FOUNDING COHORT.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#6B5D4D] font-light leading-relaxed">
            Four weeks of live guided virtual gatherings, guest speakers, and communal harvest.
          </p>
        </motion.div>

        {/* PROMINENT Featured Kickoff Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border-2 border-[#B85028]/60 shadow-md max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left: Big Bold Date */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#E2D8CA] text-[#B85028] text-xs font-mono uppercase tracking-widest font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Live Cohort Gathering</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#7A6C5B] block mb-1">
                  Official Launch Date
                </span>
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
                  {PROGRAM_CONFIG.kickoffDate}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B5D4D] font-light">
                <Clock className="w-4 h-4 text-[#B85028]" />
                <span>{PROGRAM_CONFIG.kickoffTimeRwanda}</span>
              </div>
            </div>

            {/* Right: Interactive Timezone Checker */}
            <div className="md:max-w-xs w-full p-5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA] space-y-3 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B85028] font-medium">
                <Globe className="w-4 h-4" />
                <span>Check Your Local Time</span>
              </div>
              <select
                value={selectedTz}
                onChange={(e) => setSelectedTz(Number(e.target.value))}
                className="w-full text-xs font-mono bg-[#FFFFFF] border border-[#E2D8CA] rounded-lg p-2.5 text-[#1C1917] focus:outline-none focus:border-[#B85028] cursor-pointer"
              >
                {TIMEZONES.map((tz, idx) => (
                  <option key={tz.city} value={idx}>
                    {tz.city}: {tz.time}
                  </option>
                ))}
              </select>
              <div className="p-3 rounded-lg bg-[#FFFFFF] text-center border border-[#E2D8CA]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6C5B] block">Selected Time</span>
                <span className="text-sm font-mono text-[#1C1917] font-semibold">{TIMEZONES[selectedTz].time}</span>
              </div>
            </div>
          </div>

          {/* Integrated Live Countdown Strip */}
          <div className="relative z-10 mt-8 pt-8 border-t border-[#EAE3D6]">
            <Countdown variant="strip" onOpenEnrollment={() => onSelectTier('early')} />
          </div>
        </motion.div>

        {/* Editorial Participation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: The Required Workbook */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border-2 border-[#B85028] relative flex flex-col justify-between shadow-md"
          >
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#B85028] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-medium">
              Mandatory Prerequisite
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#B85028] block mb-3 font-semibold">
                Required Workbook
              </span>

              {/* Book Photo Thumbnail & Title */}
              <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA]">
                <div className="w-16 h-22 rounded-lg overflow-hidden shrink-0 shadow-md border border-[#D5C7B7] bg-[#2D241E]">
                  <img
                    src={WORKBOOK_CONFIG.imageUrl}
                    alt={WORKBOOK_CONFIG.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-normal leading-tight">
                    Know Your Truth, Know Your Roots
                  </h3>
                  <span className="text-xs font-mono text-[#B85028] block mt-1 font-medium">
                    Official Companion Guide
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#6B5D4D] font-light mb-6">
                Every cohort participant must have the official workbook to follow the weekly exercises, maps, and reflections.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#EAE3D6]">
                {[
                  '148-page archival lay-flat linen companion journal',
                  'Week-by-week prompts matching all live circles',
                  'Elder dialogue question bank & oral recording sheets',
                  'Lineage matrix & ancestral homeland mapping charts',
                  'Permanent personal heirloom to pass down to future generations',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#B85028] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#52473D] font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={WORKBOOK_CONFIG.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-order-workbook-cta"
                className="w-full py-4 rounded-xl bg-[#B85028] hover:bg-[#9E3F1C] text-white text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm text-center flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <span>Order Now on knowmyroot.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Free Cohort Admission */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#E2D8CA] flex flex-col justify-between hover:border-[#B85028]/50 transition-colors shadow-xs"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#7A6C5B] block mb-2 font-medium">
                Live Cohort Access
              </span>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-5xl sm:text-6xl text-[#1C1917] font-normal">
                  $0 FREE
                </span>
                <span className="text-xs font-mono text-[#B85028] font-medium">zero tuition</span>
              </div>

              <p className="text-xs text-[#7A6C5B] font-light mb-8">
                Cohort sessions and live webinar series are 100% free with your workbook copy.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#EAE3D6]">
                {[
                  'Four live guided virtual circles (90 mins each)',
                  'Live fireside sessions with guest speakers & Q&A',
                  'Intimate small-group breakout discussions',
                  'Participant seat at the final Roots Showcase table',
                  'Private participant portal and reflection circle',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#7A6C5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#52473D] font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-enroll-free-cta"
                className="w-full py-4 rounded-xl border border-[#B85028] text-[#B85028] hover:bg-[#B85028] hover:text-white text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <span>Enroll Free (With Workbook)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Workbook Requirement Notice */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E2D8CA] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-[#1C1917]">
              Free Cohort · Essential Companion Workbook
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5D4D] font-light max-w-2xl">
              There is no fee for the four weeks of live facilitation or webinars. Owning the workbook, <em>Know Your Truth, Know Your Roots</em>, ensures everyone writes and creates in unison.
            </p>
          </div>

          <a
            href={PROGRAM_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="apply-supported-place-btn"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#B85028] text-xs font-mono uppercase tracking-wider text-white hover:bg-[#9E3F1C] transition-colors cursor-pointer font-medium no-underline shadow-xs"
          >
            Get the Workbook
          </a>
        </motion.div>

        {/* Subtitle / Program Info line */}
        <div className="mt-10 text-center text-xs font-sans text-[#7A6C5B] tracking-wide">
          Founding cohort · Four-week virtual experience · Beginning 10 October 2026
        </div>
      </div>
    </section>
  );
}
