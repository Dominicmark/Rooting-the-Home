import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, X, ArrowUpRight, Award, Compass, Quote } from 'lucide-react';
import { WEBINAR_SPEAKERS, WebinarSpeaker } from '../config/programContent';

interface SpeakersSectionProps {
  onOpenEnrollment: () => void;
}

export function SpeakersSection({ onOpenEnrollment }: SpeakersSectionProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<WebinarSpeaker | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (speakerId: string) => {
    setImgErrors((prev) => ({ ...prev, [speakerId]: true }));
  };

  return (
    <section
      id="speakers"
      className="relative w-full py-28 sm:py-36 bg-[#110F0D] text-[#FAF6F0] border-t border-[#2A231C] overflow-hidden"
    >
      {/* Subtle Ambient Atmosphere Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C98B32]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#B85028]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#201A14] border border-[#3C2E20] text-[#E28863] text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Voices · Webinar Speakers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] font-normal tracking-tight leading-[1.15]"
          >
            VOICES OF RETURN, IDENTITY & ROOTS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-sans text-base sm:text-lg text-[#CBBFB0] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Live webinar gatherings and intimate fireside discussions with practitioners, historians, and founders exploring what it means to return, belong, and preserve ancestral memory.
          </motion.p>
        </div>

        {/* Optimized 3-Column Speaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {WEBINAR_SPEAKERS.map((speaker, index) => {
            const hasError = imgErrors[speaker.id];
            const currentSrc = hasError ? speaker.rawImageUrl : speaker.imageUrl;

            return (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group flex flex-col justify-between bg-[#191512] rounded-2xl border border-[#2E261E] hover:border-[#B85028]/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#B85028]/10"
              >
                {/* Speaker Portrait Card Container (Optimized Aspect Ratio) */}
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#241E18]">
                    <img
                      src={currentSrc}
                      alt={speaker.name}
                      onError={() => handleImgError(speaker.id)}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Editorial Gradient Scrim for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191512] via-[#191512]/30 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />

                    {/* Location Badge */}
                    {speaker.location && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#12100E]/80 backdrop-blur-md border border-[#3C2E20] text-[11px] font-mono text-[#D6C7B2]">
                        <MapPin className="w-3 h-3 text-[#E28863]" />
                        <span>{speaker.location}</span>
                      </div>
                    )}

                    {/* Organization Tag Floating over Image bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E28863] block mb-1">
                        {speaker.organization}
                      </span>
                      <h3 className="font-serif text-2xl lg:text-3xl text-[#FAF6F0] font-normal tracking-tight">
                        {speaker.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#D8CCC0] mt-0.5 font-light">
                        {speaker.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Body & Content Preview */}
                  <div className="p-6 pt-5">
                    {/* Topics Pill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {speaker.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[11px] font-sans bg-[#251F18] border border-[#3A2F24] text-[#CBBFB0]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Shortened Bio Preview (Optimized Size) */}
                    <p className="font-sans text-xs sm:text-sm text-[#AFA191] leading-relaxed line-clamp-3">
                      {speaker.shortBio}
                    </p>

                    {/* Quote preview if available */}
                    {speaker.quote && (
                      <div className="mt-4 pt-4 border-t border-[#2E261E] flex items-start gap-2 text-xs italic text-[#E4DCD0]/80">
                        <Quote className="w-3.5 h-3.5 text-[#C98B32] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">“{speaker.quote}”</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action: Read Full Bio & Contributions */}
                <div className="p-6 pt-0 mt-2">
                  <button
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#241D17] hover:bg-[#B85028] text-[#FAF6F0] border border-[#3A2F24] hover:border-[#B85028] text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Read Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Webinar Interactive Note Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#201A14] via-[#1A1612] to-[#201A14] border border-[#3A2F24] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2E241B] border border-[#4A392A] flex items-center justify-center shrink-0 text-[#E28863]">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-[#FAF6F0]">
                Live Interactive Webinar & Fireside Circles
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#CBBFB0] font-light mt-0.5">
                Cohort members participate in live Q&A, shared reflections, and breakout discussions with each speaker.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B85028] hover:bg-[#C95B30] text-[#FAF6F0] font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-[#B85028]/20 shrink-0 cursor-pointer text-center"
          >
            Join the Webinar Cohort
          </button>
        </motion.div>
      </div>

      {/* Speaker Full Profile Modal (Complete Bio, Credentials & Discussion Focus) */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#181411] border border-[#3A2F24] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2E261E] bg-[#14100D]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E28863]">
                  Guest Speaker Spotlight
                </span>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="p-1.5 rounded-lg text-[#9E9080] hover:text-[#FAF6F0] hover:bg-[#251E18] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Speaker Identity Row */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border border-[#3A2F24] shrink-0 bg-[#251E18] shadow-md">
                    <img
                      src={
                        imgErrors[selectedSpeaker.id]
                          ? selectedSpeaker.rawImageUrl
                          : selectedSpeaker.imageUrl
                      }
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <span className="text-xs font-mono text-[#E28863] tracking-widest uppercase">
                      {selectedSpeaker.organization}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] mt-1">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="font-sans text-sm text-[#CBBFB0] font-light mt-0.5">
                      {selectedSpeaker.role}
                    </p>

                    {selectedSpeaker.location && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-[#9E9080] mt-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#E28863]" />
                        <span>{selectedSpeaker.location}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-3">
                      {selectedSpeaker.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[11px] font-sans bg-[#251F18] border border-[#3A2F24] text-[#E4DCD0]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Speaker Quote */}
                {selectedSpeaker.quote && (
                  <div className="p-4 rounded-xl bg-[#201A14] border-l-2 border-[#C98B32] text-sm italic text-[#FAF6F0] leading-relaxed">
                    “{selectedSpeaker.quote}”
                  </div>
                )}

                {/* Complete Bio (Preserving all user provided paragraphs & context) */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#E28863] mb-2">
                    Biography & Background
                  </h5>
                  <p className="font-sans text-sm text-[#D8CCC0] leading-relaxed font-light whitespace-pre-line">
                    {selectedSpeaker.fullBio}
                  </p>
                </div>

                {/* Credentials & Leadership Highlights */}
                {selectedSpeaker.credentials && selectedSpeaker.credentials.length > 0 && (
                  <div className="pt-2">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#E28863] mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Key Highlights & Credentials</span>
                    </h5>
                    <div className="space-y-1.5">
                      {selectedSpeaker.credentials.map((cred, i) => (
                        <div
                          key={i}
                          className="text-xs text-[#BFAF9F] font-sans flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B85028]" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[#2E261E] bg-[#14100D] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#9E9080] font-sans">
                  Part of the 4-week Rooting the Home live series
                </span>
                <button
                  onClick={() => {
                    setSelectedSpeaker(null);
                    onOpenEnrollment();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B85028] hover:bg-[#C95B30] text-[#FAF6F0] font-mono text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer text-center"
                >
                  Join the Founding Cohort
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
