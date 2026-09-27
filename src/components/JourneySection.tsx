import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { JOURNEY_WEEKS } from '../config/programContent';

export function JourneySection() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section
      id="journey"
      className="relative w-full py-28 sm:py-36 bg-[#0E0C0A] text-[#FAF6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#25201A]"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98B32] font-mono block mb-3">
              Section 04 — The Arc of Movement
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
              FOUR WEEKS.
              <br />
              <span className="text-[#E4DCD0]">FOUR QUESTIONS.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-sm sm:text-base text-[#A89885] max-w-md font-light">
            A staged progression from origin to agency. Each week opens one doorway into your living lineage.
          </p>
        </motion.div>

        {/* Desktop Interactive Journey Navigator */}
        <div className="hidden lg:block">
          {/* Week Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="grid grid-cols-4 gap-4 mb-8"
          >
            {JOURNEY_WEEKS.map((week, idx) => (
              <button
                key={week.weekNumber}
                onClick={() => setActiveWeek(idx)}
                className={`text-left p-5 rounded-xl transition-all duration-300 relative border ${
                  activeWeek === idx
                    ? 'bg-[#1D1915] border-[#B85028] shadow-lg shadow-[#B85028]/10'
                    : 'bg-[#161310]/60 border-[#25201A] hover:border-[#383027] hover:bg-[#1D1915]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] font-mono ${
                      activeWeek === idx ? 'text-[#E28863]' : 'text-[#7A6C5B]'
                    }`}
                  >
                    {week.weekNumber}
                  </span>
                  {activeWeek === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#B85028] animate-ping" />
                  )}
                </div>
                <h3 className="font-serif text-lg text-[#FAF6F0] font-medium leading-snug">
                  {week.title}
                </h3>
              </button>
            ))}
          </motion.div>

          {/* Active Week Editorial Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 sm:p-14 rounded-2xl bg-gradient-to-br from-[#1D1915] to-[#161310] border border-[#383027] relative overflow-hidden"
            >
              {/* Background watermark of week number */}
              <div className="absolute right-8 bottom-4 font-serif text-9xl font-bold text-[#FAF6F0]/[0.03] select-none pointer-events-none">
                0{activeWeek + 1}
              </div>

              <div className="grid grid-cols-12 gap-10 relative z-10 items-center">
                {/* Left Side: Week Title & Description */}
                <div className="col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85028]/15 border border-[#B85028]/30 text-xs font-mono text-[#E28863]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{JOURNEY_WEEKS[activeWeek].weekNumber}</span>
                  </div>

                  <h3 className="font-serif text-4xl sm:text-5xl text-[#FAF6F0] font-normal leading-tight">
                    {JOURNEY_WEEKS[activeWeek].title}
                  </h3>

                  <p className="font-sans text-xl text-[#E4DCD0] font-light leading-relaxed">
                    {JOURNEY_WEEKS[activeWeek].description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#C98B32] mb-3">
                      Weekly Focus Themes
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {JOURNEY_WEEKS[activeWeek].themes.map((theme) => (
                        <span
                          key={theme}
                          className="px-3.5 py-1.5 rounded-full bg-[#25201A] border border-[#383027] text-xs text-[#CBBFB0] font-light"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Guiding Inquiry Card */}
                <div className="col-span-5">
                  <div className="p-8 rounded-xl bg-[#161310] border border-[#383027]/70 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A89885] uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-[#C98B32]" />
                      <span>The Guiding Inquiry</span>
                    </div>

                    <p className="font-serif text-xl sm:text-2xl text-[#FAF6F0] italic font-light leading-relaxed">
                      &ldquo;{JOURNEY_WEEKS[activeWeek].inquiry}&rdquo;
                    </p>

                    <div className="pt-4 border-t border-[#25201A] flex items-center justify-between">
                      <button
                        onClick={() => setActiveWeek((prev) => (prev > 0 ? prev - 1 : 3))}
                        className="p-2 rounded hover:bg-[#25201A] text-[#A89885] hover:text-[#FAF6F0] transition-colors"
                        aria-label="Previous week"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <span className="text-xs font-mono text-[#7A6C5B]">
                        Step {activeWeek + 1} of 4
                      </span>

                      <button
                        onClick={() => setActiveWeek((prev) => (prev < 3 ? prev + 1 : 0))}
                        className="p-2 rounded hover:bg-[#25201A] text-[#A89885] hover:text-[#FAF6F0] transition-colors"
                        aria-label="Next week"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion / Stack */}
        <div className="lg:hidden space-y-4">
          {JOURNEY_WEEKS.map((week, idx) => (
            <motion.div
              key={week.weekNumber}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-[#161310] border border-[#25201A] space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E28863]">
                  {week.weekNumber}
                </span>
                <span className="text-xs font-mono text-[#7A6C5B]">Week {idx + 1}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FAF6F0] font-normal">{week.title}</h3>
              <p className="font-sans text-sm text-[#CBBFB0] font-light leading-relaxed">
                {week.description}
              </p>
              <div className="p-4 rounded-lg bg-[#1D1915] border border-[#383027]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A89885] block mb-1">
                  Guiding Question
                </span>
                <p className="font-serif text-sm text-[#FAF6F0] italic font-light">
                  &ldquo;{week.inquiry}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
