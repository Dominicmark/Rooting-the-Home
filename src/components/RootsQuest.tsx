import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sparkles, ArrowRight, Check } from 'lucide-react';
import { ROOT_QUESTIONS } from '../config/programContent';

export function RootsQuest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [customQuestion, setCustomQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROOT_QUESTIONS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelectQuestion = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customQuestion.trim()) {
      setSubmittedQuestion(true);
      setTimeout(() => setSubmittedQuestion(false), 4000);
    }
  };

  return (
    <section
      id="quest"
      className="relative w-full py-28 sm:py-36 bg-[#161310] text-[#FAF6F0] border-y border-[#25201A] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98B32] font-mono block mb-3">
            Section 07 — The Personal Inquiry
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight">
            START WITH A QUESTION.
          </h2>
          <p className="mt-5 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed">
            You do not need to arrive with answers. You only need the quiet courage to bring one honest question to the table.
          </p>
        </motion.div>

        {/* Dynamic Focus Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Question Selector List (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A89885] block mb-2">
              Common Starting Inquiries:
            </span>
            {ROOT_QUESTIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSelectQuestion(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-start gap-4 border ${
                  currentIndex === idx
                    ? 'bg-[#1D1915] border-[#B85028] text-[#FAF6F0] shadow-md shadow-[#B85028]/10'
                    : 'bg-[#161310] border-[#25201A] text-[#A89885] hover:text-[#FAF6F0] hover:border-[#383027]'
                }`}
              >
                <div
                  className={`mt-1 w-2 h-2 rounded-full shrink-0 transition-colors ${
                    currentIndex === idx ? 'bg-[#B85028] ring-4 ring-[#B85028]/20' : 'bg-[#383027]'
                  }`}
                />
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-normal leading-snug">
                    {item.prompt}
                  </h3>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Active Featured Question Card (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#1D1915] to-[#25201A] border border-[#383027] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C98B32]/15 border border-[#C98B32]/30 text-xs font-mono text-[#DD9E42]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquiry 0{currentIndex + 1} of 06</span>
                  </div>
                  <HelpCircle className="w-5 h-5 text-[#7A6C5B]" />
                </div>

                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF6F0] font-normal leading-snug">
                  &ldquo;{ROOT_QUESTIONS[currentIndex].prompt}&rdquo;
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[#383027]/70">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#E28863] font-mono block mb-2">
                    Why this matters
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#CBBFB0] font-light leading-relaxed">
                    {ROOT_QUESTIONS[currentIndex].context}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs text-[#A89885] pt-2">
                  <span>In Rooting the Home, we help you trace the thread.</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive "Write Your Own Question" Micro-Form */}
            <div className="mt-6 p-5 rounded-xl bg-[#161310] border border-[#25201A]">
              <form onSubmit={handleCustomSubmit} className="space-y-3">
                <label
                  htmlFor="personal-question-input"
                  className="block text-xs font-mono uppercase tracking-wider text-[#CBBFB0]"
                >
                  Have a question of your own?
                </label>
                <div className="flex gap-2">
                  <input
                    id="personal-question-input"
                    type="text"
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="e.g. What happened to my great-grandmother's land?"
                    className="flex-1 px-4 py-2.5 rounded bg-[#1D1915] border border-[#383027] text-xs sm:text-sm text-[#FAF6F0] placeholder-[#7A6C5B] focus:outline-none focus:border-[#B85028]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded bg-[#B85028] hover:bg-[#CF653A] text-[#FAF6F0] text-xs font-mono tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    {submittedQuestion ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    <span>{submittedQuestion ? 'Saved' : 'Bring It'}</span>
                  </button>
                </div>
                {submittedQuestion && (
                  <p className="text-xs text-[#C98B32] font-light italic">
                    This is exactly the kind of seed question you will bring into Week 1.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
