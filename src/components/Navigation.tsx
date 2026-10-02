import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';
import { Countdown } from './Countdown';

interface NavigationProps {
  onOpenEnrollment: (tier?: 'early' | 'standard' | 'supported') => void;
}

export function Navigation({ onOpenEnrollment }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Journey', href: '#journey' },
    { name: 'The Workbook', href: '#workbook' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'The Practice', href: '#practice' },
    { name: 'Free Cohort', href: '#pricing' },
  ];

  return (
    <>
      {/* 1. Subtle High-Notice Announcement Ribbon for Webinar Date & Countdown */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F3ECE2] border-b border-[#E2D8CA] text-center py-1.5 px-4 text-xs font-mono tracking-wider flex items-center justify-center gap-2 sm:gap-3 text-[#54493C]">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#B85028]" />
          <span>
            Live Kickoff: <strong className="text-[#1C1917] font-semibold">{PROGRAM_CONFIG.kickoffDate}</strong>
          </span>
        </div>
        <span className="text-[#A89885] hidden sm:inline">·</span>
        <span className="text-[#B85028] font-semibold hidden md:inline">100% Free Cohort (Workbook Required)</span>
        <span className="text-[#A89885] hidden sm:inline">·</span>
        <Countdown variant="compact" className="hidden xs:inline-flex" />
        <a
          href="#workbook"
          className="ml-1 sm:ml-2 underline text-[#B85028] hover:text-[#8F3B1A] transition-colors cursor-pointer hidden sm:inline font-medium"
        >
          Get Workbook &rarr;
        </a>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        id="main-navigation"
        className={`fixed top-[29px] left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6DFD4] py-3 shadow-sm'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#EFE8DC]/80 py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            id="brand-logo-link"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85028] group-hover:scale-125 transition-transform duration-300" />
            <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg font-semibold text-[#1C1917] uppercase">
              Rooting the Home
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-[#5C5245] hover:text-[#1C1917] transition-colors py-1 relative group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B85028] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={PROGRAM_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-join-cohort-btn"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#B85028] hover:bg-[#9E3F1C] rounded transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer no-underline"
            >
              <span>Join the Cohort</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded text-[#1C1917] hover:text-[#B85028] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 bg-[#FAF8F5]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between border-b border-[#E6DFD4]"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#7A6C5B] border-b border-[#E6DFD4] pb-3 font-mono">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#1C1917] hover:text-[#B85028] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#E6DFD4] flex flex-col space-y-4">
            <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#E2D8CA] text-xs text-[#54493C] flex flex-col space-y-1">
              <span className="font-mono text-[#B85028] uppercase tracking-widest text-[10px] font-semibold">Upcoming Live Kickoff</span>
              <span className="text-base font-serif text-[#1C1917] font-normal">{PROGRAM_CONFIG.kickoffDate}</span>
              <span className="text-[11px] text-[#6B5D4D]">{PROGRAM_CONFIG.kickoffTimeRwanda}</span>
            </div>
            <a
              href={PROGRAM_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-menu-join-btn"
              className="w-full py-3.5 px-6 rounded bg-[#B85028] text-white text-sm font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 cursor-pointer no-underline shadow-sm"
            >
              <span>Join the Cohort</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
