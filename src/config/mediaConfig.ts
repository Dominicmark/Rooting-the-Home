/**
 * ROOTING THE HOME — CENTRAL MEDIA CONFIGURATION
 *
 * You can easily replace any of these URLs with your Cloudinary media links.
 * Simply replace HERO_VIDEO_URL with your Cloudinary video URL (e.g. https://res.cloudinary.com/.../video.mp4).
 */

export const HERO_VIDEO_URL =
  'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1789930244/Sequence_02_1_uhsy9c.mp4';

export interface MediaAsset {
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

export const MEDIA_CONFIG = {
  // Hero Section
  hero: {
    videoUrl: HERO_VIDEO_URL,
    // Exact matching poster frame generated from Cloudinary video
    posterUrl:
      'https://res.cloudinary.com/dbbw8jsjc/video/upload/v1789930244/Sequence_02_1_uhsy9c.jpg',
    alt: 'Cinematic preview of Rooting the Home founding sequence',
  },

  // Section 3: What is Rooting the Home
  familyImage1: {
    url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790753809/WhatsApp_Image_2026-09-28_at_10.38.59_AM_n813qw.jpg',
    alt: 'Know Your Roots, Know Your Truth — An invitation into curiosity, not prescription',
    caption: 'Gathering the fragments of where we come from',
  },

  // Section 4 & 5: Archival, Family & Roots Storytelling Gallery
  familyPortraits: [
    {
      id: 'name',
      label: 'A NAME',
      subtitle: 'Carried across generations',
      url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790754480/Child_standing_confidently_dark___20260930084740_ermwnh.jpg',
      alt: 'Child standing confidently — Carried across generations',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      id: 'place',
      label: 'A PLACE',
      subtitle: 'The landscape where the journey began',
      url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790755385/Journey_begins_in_landscape_20260930090159_swzk5i.jpg',
      alt: 'The landscape where the journey began',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'person',
      label: 'A PERSON',
      subtitle: 'The one who held the stories first',
      url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790754672/Kwame_in_Ghanaian_royal_attire_202607131839_wmgdlj.jpg',
      alt: 'Kwame in Ghanaian royal attire — The one who held the stories first',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      id: 'memory',
      label: 'A MEMORY',
      subtitle: 'Preserved in quiet moments',
      url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790756215/Person_sitting_in_modern_home_20260930091628_okoboh.jpg',
      alt: 'Person sitting in modern home — Preserved in quiet moments',
      aspectRatio: 'aspect-[16/9]',
    },
    {
      id: 'story',
      label: 'A STORY',
      subtitle: 'Told in the evening around familiar tables',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      alt: 'Contemporary portrait reflecting deep thought and purpose',
      aspectRatio: 'aspect-[4/5]',
    },
    {
      id: 'gap',
      label: 'A GAP',
      subtitle: 'The questions we are ready to ask',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      alt: 'Quiet introspection and search for belonging',
      aspectRatio: 'aspect-[3/4]',
    },
  ],

  // Section 8: The Rooted Action
  rootedActionImage: {
    url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790756703/Family_ancestral_gallery_in_arch__20260930092315_vpkwl6.jpg',
    alt: 'Family ancestral gallery — Rootedness as a living, daily practice',
    caption: 'Rootedness as a living, daily practice',
  },

  // Section 9: The Roots Showcase
  showcaseImage: {
    url: 'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790757322/People_placing_objects_on_table_20260930093426_x2ax49.jpg',
    alt: 'People placing meaningful objects on the community table',
    caption: 'The virtual community table where our discoveries meet',
  },

  // Section 12: Final Emotional CTA
  finalImage: {
    url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Looking forward into the horizon with calm conviction',
    caption: 'Look back. Look within. Live forward.',
  },
};
