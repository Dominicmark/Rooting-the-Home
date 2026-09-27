import { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Calendar, Clock } from 'lucide-react';
import { PROGRAM_CONFIG } from '../config/programContent';

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
      className="fixed inset-0 z-50 bg-[#0E0C0A]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="enrollment-modal-content"
        className="relative w-full max-w-xl bg-[#161310] border border-[#383027] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FAF6F0] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-enrollment-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1D1915] text-[#A89885] hover:text-[#FAF6F0] hover:bg-[#25201A] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#E28863]">
                {PROGRAM_CONFIG.cohortTag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] font-normal mt-1">
                Rooting the Home
              </h3>
            </div>

            {/* Pronounced Webinar Kickoff Date Banner inside Modal */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#251D17] to-[#1C1713] border border-[#B85028]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#B85028]/20 text-[#E28863]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C98B32] block">
                    Webinar Kickoff Date
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#FAF6F0] font-medium block">
                    {PROGRAM_CONFIG.kickoffDate}
                  </span>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A89885] block">
                  Time
                </span>
                <span className="text-xs font-mono text-[#E4DCD0]">
                  4:30 PM CAT
                </span>
              </div>
            </div>

            {/* Tier Selector */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#1D1915] border border-[#25201A] mb-4">
              <button
                type="button"
                onClick={() => setTier('early')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'early'
                    ? 'bg-[#B85028] text-[#FAF6F0] shadow-sm font-medium'
                    : 'text-[#A89885] hover:text-[#FAF6F0]'
                }`}
              >
                Early Bird ($65)
              </button>
              <button
                type="button"
                onClick={() => setTier('standard')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'standard'
                    ? 'bg-[#B85028] text-[#FAF6F0] shadow-sm font-medium'
                    : 'text-[#A89885] hover:text-[#FAF6F0]'
                }`}
              >
                Standard ($85)
              </button>
              <button
                type="button"
                onClick={() => setTier('supported')}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  tier === 'supported'
                    ? 'bg-[#B85028] text-[#FAF6F0] shadow-sm font-medium'
                    : 'text-[#A89885] hover:text-[#FAF6F0]'
                }`}
              >
                Supported Place
              </button>
            </div>

            {/* Direct Google Form Link Callout */}
            <div className="mb-6 p-3.5 rounded-xl bg-[#1F1A15] border border-[#B85028]/30 flex items-center justify-between gap-3">
              <div className="text-xs text-[#E4DCD0] font-light">
                Prefer to register directly via Google Forms?
              </div>
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#B85028] hover:bg-[#CF653A] text-[11px] font-mono uppercase tracking-wider text-[#FAF6F0] flex items-center gap-1.5 transition-colors no-underline cursor-pointer"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#CBBFB0] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1915] border border-[#383027] text-sm text-[#FAF6F0] placeholder-[#7A6C5B] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#CBBFB0] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1915] border border-[#383027] text-sm text-[#FAF6F0] placeholder-[#7A6C5B] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#CBBFB0] mb-1.5">
                  Your City / Country & Timezone
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. London, Kigali, New York, Johannesburg..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1915] border border-[#383027] text-sm text-[#FAF6F0] placeholder-[#7A6C5B] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#CBBFB0] mb-1.5">
                  A Seed Question (Optional)
                </label>
                <textarea
                  rows={2}
                  value={seedQuestion}
                  onChange={(e) => setSeedQuestion(e.target.value)}
                  placeholder="What is one question about home or family you wish to explore?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1915] border border-[#383027] text-sm text-[#FAF6F0] placeholder-[#7A6C5B] focus:outline-none focus:border-[#B85028]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="confirm-enrollment-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] text-xs font-sans uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
            <div className="w-16 h-16 rounded-full bg-[#B85028]/20 text-[#E28863] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#B85028]" />
            </div>

            <h4 className="font-serif text-3xl text-[#FAF6F0]">Welcome to the Circle</h4>

            <p className="text-sm text-[#CBBFB0] font-light max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#FAF6F0] font-medium">{name}</strong>. We have received your registration for the founding cohort.
            </p>

            <div className="p-4 rounded-xl bg-[#1D1915] border border-[#383027] text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#A89885]">Registered Email:</span>
                <span className="text-[#FAF6F0] font-mono">{email}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A89885]">Live Kickoff Date:</span>
                <span className="text-[#FAF6F0] font-mono">{PROGRAM_CONFIG.kickoffDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#A89885]">Selected Tier:</span>
                <span className="text-[#E28863] font-mono uppercase">{tier} ({getTierPrice()})</span>
              </div>
            </div>

            <p className="text-xs text-[#7A6C5B] max-w-sm mx-auto">
              Check your inbox for your calendar invitation and introductory reflection questions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#1D1915] hover:bg-[#25201A] border border-[#383027] text-xs font-mono uppercase text-[#FAF6F0] cursor-pointer"
              >
                Return to Page
              </button>
              <a
                href={PROGRAM_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-[#B85028] hover:bg-[#CF653A] text-xs font-mono uppercase text-[#FAF6F0] flex items-center justify-center gap-1.5 no-underline"
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
