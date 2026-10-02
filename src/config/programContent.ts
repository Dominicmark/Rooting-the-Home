/**
 * ROOTING THE HOME — PROGRAM CONTENT & CONFIGURATION
 *
 * All program copy, dates, schedule, and cohort details are organized here.
 * You can easily adjust dates, pricing, or registration checkout URLs.
 */

export interface JourneyWeek {
  weekNumber: string;
  title: string;
  question: string;
  description: string;
  takeaways: string[];
  themes: string[];
  inquiry: string;
}

export interface ShowcaseItem {
  name: string;
  category: string;
  description: string;
}

export const PROGRAM_CONFIG = {
  name: 'ROOTING THE HOME',
  format: 'Virtual (Interactive Circles & Archive Portal)',
  duration: 'Four weeks',
  kickoffDate: '10 October 2026',
  kickoffTargetDate: '2026-10-10T16:30:00+02:00',
  kickoffTimeRwanda: '4:30 PM – 6:30 PM Rwanda Time (CAT / UTC+2)',
  cohortTag: 'Founding Cohort / Pilot',
  heroTagline: 'Four weeks into identity, family, belonging, and the stories that made you.',
  deeperMovement: [
    { label: 'LOOK BACK', desc: 'Who made me? What do I carry?' },
    { label: 'LOOK WITHIN', desc: 'What do I choose?' },
    { label: 'LIVE FORWARD', desc: 'Who am I becoming?' },
  ],
  pricing: {
    earlyBird: {
      label: 'EARLY BIRD',
      price: '$65',
      note: 'Available for first 25 founding cohort members',
    },
    standard: {
      label: 'STANDARD',
      price: '$85',
      note: 'Complete four-week guided experience & showcase',
    },
    supportedNote:
      'Cost should never prevent participation. Limited supported places are reserved for every cohort.',
  },
  // Google Form registration link for the founding cohort
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSff8pej4gC14wV-0psR6BjWOigUhCiIt-c6Yefnv7PwfI0QjA/viewform',
  checkoutUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSff8pej4gC14wV-0psR6BjWOigUhCiIt-c6Yefnv7PwfI0QjA/viewform',
};

export const JOURNEY_WEEKS: JourneyWeek[] = [
  {
    weekNumber: 'WEEK 01',
    title: 'WHO MADE ME?',
    question: 'Where does your beginning live?',
    description: 'Uncover the people, places, and origins that shaped your earliest world.',
    takeaways: [
      'Map ancestral lineage and elders',
      'Trace first sensory environments',
      'Listen for inherited voices and beliefs',
    ],
    themes: ['Lineage & elders', 'First homes', 'Inherited voices'],
    inquiry: 'Whose shoulders made room for your arrival?',
  },
  {
    weekNumber: 'WEEK 02',
    title: 'WHAT DO I CARRY?',
    question: 'What came across the waters and quiet rooms?',
    description: 'Investigate the names, tongues, rituals, and unspoken heirlooms traveling through your bloodline.',
    takeaways: [
      'Unpack the meanings behind names',
      'Acknowledge lost or quieted mother tongues',
      'Identify family traditions and silent weights',
    ],
    themes: ['Ancestral names', 'Mother tongues', 'Family heirlooms'],
    inquiry: 'What silent weights or gifts were placed in your hands?',
  },
  {
    weekNumber: 'WEEK 03',
    title: 'WHAT DO I CHOOSE?',
    question: 'Where does curiosity turn into agency?',
    description: 'Move from passive inheritance to conscious agency. Decide what to honor and what to release.',
    takeaways: [
      'Reclaim forgotten cultural practices',
      'Establish loving generational boundaries',
      'Practice forgiveness and clear discernment',
    ],
    themes: ['Reclaimed pieces', 'Conscious boundaries', 'Discernment'],
    inquiry: 'What do you choose to honor, and what do you choose to lay down?',
  },
  {
    weekNumber: 'WEEK 04',
    title: 'WHO AM I BECOMING?',
    question: 'How do roots ground your next steps?',
    description: 'Synthesize your discoveries into a living legacy and craft your personal Roots artifact.',
    takeaways: [
      'Define new family rituals for tomorrow',
      'Draft your personal manifesto of belonging',
      'Share your piece at the Roots Showcase',
    ],
    themes: ['Living rituals', 'Future lineage', 'Roots Showcase'],
    inquiry: 'How will your descendants know what mattered deeply to you?',
  },
];

export const ROOT_QUESTIONS = [
  {
    id: 'name',
    prompt: 'Where does my name come from?',
    context: 'The unspoken meanings, ancestral namesakes, and stories embedded in what we are called.',
  },
  {
    id: 'migration',
    prompt: 'Why did my family migrate?',
    context: 'The pressures, hopes, economic shifts, and conflicts that prompted loved ones to cross borders.',
  },
  {
    id: 'language',
    prompt: 'What language disappeared in my family?',
    context: 'The mother tongues that stopped being spoken at dinner tables, and why they were quieted.',
  },
  {
    id: 'traditions',
    prompt: 'What traditions mattered to my grandparents?',
    context: 'The songs, recipes, seasonal rhythms, and prayers that held home together.',
  },
  {
    id: 'identity',
    prompt: 'What part of my identity have I hesitated to claim?',
    context: 'The facets of heritage that felt too complex, distant, or contradictory to own proudly.',
  },
  {
    id: 'children',
    prompt: 'What do I want my children to know that I currently cannot teach them?',
    context: 'The knowledge gaps we feel urgency to bridge before another generation passes.',
  },
];

export const ROOTED_ACTIONS = [
  { title: 'Reclaim a Mother Tongue', desc: 'Take one patient step into the words and sounds of your forebears.' },
  { title: 'The Elder Dialogue', desc: 'Call an elder or relative to listen without agenda or haste.' },
  { title: 'Record an Oral Memory', desc: 'Preserve an audio story before details soften with time.' },
  { title: 'Cook an Inherited Dish', desc: 'Recreate a grandmother’s recipe in your own kitchen.' },
  { title: 'Trace Ancestral Soil', desc: 'Map the village, street, or river where your people began.' },
  { title: 'Revive a Tradition', desc: 'Reintroduce a seasonal blessing, greeting, or family ritual.' },
];

export const SHOWCASE_ARTIFACTS: ShowcaseItem[] = [
  { name: 'Family Lineage Map', category: 'Archive', description: 'Visual mapping of generations and connections' },
  { name: 'Photo & Memory Essay', category: 'Memory', description: 'A restored archive photo paired with its forgotten context' },
  { name: 'Migration Odyssey Map', category: 'Geography', description: 'The physical journey across lands and waters' },
  { name: 'Elder Voice Recording', category: 'Voice', description: 'Preserving the voice of someone who came before' },
  { name: 'Handwritten Recipe', category: 'Taste', description: 'Exact proportions and kitchen memories of home' },
  { name: 'Manifesto of Belonging', category: 'Identity', description: 'A personal rewrite of who you are, grounded in your complete story' },
];

export const WHO_IS_THIS_FOR = [
  {
    title: 'Living Across Cultures',
    text: 'Moving between worlds, languages, or diaspora spaces—seeking an integrated anchor in self.',
  },
  {
    title: 'Keepers of Family Memory',
    text: 'Eager to record oral memories, preserve recipes, and document roots before custodians pass.',
  },
  {
    title: 'Asking Unspoken Questions',
    text: 'Curious about migrations, naming lineages, or interrupted stories never voiced at dinner tables.',
  },
  {
    title: 'Anchoring the Next Generation',
    text: 'Parents wanting to ground their children in deep roots before the world defines them.',
  },
];

export const COMMUNITY_BULLETS = [
  'Diaspora seekers navigating multiple homes and borders',
  'Keepers of oral memory, recipes, and heirlooms',
  'Parents wanting to ground children in living lineage',
  'Anyone holding questions their family never answered',
];

export interface WebinarSpeaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  location?: string;
  focusArea: string;
  topics: string[];
  takeaways: string[];
  shortBio: string;
  fullBio: string;
  quote?: string;
  credentials?: string[];
  imageUrl: string;
  rawImageUrl: string;
}

export const WEBINAR_SPEAKERS: WebinarSpeaker[] = [
  {
    id: 'steffi-nineza',
    name: 'Steffi B. Nineza',
    role: 'Head of Gender & Inclusion',
    organization: 'Mastercard Foundation Rwanda',
    location: 'Kigali, Rwanda',
    focusArea: 'Inclusive Systems & Community Anchoring',
    topics: ['Inclusion & Safeguarding', 'Youth Leadership', 'Systems Change'],
    takeaways: [
      'Designing systems where underserved groups find genuine belonging',
      'Refugee inclusion, youth mentorship, and dignified livelihoods',
      'Bridging strategy, finance, and social impact across Africa & Canada',
    ],
    shortBio:
      'Head of Gender & Inclusion at Mastercard Foundation Rwanda Country Programs, championing refugee inclusion, youth leadership, and dignified work.',
    fullBio:
      "Steffi B. Nineza leads gender, disability, refugee inclusion, and safeguarding across Mastercard Foundation's Rwanda investments. With background across finance, operations, and social impact at Absa Group and Deloitte, she champions systemic opportunities for young women and underserved groups. Steffi holds an MBA from the University of Pretoria and is a Chartered Professional Accountant (CPA, CA).",
    quote:
      'Advancing spaces where young people and underserved communities find deep dignity, belonging, and enduring opportunity.',
    credentials: [
      'MBA, University of Pretoria',
      'Chartered Professional Accountant (CPA, CA)',
      'Leadership alumnus: Deloitte & Absa Group',
    ],
    imageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/c_fill,g_face,w_600,h_750,q_auto,f_auto/v1790776829/WhatsApp_Image_2026-09-30_at_12.35.35_PM_cxemas.jpg',
    rawImageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790776829/WhatsApp_Image_2026-09-30_at_12.35.35_PM_cxemas.jpg',
  },
  {
    id: 'felix',
    name: 'Felix',
    role: 'Historian & Identity Researcher',
    organization: 'Zürich, Switzerland',
    location: 'London · Zürich · Nigeria',
    focusArea: 'Diaspora Histories & Evolving Lineage',
    topics: ['Diaspora Identity', 'Igbo Heritage', 'European & African Memory'],
    takeaways: [
      'Navigating multi-rooted identity across 5 countries and languages',
      'Reclaiming Igbo heritage against dominant cultural narratives',
      'How historical memory and archival silences shape personal belonging',
    ],
    shortBio:
      'Zürich-based historian with German and Nigerian roots. Born in London and lived across five countries, researching how identity evolves through diaspora and memory.',
    fullBio:
      'Felix is a Zürich-based historian with German and Nigerian roots, born in London. Having lived across five countries, he explores identity as an evolving continuum. Native in English and German, his Igbo identity is the one he intentionally reclaimed. He completed his IB at Schule Schloss Salem and holds a BA in History from Utrecht University.',
    quote:
      'Identity is an evolving concept—bridging what we carry natively with the ancestral lineage waiting to break through.',
    credentials: [
      'BA in History, Utrecht University',
      'Schule Schloss Salem International Baccalaureate',
      'Trilingual research across English, German & Igbo',
    ],
    imageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/c_fill,g_face,w_600,h_750,q_auto,f_auto/v1790776829/WhatsApp_Image_2026-09-30_at_12.38.33_PM_mhfj7g.jpg',
    rawImageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790776829/WhatsApp_Image_2026-09-30_at_12.38.33_PM_mhfj7g.jpg',
  },
  {
    id: 'amonica-hubbard',
    name: "A'Monica Hubbard",
    role: 'Entrepreneur & Founder',
    organization: 'Kugaruka Iwacu, Ltd',
    location: 'Kigali, Rwanda',
    focusArea: 'Homecoming, Belonging & Rwandan Hospitality',
    topics: ['Ancestral Return', 'Homecoming', 'Cultural Hospitality'],
    takeaways: [
      'The emotional realities of returning to ancestral African soil',
      'Crafting spaces of sanctuary, craftsmanship, and peaceful living',
      'Rwandan hospitality as a vessel for diaspora reconnection',
    ],
    shortBio:
      'Entrepreneur on an intentional journey back to ancestral soil, founding Kugaruka Iwacu to offer every traveler a sanctuary of belonging and craftsmanship in Rwanda.',
    fullBio:
      'Earlier this year, A’Monica began an intentional journey back to the continent—a return to ancestral roots. Kugaruka Iwacu reflects both her own homecoming and her mission that every guest feels deep belonging through Rwandan hospitality, local craftsmanship, and peaceful living.',
    quote:
      'A return to ancestral roots—offering every guest a sanctuary rooted in hospitality, craftsmanship, and peaceful living.',
    credentials: [
      'Founder, Kugaruka Iwacu, Ltd',
      'Curator of Rooted Hospitality & Craftsmanship',
      'Diaspora Return Practitioner',
    ],
    imageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/c_fill,g_face,w_600,h_750,q_auto,f_auto/v1790777613/WhatsApp_Image_2026-09-30_at_3.12.42_PM_v3uul8.jpg',
    rawImageUrl:
      'https://res.cloudinary.com/dbbw8jsjc/image/upload/v1790777613/WhatsApp_Image_2026-09-30_at_3.12.42_PM_v3uul8.jpg',
  },
];

