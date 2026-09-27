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
    <footer className="w-full bg-[#0E0C0A] text-[#FAF6F0] border-t border-[#25201A] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#25201A]">
          {/* Brand & Mission (Col 1-5) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85028]" />
              <span className="font-serif tracking-[0.22em] text-lg font-medium uppercase">
                {PROGRAM_CONFIG.name}
              </span>
            </div>
            <p className="font-sans text-sm text-[#A89885] font-light leading-relaxed max-w-sm">
              A four-week virtual guided experience exploring identity, family history, belonging, rootedness and cultural connection.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7A6C5B] space-y-1">
              <p>Kickoff: {PROGRAM_CONFIG.kickoffDate}</p>
              <p>{PROGRAM_CONFIG.kickoffTimeRwanda}</p>
              <p className="text-[#C98B32]">{PROGRAM_CONFIG.cohortTag}</p>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#C98B32]">
              Program Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-mono text-[#A89885]">
              <li>
                <a href="#the-question" className="hover:text-[#FAF6F0] transition-colors">
                  The Premise
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF6F0] transition-colors">
                  The Intention
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#FAF6F0] transition-colors">
                  Four-Week Journey
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-[#FAF6F0] transition-colors">
                  Roots Are Stories
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF6F0] transition-colors">
                  What You Will Do
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#FAF6F0] transition-colors">
                  Roots Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FAF6F0] transition-colors">
                  Founding Cohort
                </a>
              </li>
            </ul>
          </div>

          {/* Action & Hosting Support (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#E28863]">
              Founding Enrollment
            </span>
            <p className="text-xs text-[#A89885] font-light leading-relaxed">
              Early bird places are strictly limited to the first 25 founding cohort participants.
            </p>
            <div className="pt-2">
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#B85028] hover:bg-[#CF653A] text-xs font-mono uppercase tracking-wider text-[#FAF6F0] transition-colors text-center flex items-center justify-center gap-2 no-underline"
              >
                <span>Join Rooting the Home</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#54493C] font-mono">
          <p>© 2026 Rooting the Home. All rights reserved. Unveiling Africa</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#A89885] hover:text-[#FAF6F0] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
