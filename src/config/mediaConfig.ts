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
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemplative, evocative portrait exploring personal identity',
    caption: 'Gathering the fragments of where we come from',
  },

  // Section 4 & 5: Archival, Family & Roots Storytelling Gallery
  familyPortraits: [
    {
      id: 'name',
      label: 'A NAME',
      subtitle: 'Carried across generations',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
      alt: 'Portrait of dignity, family presence and reflection',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      id: 'place',
      label: 'A PLACE',
      subtitle: 'The landscape where the journey began',
      url: 'https://images.unsplash.com/photo-1516026656418-4051bf5f55bd?auto=format&fit=crop&w=1000&q=80',
      alt: 'Warm earthy landscape bathed in golden hour light',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'person',
      label: 'A PERSON',
      subtitle: 'The one who held the stories first',
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80',
      alt: 'Warm, thoughtful family elder portrait',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      id: 'memory',
      label: 'A MEMORY',
      subtitle: 'Preserved in quiet moments',
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
      alt: 'Shared laughter and intergenerational warmth',
      aspectRatio: 'aspect-[1/1]',
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
    url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hands coming together in mutual care and reconnection',
    caption: 'Rootedness as a living, daily practice',
  },

  // Section 9: The Roots Showcase
  showcaseImage: {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    alt: 'Intimate community gathering sharing stories around a table',
    caption: 'The virtual community table where our discoveries meet',
  },

  // Section 12: Final Emotional CTA
  finalImage: {
    url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Looking forward into the horizon with calm conviction',
    caption: 'Look back. Look within. Live forward.',
  },
};
