import { motion } from 'motion/react';
import { Compass, BookOpen, Layers, Users, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HighlightsOverviewProps {
  onSelectSection: (sectionId: string) => void;
  onOpenEnrollment: () => void;
}

export function HighlightsOverview({ onSelectSection }: HighlightsOverviewProps) {
  const highlights = [
    {
      id: 'the-question',
      num: '01',
      tag: 'The Premise',
      title: 'The Unspoken Questions',
      desc: 'Where do your roots begin? Explore the unspoken narratives and ancestral ties that shape who you are.',
      icon: Compass,
      accent: '#E28863',
    },
    {
      id: 'journey',
      num: '02',
      tag: 'Curriculum',
      title: 'Four Weeks. Four Questions.',
      desc: 'Week 1: The Root · Week 2: The Vessel · Week 3: The Tree · Week 4: The Harvest.',
      icon: BookOpen,
      accent: '#C98B32',
    },
    {
      id: 'experience',
      num: '03',
      tag: 'Format',
      title: 'Not a Webinar. An Active Quest.',
      desc: 'Audio prompts, physical artifacts, guided family interviews, and intimate weekly circles.',
      icon: Layers,
      accent: '#B85028',
    },
    {
      id: 'speakers',
      num: '04',
      tag: 'Guiding Voices',
      title: 'Webinar & Guest Speakers',
      desc: 'Steffi B. Nineza (Mastercard Fdn), Felix (Historian & Researcher), and A’Monica Hubbard (Kugaruka Iwacu).',
      icon: Users,
      accent: '#E28863',
    },
    {
      id: 'showcase',
      num: '05',
      tag: 'Artifacts',
      title: 'The Roots Showcase',
      desc: 'The tangible harvest of family recipes, restored audio, photo archives, and written lineages.',
      icon: Sparkles,
      accent: '#C98B32',
    },
    {
      id: 'pricing',
      num: '06',
      tag: 'Cohort',
      title: 'Founding Cohort Enrollment',
      desc: 'Starts 10 October 2026. Strictly limited to 25 participants across global timezones.',
      icon: CheckCircle2,
      accent: '#B85028',
    },
  ];

  return (
    <section id="highlights" className="w-full bg-[#12100E] border-y border-[#25201A] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header with clear narrative orientation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#25201A]"
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C98B32] block mb-2">
              At A Glance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-normal tracking-tight">
              The Journey in Six Movements
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A89885] max-w-md leading-relaxed font-light">
            Skip directly to any section of the journey, or browse the core pillars below.
          </p>
        </motion.div>

        {/* 6 Clean Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectSection(item.id)}
                className="group p-6 sm:p-7 rounded-2xl bg-[#181512] border border-[#2B241D] hover:border-[#7A6C5B] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-5">
                    <span className="font-mono text-xs text-[#7A6C5B] group-hover:text-[#FAF6F0] transition-colors">
                      {item.num} / 06
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-current"
                      style={{ color: item.accent }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#E4DCD0] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF6F0] group-hover:text-[#E28863] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#A89885] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#25201A] flex items-center justify-between text-xs font-mono text-[#7A6C5B] group-hover:text-[#FAF6F0] transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B85028] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
