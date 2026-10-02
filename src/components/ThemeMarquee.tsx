import { Sparkles } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';

interface ThemeMarqueeProps {
  className?: string;
}

const PRIMARY_THEMES = [
  { text: 'KNOW YOUR TRUTH, KNOW YOUR ROOTS', accent: 'terracotta' },
  { text: 'LOOK BACK', accent: 'terracotta' },
  { text: 'LOOK WITHIN', accent: 'ochre' },
  { text: 'LIVE FORWARD', accent: 'terracotta' },
  { text: 'WHAT WE INHERIT', accent: 'sand' },
  { text: 'HOW IT LIVES IN YOU', accent: 'ochre' },
  { text: 'WHAT YOU CHOOSE TO CARRY', accent: 'terracotta' },
  { text: 'SHARING THE SOIL', accent: 'sand' },
  { text: 'ROOTING THE HOME', accent: 'ochre' },
];

const SECONDARY_THEMES = [
  'KNOW YOUR TRUTH, KNOW YOUR ROOTS (REQUIRED COMPANION WORKBOOK)',
  'FAMILY MEMORY & ORAL HISTORIES',
  'ANCESTRAL SOIL & LINEAGE',
  'BELONGING BEYOND BORDERS',
  'STORIES INTERRUPTED & REMEMBERED',
  'ARCHIVAL INQUIRY & ARTIFACTS',
  '100% FREE COHORT ADMISSION',
  `FOUNDING COHORT · ${PROGRAM_CONFIG.kickoffDate.toUpperCase()}`,
  'COMMUNAL ROOTS SHOWCASE',
];

export function ThemeMarquee({ className = '' }: ThemeMarqueeProps) {
  // Duplicate arrays to create continuous infinite loops
  const primaryLoop = [...PRIMARY_THEMES, ...PRIMARY_THEMES, ...PRIMARY_THEMES];
  const secondaryLoop = [...SECONDARY_THEMES, ...SECONDARY_THEMES, ...SECONDARY_THEMES];

  return (
    <div
      id="program-themes-marquee"
      aria-label="Core Themes of Rooting the Home"
      className={`relative w-full py-5 sm:py-6 bg-[#F4EFE6] border-y border-[#E4DBD0] overflow-hidden select-none ${className}`}
    >
      {/* Left and right vignette fades for smooth infinity illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] via-[#F4EFE6]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] via-[#F4EFE6]/90 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Primary Program Movement & Questions (Scrolls Left) */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
          {primaryLoop.map((item, idx) => (
            <div key={`primary-${idx}`} className="inline-flex items-center gap-5 sm:gap-8 shrink-0">
              <span
                className={`font-serif text-lg sm:text-2xl md:text-3xl tracking-tight transition-colors duration-200 ${
                  item.accent === 'terracotta'
                    ? 'text-[#1C1917] hover:text-[#B85028]'
                    : item.accent === 'ochre'
                    ? 'text-[#3E342B] hover:text-[#C07828]'
                    : 'text-[#5C5042] hover:text-[#1C1917]'
                }`}
              >
                {item.text}
              </span>
              <span className="flex items-center justify-center">
                {idx % 2 === 0 ? (
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B85028] shrink-0" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3F5243] shrink-0" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Secondary Archival & Conceptual Motifs (Scrolls Right / Reverse) */}
      <div className="flex overflow-hidden pt-2 pb-1 border-t border-[#E4DBD0]/80 mt-2">
        <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
          {secondaryLoop.map((text, idx) => (
            <div key={`secondary-${idx}`} className="inline-flex items-center gap-5 sm:gap-8 shrink-0">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#7A6C5B] hover:text-[#1C1917] transition-colors">
                {text}
              </span>
              <span className="text-[#C5B8A8] text-xs">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
