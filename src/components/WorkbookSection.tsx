import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { WORKBOOK_CONFIG, PROGRAM_CONFIG } from '../config/programContent';

interface WorkbookSectionProps {
  onOpenEnrollment?: () => void;
}

export function WorkbookSection({ onOpenEnrollment }: WorkbookSectionProps) {
  // onOpenEnrollment is kept in interface for backwards compatibility if needed, but not used for popup form
  void onOpenEnrollment;

  return (
    <section
      id="workbook"
      className="relative w-full py-24 sm:py-32 bg-[#FAF6EE] text-[#1C1917] border-b border-[#E6DCBF] overflow-hidden"
    >
      {/* Subtle organic background warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(184,80,40,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2D8CA] text-[#B85028] text-xs font-mono tracking-widest uppercase mb-4 font-semibold shadow-2xs"
          >
            <span>The Required Companion</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight leading-[1.12]"
          >
            KNOW YOUR TRUTH,
            <br />
            <span className="text-[#B85028]">KNOW YOUR ROOTS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-sans text-base sm:text-lg text-[#5C5042] font-light leading-relaxed"
          >
            Participation in the four-week cohort is <strong className="font-semibold text-[#1C1917]">100% free</strong>.
            To take part, all you need is your copy of the official workbook so you can follow along with every weekly exercise, lineage reflection, and live circle.
          </motion.p>
        </div>

        {/* Clean Showcase Grid: Book on Left, Simple Explanation & Direct Action Links on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Full Book Display (Clickable directly to knowmyroot.com) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            {/* Clickable Book Cover linking directly to knowmyroot.com */}
            <a
              href={WORKBOOK_CONFIG.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(184,80,40,0.35)] cursor-pointer no-underline"
              style={{
                boxShadow: '18px 24px 45px -10px rgba(28,25,23,0.32), 0 0 0 1px rgba(184,80,40,0.2)',
              }}
              title="Click to order Know Your Truth, Know Your Roots on knowmyroot.com"
            >
              <img
                src={WORKBOOK_CONFIG.imageUrl}
                alt="Know Your Truth, Know Your Roots Workbook Cover"
                className="w-full h-full object-cover object-center filter saturate-[0.98] group-hover:scale-103 transition-transform duration-700"
                loading="eager"
              />

              {/* Gentle hover overlay indicating external order page */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-[#B85028] text-white flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-normal drop-shadow-sm">
                  Click to Order on knowmyroot.com
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-white/80 mt-1">
                  Opens official order page &rarr;
                </span>
              </div>
            </a>

            {/* Subtle caption */}
            <p className="mt-4 text-xs font-mono text-[#7A6C5B] text-center">
              Click the book cover to order on{' '}
              <a
                href={WORKBOOK_CONFIG.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B85028] underline underline-offset-2 hover:text-[#9E3F1C]"
              >
                knowmyroot.com
              </a>
            </p>
          </motion.div>

          {/* Right Column: Why You Need It & Direct Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Clear, simple why-you-need-the-book narrative */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal leading-snug">
                Why You Need The Book
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#52473D] font-light leading-relaxed">
                While the weekly gatherings and community sessions are free, this workbook is the core tool you will hold in your hands. It contains the exact framework, prompts, and lineage charts we move through together each week.
              </p>
            </div>

            {/* Simple Core Reasons */}
            <div className="space-y-3.5 pt-2">
              {[
                {
                  title: 'Your Hands-On Weekly Guide',
                  desc: 'Follow along step-by-step with every Saturday circle and reflective prompt.',
                },
                {
                  title: 'Lineage & Oral History Charts',
                  desc: 'Dedicated spaces to map your family origins, elder names, and memories.',
                },
                {
                  title: 'A Permanent Living Keepsake',
                  desc: 'A tangible heirloom of your personal story to preserve and pass down.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B85028] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#1C1917]">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#6B5D4D] font-light mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons: Order Now & Direct Link to Cohort */}
            <div className="pt-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* 1. Prominent Order Now Button -> knowmyroot.com */}
                <a
                  href={WORKBOOK_CONFIG.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="workbook-order-now-btn"
                  className="px-8 py-4 rounded-xl bg-[#B85028] hover:bg-[#9E3F1C] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer no-underline text-center"
                >
                  <span>Order Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* 2. Direct Link to Cohort Registration (No form popup) */}
                <a
                  href={PROGRAM_CONFIG.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="workbook-join-cohort-direct-link"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#E2D8CA] hover:border-[#B85028]/40 font-mono text-xs uppercase tracking-wider transition-all duration-300 text-center cursor-pointer font-medium no-underline inline-flex items-center justify-center gap-2"
                >
                  <span>Join Cohort</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B85028]" />
                </a>
              </div>

              {/* Direct Link Explanations */}
              <div className="space-y-1.5 text-xs text-[#7A6C5B] font-light">
                <p>
                  • Need the book? <strong className="font-semibold text-[#1C1917]">Order Now</strong> takes you directly to{' '}
                  <a
                    href={WORKBOOK_CONFIG.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B85028] underline underline-offset-2 hover:text-[#9E3F1C]"
                  >
                    knowmyroot.com
                  </a>.
                </p>
                <p>
                  • Ready to register? <strong className="font-semibold text-[#1C1917]">Join Cohort</strong> takes you directly to the official cohort registration page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
