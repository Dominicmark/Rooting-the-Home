import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';

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
    { name: 'Highlights', href: '#highlights' },
    { name: 'The Journey', href: '#journey' },
    { name: 'Experience', href: '#experience' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Cohort', href: '#pricing' },
  ];

  return (
    <>
      {/* 1. Subtle High-Notice Announcement Ribbon for Webinar Date */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#161310] border-b border-[#383027] text-center py-1.5 px-4 text-xs font-mono tracking-wider flex items-center justify-center gap-2 text-[#E4DCD0]">
        <Calendar className="w-3.5 h-3.5 text-[#E28863]" />
        <span>
          Live Cohort Kickoff: <strong className="text-[#FAF6F0] font-semibold">{PROGRAM_CONFIG.kickoffDate}</strong> (Virtual on Zoom)
        </span>
        <button
          onClick={() => onOpenEnrollment('early')}
          className="ml-2 underline text-[#E28863] hover:text-[#FAF6F0] transition-colors cursor-pointer hidden sm:inline"
        >
          Reserve Spot &rarr;
        </button>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        id="main-navigation"
        className={`fixed top-[29px] left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#12100E]/92 backdrop-blur-md border-b border-[#383027]/50 py-3 shadow-2xl'
            : 'bg-transparent py-4 md:py-6'
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
            <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg font-medium text-[#FAF6F0] uppercase">
              Rooting the Home
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-[#CBBFB0] hover:text-[#FAF6F0] transition-colors py-1 relative group"
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
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#FAF6F0] bg-[#B85028] hover:bg-[#CF653A] rounded transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#B85028]/20 active:scale-[0.98] cursor-pointer no-underline"
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
              className="p-2 rounded text-[#FAF6F0] hover:text-[#B85028] focus:outline-none"
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
          className="fixed inset-0 z-50 bg-[#0E0C0A]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#A89885] border-b border-[#25201A] pb-3">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#FAF6F0] hover:text-[#B85028] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#25201A] flex flex-col space-y-4">
            <div className="p-4 rounded-xl bg-[#1A1612] border border-[#383027] text-xs text-[#A89885] flex flex-col space-y-1">
              <span className="font-mono text-[#E28863] uppercase tracking-widest text-[10px]">Upcoming Live Kickoff</span>
              <span className="text-base font-serif text-[#FAF6F0] font-normal">{PROGRAM_CONFIG.kickoffDate}</span>
              <span className="text-[11px] text-[#A89885]">{PROGRAM_CONFIG.kickoffTimeRwanda}</span>
            </div>
            <a
              href={PROGRAM_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-menu-join-btn"
              className="w-full py-3.5 px-6 rounded bg-[#B85028] text-[#FAF6F0] text-sm font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-2 cursor-pointer no-underline"
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
