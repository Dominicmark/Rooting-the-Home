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
import { WhatYouWillDo } from './components/WhatYouWillDo';
import { RootsQuest } from './components/RootsQuest';
import { RootedAction } from './components/RootedAction';
import { Showcase } from './components/Showcase';
import { SpeakersSection } from './components/SpeakersSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { PricingSection } from './components/PricingSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { HighlightsOverview } from './components/HighlightsOverview';
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
    const el = document.getElementById('highlights');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0C0A] text-[#FAF6F0] selection:bg-[#B85028] selection:text-[#FAF6F0] overflow-x-hidden font-sans">
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

        {/* Continuous Scrolling Marquee of Program Themes */}
        <ThemeMarquee />

        {/* 3. At-a-Glance Highlights: Quick summary of the different sections */}
        <HighlightsOverview
          onSelectSection={handleScrollToSection}
          onOpenEnrollment={() => handleOpenEnrollment('early')}
        />

        {/* 4. Section 2 — The Question (Reflective & Spacious) */}
        <TheQuestion />

        {/* 4. Section 3 — What is Rooting the Home? (Split-screen editorial layout) */}
        <WhatIsRooting image={MEDIA_CONFIG.familyImage1} />

        {/* 5. Section 4 — The Journey (Four Weeks. Four Questions.) */}
        <JourneySection />

        {/* 6. Section 5 — Roots are Stories (Archival collage & memory gallery) */}
        <MemoryGallery />

        {/* 7. Section 6 — What You Will Do (This is not a webinar. 01–06 visual sequence) */}
        <WhatYouWillDo />

        {/* 8. Section 7 — Your Roots Quest (Start with a question) */}
        <RootsQuest />

        {/* 9. Section 8 — The Rooted Action (Knowing is only the beginning) */}
        <RootedAction image={MEDIA_CONFIG.rootedActionImage} />

        {/* 10. Section 9 — The Roots Showcase (What we found · Community table) */}
        <Showcase showcaseImage={MEDIA_CONFIG.showcaseImage} />

        {/* 11. Section 10 — Guiding Voices & Webinar Speakers */}
        <SpeakersSection onOpenEnrollment={() => handleOpenEnrollment('early')} />

        {/* 12. Section 11 — Who is this for? (For people who have questions about home) */}
        <WhoIsThisFor />

        {/* 12. Section 11 — Founding Cohort (Editorial pricing & local timezone selector) */}
        <PricingSection onSelectTier={handleOpenEnrollment} />

        {/* 13. Section 12 — Final Emotional CTA (Calm, memorable closing) */}
        <FinalCTA
          finalImage={MEDIA_CONFIG.finalImage}
          onOpenEnrollment={handleOpenEnrollment}
        />
      </main>

      {/* 14. Footer */}
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
