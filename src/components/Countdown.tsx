import { useCountdown } from '../hooks/useCountdown';
import { PROGRAM_CONFIG } from '../config/programContent';
import { Calendar, Clock, Sparkles } from 'lucide-react';

interface CountdownProps {
  variant?: 'featured' | 'hero' | 'compact' | 'strip';
  className?: string;
  onOpenEnrollment?: () => void;
}

export function Countdown({ variant = 'featured', className = '', onOpenEnrollment }: CountdownProps) {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(
    PROGRAM_CONFIG.kickoffTargetDate || '2026-10-10T16:30:00+02:00'
  );

  const pad = (n: number) => n.toString().padStart(2, '0');

  // Google Calendar event generation link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Rooting the Home — Live Cohort Kickoff'
  )}&dates=20261010T143000Z/20261010T163000Z&details=${encodeURIComponent(
    'Founding cohort live virtual kickoff for Rooting the Home.\nA four-week guided journey into identity, family, belonging and cultural connection.'
  )}&location=${encodeURIComponent('Virtual on Zoom')}`;

  const timeUnits = [
    { label: 'DAYS', value: pad(days) },
    { label: 'HOURS', value: pad(hours) },
    { label: 'MINUTES', value: pad(minutes) },
    { label: 'SECONDS', value: pad(seconds) },
  ];

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 font-mono text-xs ${className}`}>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28863] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B85028]"></span>
        </span>
        <span className="text-[#C98B32] uppercase tracking-wider font-semibold">
          {isCompleted ? 'Cohort Live' : `${days}d ${hours}h ${minutes}m ${seconds}s`}
        </span>
      </div>
    );
  }

  if (variant === 'strip') {
    return (
      <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 ${className}`}>
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-2.5 rounded-xl bg-[#B85028]/20 border border-[#B85028]/40 text-[#E28863] hidden sm:block shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28863] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B85028]"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#E28863] font-medium">
                Live Kickoff Countdown
              </span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-[#FAF6F0] font-light mt-0.5">
              Live opening circle starts in {days} {days === 1 ? 'day' : 'days'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 min-w-[62px] sm:min-w-[76px] rounded-xl bg-[#14110E] border border-[#383027] shadow-lg group hover:border-[#E28863]/40 transition-colors"
            >
              <span className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal tracking-tight">
                {unit.value}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#C98B32] mt-0.5 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#181410] hover:bg-[#25201A] border border-[#383027] text-[#FAF6F0] text-xs font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer no-underline w-full sm:w-auto"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C98B32]" />
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-[#C98B32]">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28863] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B85028]"></span>
          </span>
          <span>Kickoff Countdown · 10 October 2026</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm sm:max-w-md w-full">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#14110E]/85 backdrop-blur-md border border-[#383027] shadow-lg shadow-black/40 group hover:border-[#C98B32]/50 transition-colors"
            >
              <span className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal tracking-tight">
                {unit.value}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#A89885] mt-0.5">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default 'featured' display (e.g. for Pricing Section / Cohort Showcase)
  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1E1914] to-[#14110E] border border-[#383027] relative overflow-hidden shadow-2xl ${className}`}
    >
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#B85028]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Info */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85028]/20 border border-[#B85028]/40 text-[#E28863] text-xs font-mono uppercase tracking-widest mb-1">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E28863] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B85028]"></span>
            </span>
            <span>Live Founding Cohort Countdown</span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal">
            Starts in {days} {days === 1 ? 'day' : 'days'}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#CBBFB0] font-light max-w-sm">
            Live opening session begins {PROGRAM_CONFIG.kickoffDate} at 4:30 PM CAT (Virtual on Zoom).
          </p>
        </div>

        {/* Center: 4 Units Grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 shrink-0">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-3 sm:p-4 min-w-[64px] sm:min-w-[80px] rounded-xl bg-[#181410] border border-[#383027] shadow-xl group hover:border-[#E28863]/40 transition-colors"
            >
              <span className="font-serif text-2xl sm:text-4xl text-[#FAF6F0] font-normal tracking-tight">
                {unit.value}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.24em] text-[#E28863] mt-1 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0">
          {onOpenEnrollment && (
            <button
              onClick={onOpenEnrollment}
              className="px-5 py-2.5 rounded-full bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#B85028]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claim Spot</span>
            </button>
          )}

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#25201A] hover:bg-[#383027] border border-[#383027] text-[#E4DCD0] hover:text-[#FAF6F0] text-[11px] font-mono tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer no-underline"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C98B32]" />
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
