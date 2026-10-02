import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';

interface FooterProps {
  onOpenEnrollment: (tier?: 'early' | 'standard' | 'supported') => void;
}

export function Footer({ onOpenEnrollment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F3ECE2] text-[#1C1917] border-t border-[#E2D8CA] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E2D8CA]">
          {/* Brand & Mission (Col 1-5) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85028]" />
              <span className="font-serif tracking-[0.22em] text-lg font-semibold uppercase text-[#1C1917]">
                {PROGRAM_CONFIG.name}
              </span>
            </div>
            <p className="font-sans text-sm text-[#52473D] font-light leading-relaxed max-w-sm">
              A four-week virtual guided experience exploring identity, family history, belonging, rootedness and cultural connection.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7A6C5B] space-y-1">
              <p>Kickoff: {PROGRAM_CONFIG.kickoffDate}</p>
              <p>{PROGRAM_CONFIG.kickoffTimeRwanda}</p>
              <p className="text-[#B85028] font-medium">{PROGRAM_CONFIG.cohortTag}</p>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#B85028] font-semibold">
              Program Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-mono text-[#54493C]">
              <li>
                <a href="#the-question" className="hover:text-[#1C1917] transition-colors">
                  The Premise
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1C1917] transition-colors">
                  The Intention
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#1C1917] transition-colors">
                  Four-Week Journey
                </a>
              </li>
              <li>
                <a href="#workbook" className="hover:text-[#B85028] transition-colors font-medium text-[#B85028]">
                  The Workbook
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-[#1C1917] transition-colors">
                  Webinar Speakers
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-[#1C1917] transition-colors">
                  The Practice &amp; Harvest
                </a>
              </li>
              <li>
                <a href="#who-is-this-for" className="hover:text-[#1C1917] transition-colors">
                  The Community
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1C1917] transition-colors">
                  Free Cohort &amp; Book
                </a>
              </li>
            </ul>
          </div>

          {/* Action & Hosting Support (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#B85028] font-semibold">
              Free Cohort Participation
            </span>
            <p className="text-xs text-[#52473D] font-light leading-relaxed">
              Admission is 100% free. The companion workbook, <em>Know Your Truth, Know Your Roots</em>, is required for all participants.
            </p>
            <div className="pt-2">
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#B85028] hover:bg-[#9E3F1C] text-xs font-mono uppercase tracking-wider text-white transition-colors text-center flex items-center justify-center gap-2 no-underline shadow-sm font-semibold"
              >
                <span>Get Workbook &amp; Join Free</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6C5B] font-mono">
          <p>© 2026 Rooting the Home. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#1C1917] transition-colors mt-4 sm:mt-0 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
