import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

const COMMUNITY_PILLARS = [
  {
    title: 'Cross-Cultural & Diaspora Seekers',
    bullets: [
      'Moving between worlds, languages, and homelands',
      'Seeking an integrated, grounded anchor in who you are',
      'Reconnecting across geographical and generational distance',
    ],
  },
  {
    title: 'Keepers of Memory & Parents',
    bullets: [
      'Recording oral memories before family custodians pass',
      'Preserving recipes, heirloom rituals, and inherited stories',
      'Anchoring children in deep roots before the world defines them',
    ],
  },
  {
    title: 'Those Ready for Honest Inquiry',
    bullets: [
      'Curious about the migrations and naming traditions of elders',
      'Uncovering the interrupted stories never told aloud',
      'Deciding consciously what to carry and what to lay down',
    ],
  },
];

export function WhoIsThisFor() {
  return (
    <section
      id="who-is-this-for"
      className="relative w-full py-28 sm:py-36 bg-[#FAF8F5] text-[#1C1917] overflow-hidden border-b border-[#E8E0D4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B85028] font-mono block mb-3 font-medium">
            The Community
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight">
            WHO BELONGS HERE.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#6B5D4D] font-light leading-relaxed">
            Belonging does not require an unbroken pedigree. If you carry curiosity about where you come from, you belong in this circle.
          </p>
        </motion.div>

        {/* Streamlined 2x2 Grid with Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMUNITY_PILLARS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 sm:p-9 rounded-2xl bg-[#FFFFFF] border border-[#E2D8CA] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="w-2 h-2 rounded-full bg-[#B85028] block mb-3.5" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="mt-6 pt-5 border-t border-[#EFE7DC] space-y-2.5">
                {item.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52473D] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B85028] shrink-0 mt-1.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Welcoming Fourth Box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-9 rounded-2xl bg-[#F5EFE6] border border-[#E2D8CA] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B85028] font-medium mb-3">
                <Heart className="w-4 h-4 text-[#B85028]" />
                <span>The Open Invitation</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#1C1917] font-normal italic leading-snug">
                &ldquo;No prior research or complete family tree is required. The fragmented pieces you hold right now are more than enough to begin.&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E8DEC8] flex items-center gap-2 text-xs font-mono text-[#7A6C5B]">
              <Sparkles className="w-3.5 h-3.5 text-[#B85028]" />
              <span>Welcoming all diaspora and heritage seekers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
