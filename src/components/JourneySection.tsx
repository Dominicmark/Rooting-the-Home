import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { JOURNEY_WEEKS } from '../config/programContent';

export function JourneySection() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section
      id="journey"
      className="relative w-full py-28 sm:py-36 bg-[#F5EFE6] text-[#1C1917] overflow-hidden border-b border-[#E4DBD0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2D8CA]"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono font-medium block mb-3">
              The Arc of Movement
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
              FOUR WEEKS.
              <br />
              <span className="text-[#5C5042]">FOUR QUESTIONS.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-sm sm:text-base text-[#6B5D4D] max-w-md font-light">
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
                className={`text-left p-5 rounded-xl transition-all duration-300 relative border cursor-pointer ${
                  activeWeek === idx
                    ? 'bg-[#FFFFFF] border-[#B85028] shadow-md'
                    : 'bg-[#FAF8F5] border-[#E4DBD0] hover:border-[#B85028]/50 hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] font-mono font-medium ${
                      activeWeek === idx ? 'text-[#B85028]' : 'text-[#7A6C5B]'
                    }`}
                  >
                    {week.weekNumber}
                  </span>
                  {activeWeek === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#B85028]" />
                  )}
                </div>
                <h3 className="font-serif text-lg text-[#1C1917] font-medium leading-snug">
                  {week.title}
                </h3>
              </button>
            ))}
          </motion.div>

          {/* Active Week Editorial Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 sm:p-14 rounded-2xl bg-[#FFFFFF] border border-[#E2D8CA] shadow-md relative overflow-hidden"
            >
              <div className="grid grid-cols-12 gap-10 relative z-10 items-center">
                {/* Left Side: Week Title, Concise Description & Bullet Takeaways */}
                <div className="col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#E2D8CA] text-xs font-mono text-[#B85028] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{JOURNEY_WEEKS[activeWeek].weekNumber}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
                    {JOURNEY_WEEKS[activeWeek].title}
                  </h3>

                  <p className="font-sans text-base text-[#52473D] font-light leading-relaxed">
                    {JOURNEY_WEEKS[activeWeek].description}
                  </p>

                  {/* Concise bullet points */}
                  <div className="space-y-2 pt-1">
                    {JOURNEY_WEEKS[activeWeek].takeaways.map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#443E38]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] shrink-0" />
                        <span className="font-light">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {JOURNEY_WEEKS[activeWeek].themes.map((theme) => (
                        <span
                          key={theme}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E4DBD0] text-[11px] text-[#7A6C5B] font-mono"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Guiding Inquiry Card */}
                <div className="col-span-5">
                  <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#7A6C5B] uppercase tracking-wider font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#B85028]" />
                      <span>The Guiding Inquiry</span>
                    </div>

                    <p className="font-serif text-xl sm:text-2xl text-[#1C1917] italic font-light leading-relaxed">
                      &ldquo;{JOURNEY_WEEKS[activeWeek].inquiry}&rdquo;
                    </p>

                    <div className="pt-4 border-t border-[#E8E0D4] flex items-center justify-between">
                      <button
                        onClick={() => setActiveWeek((prev) => (prev > 0 ? prev - 1 : 3))}
                        className="p-2 rounded hover:bg-[#F0EAE0] text-[#7A6C5B] hover:text-[#1C1917] transition-colors cursor-pointer"
                        aria-label="Previous week"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <span className="text-xs font-mono text-[#7A6C5B]">
                        Step {activeWeek + 1} of 4
                      </span>

                      <button
                        onClick={() => setActiveWeek((prev) => (prev < 3 ? prev + 1 : 0))}
                        className="p-2 rounded hover:bg-[#F0EAE0] text-[#7A6C5B] hover:text-[#1C1917] transition-colors cursor-pointer"
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
              className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E2D8CA] space-y-3.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B85028] font-medium">
                  {week.weekNumber}
                </span>
                <span className="text-xs font-mono text-[#7A6C5B]">Step {idx + 1} of 4</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-normal">{week.title}</h3>
              <p className="font-sans text-xs sm:text-sm text-[#52473D] font-light leading-relaxed">
                {week.description}
              </p>

              {/* Concise bullet points */}
              <div className="space-y-1.5 pt-1">
                {week.takeaways.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-[#443E38]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A6C5B] block mb-1">
                  Guiding Inquiry
                </span>
                <p className="font-serif text-xs sm:text-sm text-[#1C1917] italic font-light">
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
