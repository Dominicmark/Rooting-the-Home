import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Users, Sparkles, BookOpen } from 'lucide-react';
import { MEDIA_CONFIG } from '../config/mediaConfig';

interface ThePracticeProps {
  onOpenEnrollment: () => void;
}

export function ThePractice({ onOpenEnrollment }: ThePracticeProps) {
  const practiceSteps = [
    {
      num: '01',
      title: 'Weekly Live Circles',
      desc: 'Four 2-hour Saturday gatherings with guided discussions and intimate breakout circles.',
      icon: Users,
    },
    {
      num: '02',
      title: 'The Elder Dialogue',
      desc: 'Gentle prompts to interview a relative and preserve oral memory without pressure.',
      icon: BookOpen,
    },
    {
      num: '03',
      title: 'Weekly Inquiry Guides',
      desc: 'Quiet reflections, audio prompts, and lineage exercises tailored to your schedule.',
      icon: Compass,
    },
    {
      num: '04',
      title: 'One Rooted Action',
      desc: 'A tangible living practice—cooking an inherited dish, learning phrases, or framing an archive photo.',
      icon: Sparkles,
    },
  ];

  const harvestItems = [
    'Family Lineage & Migration Map',
    'Restored Audio or Photo Essay',
    'Handwritten Family Recipe & Memory',
    'Personal Statement of Belonging',
  ];

  return (
    <section
      id="practice"
      className="relative w-full py-28 sm:py-36 bg-[#F5EFE6] text-[#1C1917] border-b border-[#E4DBD0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono font-medium block mb-3">
            The Practice &amp; The Harvest
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
            AN ACTIVE QUEST,
            <br />
            <span className="text-[#5C5042] italic">NOT A PASSIVE LECTURE.</span>
          </h2>
          <p className="mt-5 font-sans text-base sm:text-lg text-[#6B5D4D] font-light leading-relaxed">
            Rooting the Home is rooted in dialogue and living discovery. You aren’t listening to lectures—you are gathering the fragments of your own story.
          </p>
        </div>

        {/* Two-Column Harmonious Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: How We Gather (4 Movements) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-normal mb-5">
              The Four Weekly Practices
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {practiceSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2D8CA] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="font-mono text-xs text-[#B85028] font-medium">
                          {step.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] flex items-center justify-center text-[#B85028]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg text-[#1C1917] font-medium mb-1.5">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#6B5D4D] font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: The Roots Harvest Card & Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border border-[#E2D8CA] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-5 bg-[#F0EAE1] border border-[#E2D8CA]">
                <img
                  src={MEDIA_CONFIG.showcaseImage.url}
                  alt={MEDIA_CONFIG.showcaseImage.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <span className="text-[11px] uppercase tracking-[0.24em] text-[#B85028] font-mono font-medium block mb-1">
                The Culmination
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-normal mb-2">
                The Tangible Roots Harvest
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#6B5D4D] font-light leading-relaxed mb-5">
                Every member shares one chosen artifact at our final virtual community table:
              </p>

              <div className="space-y-2 pt-3 border-t border-[#EAE3D6]">
                {harvestItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#443E38]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#EAE3D6]">
              <button
                onClick={onOpenEnrollment}
                className="w-full py-3 px-5 rounded-xl bg-[#B85028] hover:bg-[#9E3F1C] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Reserve Your Place</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
