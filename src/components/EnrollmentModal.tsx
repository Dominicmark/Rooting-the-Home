import { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Calendar, Clock } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';
import { Countdown } from './Countdown';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: 'early' | 'standard' | 'supported';
}

export function EnrollmentModal({ isOpen, onClose, initialTier = 'early' }: EnrollmentModalProps) {
  const [tier, setTier] = useState<'early' | 'standard' | 'supported'>(initialTier);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [seedQuestion, setSeedQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getTierPrice = () => {
    if (tier === 'early') return '$65 USD';
    if (tier === 'standard') return '$85 USD';
    return 'Supported Place Request';
  };

  return (
    <div
      id="enrollment-modal-overlay"
      className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="enrollment-modal-content"
        className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#E2D8CA] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#1C1917] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-enrollment-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#7A6C5B] hover:text-[#1C1917] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#B85028] font-semibold">
                {PROGRAM_CONFIG.cohortTag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal mt-1">
                Rooting the Home
              </h3>
            </div>

            {/* Pronounced Webinar Kickoff Date Banner inside Modal */}
            <div className="mb-6 p-4 rounded-xl bg-[#F5EFE6] border border-[#E2D8CA] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] text-[#B85028]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B85028] block font-semibold">
                    Webinar Kickoff Date
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#1C1917] font-medium block">
                    {PROGRAM_CONFIG.kickoffDate}
                  </span>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6C5B] block font-medium">
                  Kickoff Countdown
                </span>
                <Countdown variant="compact" />
              </div>
            </div>

            {/* Tier Selector */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA] mb-4">
              <button
                type="button"
                onClick={() => setTier('early')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'early'
                    ? 'bg-[#B85028] text-white shadow-sm font-semibold'
                    : 'text-[#7A6C5B] hover:text-[#1C1917]'
                }`}
              >
                Early Bird ($65)
              </button>
              <button
                type="button"
                onClick={() => setTier('standard')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'standard'
                    ? 'bg-[#B85028] text-white shadow-sm font-semibold'
                    : 'text-[#7A6C5B] hover:text-[#1C1917]'
                }`}
              >
                Standard ($85)
              </button>
              <button
                type="button"
                onClick={() => setTier('supported')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'supported'
                    ? 'bg-[#B85028] text-white shadow-sm font-semibold'
                    : 'text-[#7A6C5B] hover:text-[#1C1917]'
                }`}
              >
                Supported Place
              </button>
            </div>

            {/* Direct Google Form Link Callout */}
            <div className="mb-6 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA] flex items-center justify-between gap-3">
              <div className="text-xs text-[#52473D] font-light">
                Prefer to register directly via Google Forms?
              </div>
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#B85028] hover:bg-[#9E3F1C] text-[11px] font-mono uppercase tracking-wider text-white flex items-center gap-1.5 transition-colors no-underline cursor-pointer font-medium"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#52473D] mb-1.5 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] text-sm text-[#1C1917] placeholder-[#A89885] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#52473D] mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] text-sm text-[#1C1917] placeholder-[#A89885] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#52473D] mb-1.5 font-medium">
                  Your City / Country & Timezone
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. London, Kigali, New York, Johannesburg..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] text-sm text-[#1C1917] placeholder-[#A89885] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#52473D] mb-1.5 font-medium">
                  A Seed Question (Optional)
                </label>
                <textarea
                  rows={2}
                  value={seedQuestion}
                  onChange={(e) => setSeedQuestion(e.target.value)}
                  placeholder="What is one question about home or family you wish to explore?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E2D8CA] text-sm text-[#1C1917] placeholder-[#A89885] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="confirm-enrollment-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#B85028] hover:bg-[#9E3F1C] text-white text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Complete Registration ({getTierPrice()})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6C5B] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#B85028]" />
                <span>Your application and inquiries are kept strictly confidential.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#F5EFE6] text-[#B85028] flex items-center justify-center mx-auto border border-[#E2D8CA]">
              <CheckCircle className="w-8 h-8 text-[#B85028]" />
            </div>

            <h4 className="font-serif text-3xl text-[#1C1917]">Welcome to the Circle</h4>

            <p className="text-sm text-[#52473D] font-light max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1C1917] font-semibold">{name}</strong>. We have received your registration for the founding cohort.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2D8CA] text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#7A6C5B]">Registered Email:</span>
                <span className="text-[#1C1917] font-mono font-medium">{email}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#7A6C5B]">Live Kickoff Date:</span>
                <span className="text-[#1C1917] font-mono font-medium">{PROGRAM_CONFIG.kickoffDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#7A6C5B]">Selected Tier:</span>
                <span className="text-[#B85028] font-mono uppercase font-semibold">{tier} ({getTierPrice()})</span>
              </div>
            </div>

            <p className="text-xs text-[#7A6C5B] max-w-sm mx-auto">
              Check your inbox for your calendar invitation and introductory reflection questions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#F3ECE2] border border-[#E2D8CA] text-xs font-mono uppercase text-[#1C1917] cursor-pointer font-medium"
              >
                Return to Page
              </button>
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-[#B85028] hover:bg-[#9E3F1C] text-xs font-mono uppercase text-white flex items-center justify-center gap-1.5 no-underline font-semibold shadow-xs"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
