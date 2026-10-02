/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TheQuestion } from './components/TheQuestion';
import { WhatIsRooting } from './components/WhatIsRooting';
import { JourneySection } from './components/JourneySection';
import { MemoryGallery } from './components/MemoryGallery';
import { ThePractice } from './components/ThePractice';
import { SpeakersSection } from './components/SpeakersSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { PricingSection } from './components/PricingSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ThemeMarquee } from './components/ThemeMarquee';
import { MEDIA_CONFIG, HERO_VIDEO_URL } from './config/mediaConfig';

export default function App() {
  // Video URL state
  const [heroVideoUrl] = useState(HERO_VIDEO_URL);

  // Enrollment Modal state
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollmentTier, setEnrollmentTier] = useState<'early' | 'standard' | 'supported'>('early');

  const handleOpenEnrollment = (tier: 'early' | 'standard' | 'supported' = 'early') => {
    setEnrollmentTier(tier);
    setEnrollmentOpen(true);
  };

  const handleExploreJourney = () => {
    const el = document.getElementById('the-question');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#B85028] selection:text-[#FAF8F5] overflow-x-hidden font-sans">
      {/* 1. Minimal Sticky Navigation */}
      <Navigation
        onOpenEnrollment={handleOpenEnrollment}
      />

      <main>
        {/* 2. Cinematic Hero Section with full viewport video and overlay */}
        <Hero
          videoUrl={heroVideoUrl}
          posterUrl={MEDIA_CONFIG.hero.posterUrl}
          onOpenEnrollment={handleOpenEnrollment}
          onExploreJourney={handleExploreJourney}
        />

        {/* 3. Continuous Scrolling Marquee of Program Themes */}
        <ThemeMarquee />

        {/* 4. The Premise — The Reflective Inquiry */}
        <TheQuestion />

        {/* 5. The Intention — What is Rooting the Home? */}
        <WhatIsRooting image={MEDIA_CONFIG.familyImage1} />

        {/* 6. The Journey — Four Weeks. Four Questions. */}
        <JourneySection />

        {/* 7. Guiding Voices & Webinar Speakers */}
        <SpeakersSection onOpenEnrollment={() => handleOpenEnrollment('early')} />

        {/* 8. The Practice & The Harvest — An Active Quest */}
        <ThePractice onOpenEnrollment={() => handleOpenEnrollment('early')} />

        {/* 9. The Archive of What We Carry */}
        <MemoryGallery />

        {/* 10. The Community — Who Is This For? */}
        <WhoIsThisFor />

        {/* 11. Founding Cohort — Dates, Timezones & Enrollment */}
        <PricingSection onSelectTier={handleOpenEnrollment} />

        {/* 12. Final Emotional Invitation */}
        <FinalCTA
          finalImage={MEDIA_CONFIG.finalImage}
          onOpenEnrollment={handleOpenEnrollment}
        />
      </main>

      {/* 13. Clean Natural Footer */}
      <Footer
        onOpenEnrollment={handleOpenEnrollment}
      />

      {/* Enrollment Drawer / Modal */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        initialTier={enrollmentTier}
      />
    </div>
  );
}
