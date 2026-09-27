import { motion } from 'motion/react';
import { MessageSquare, Search, FileText, Sparkles, Footprints, Presentation } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Have a conversation with someone who knew your family before you did.',
    subtitle: 'An elder, an aunt, a cousin, a family friend—or sit with an old letter or photograph.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Investigate a person, place, name, story or cultural practice.',
    subtitle: 'Move past assumptions to trace the origins, geographical crossings, and meanings.',
    icon: Search,
  },
  {
    num: '03',
    title: 'Document what you discover.',
    subtitle: 'Write, sketch, record voice memos, or map family lineages in our private participant portal.',
    icon: FileText,
  },
  {
    num: '04',
    title: 'Reflect on what your discoveries mean.',
    subtitle: 'Notice the emotional patterns, the recurring strengths, and the parts you choose to re-examine.',
    icon: Sparkles,
  },
  {
    num: '05',
    title: 'Take one small action inspired by what you learn.',
    subtitle: 'Cook a recipe, learn key greetings in your ancestral tongue, or frame a photograph.',
    icon: Footprints,
  },
  {
    num: '06',
    title: 'Create something meaningful to share at the final Roots Showcase.',
    subtitle: 'An artifact, an essay, a map, or a story brought to the communal virtual table.',
    icon: Presentation,
  },
];

export function WhatYouWillDo() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 sm:py-36 bg-[#F6F1E6] text-[#1A1612] overflow-hidden border-y border-[#E2D6C0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono block mb-3 font-medium">
            Section 06 — The Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1612] font-normal tracking-tight">
            THIS IS NOT A WEBINAR.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-xl text-[#524638] font-light leading-relaxed">
            It is a four-week conversation with yourself, your family and a community of people asking similar questions.
          </p>
        </motion.div>

        {/* 6 Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 rounded-2xl bg-[#FCFAF5] border border-[#E4D7C2] hover:border-[#B85028]/60 transition-all duration-300 shadow-sm hover:shadow-md relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-[0.24em] text-[#8C6D46] px-2.5 py-1 rounded bg-[#EFE8D8] border border-[#DDD3BF]">
                      STEP {step.num}
                    </span>
                    <div className="p-2.5 rounded-full bg-[#EFE8D8] text-[#B85028] group-hover:text-[#FAF6F0] group-hover:bg-[#B85028] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#1A1612] font-normal leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-6 font-sans text-xs sm:text-sm text-[#6B5D4D] font-light leading-relaxed pt-4 border-t border-[#EDE4D2]">
                  {step.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Live cohort dynamics callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF6EE] border border-[#DDD3BF] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl text-[#1A1612]">
              Format: Live Weekly Gatherings + Intimate Inquiry Prompts
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5D4D] font-light">
              90-minute live interactive weekend sessions hosted on Zoom, accompanied by asynchronous journaling prompts.
            </p>
          </div>
          <div className="shrink-0 px-4 py-2 rounded-full border border-[#C98B32]/50 bg-[#F1E8D2] text-xs font-mono text-[#5C4524] font-medium">
            Weekly on Saturdays · Zoom
          </div>
        </motion.div>
      </div>
    </section>
  );
}
