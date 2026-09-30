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
  format: 'Virtual (Zoom & Guided Archive Portal)',
  duration: 'Four weeks',
  kickoffDate: '10 October 2026',
  kickoffTargetDate: '2026-10-10T16:30:00+02:00',
  kickoffTimeRwanda: '4:30 PM – 6:30 PM Rwanda Time (CAT / UTC+2)',
  cohortTag: 'Founding Cohort / Pilot',
  heroTagline: 'A four-week journey into identity, family, belonging and the stories that shaped us.',
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
      'Limited supported places available. We want cost not to prevent participation. A limited number of supported places are available.',
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
    description: 'Explore the people, stories and experiences that shaped your beginning.',
    themes: ['Lineage & elders', 'First environments', 'Inherited voices'],
    inquiry: 'Whose shoulders, struggles, and deliberate sacrifices made room for your arrival?',
  },
  {
    weekNumber: 'WEEK 02',
    title: 'WHAT DO I CARRY?',
    question: 'What came across the waters, borders, and quiet rooms?',
    description:
      'Investigate the names, languages, traditions, values, stories, objects and practices that travelled through your family.',
    themes: ['Names & nicknames', 'Lost or preserved tongues', 'Family rituals & heirlooms'],
    inquiry: 'What silent weights or treasured gifts have been passed into your hands without question?',
  },
  {
    weekNumber: 'WEEK 03',
    title: 'WHAT DO I CHOOSE?',
    question: 'Where does curiosity turn into agency?',
    description:
      'Move from investigation to agency. Decide what you want to reclaim, preserve, question or embody.',
    themes: ['Reclaiming forgotten pieces', 'Conscious boundaries', 'Forgiveness & discernment'],
    inquiry: 'You are not obligated to keep everything. What do you choose to honor, and what do you choose to lay down?',
  },
  {
    weekNumber: 'WEEK 04',
    title: 'WHO AM I BECOMING?',
    question: 'How do your roots ground your next steps?',
    description:
      'Bring your discoveries together and consider what you want to carry forward.',
    themes: ['Generational continuity', 'New family rituals', 'The Roots Showcase artifact'],
    inquiry: 'How will the descendants of your memory know what mattered deeply to you?',
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
  { title: 'Learning a family language', desc: 'Taking the first patient step into the words and sounds of your forebears.' },
  { title: 'Reconnecting with a relative', desc: 'Calling an elder or cousin to listen without agenda or haste.' },
  { title: 'Documenting a family story', desc: 'Recording an oral memory before details soften with time.' },
  { title: 'Learning a family recipe', desc: 'Cooking the stew, bread, or sauce that tastes like home in your own kitchen.' },
  { title: 'Researching a meaningful place', desc: 'Tracing the village, township, street, or river where your people lived.' },
  { title: 'Reviving a tradition', desc: 'Reintroducing a seasonal gathering, blessing, or storytelling ritual.' },
  { title: 'Changing how you introduce yourself', desc: 'Speaking your full name, meaning, or roots with intentional ease.' },
  { title: 'Choosing what you want to pass on', desc: 'Writing a letter or personal manifesto for the generations ahead.' },
];

export const SHOWCASE_ARTIFACTS: ShowcaseItem[] = [
  { name: 'Family Tree & Lineage Map', category: 'Archive', description: 'Visual mapping of generations and connections' },
  { name: 'Photograph + Story Essay', category: 'Memory', description: 'A restored archive photo paired with its forgotten context' },
  { name: 'Migration & Homeland Map', category: 'Geography', description: 'The physical journey across lands and waters' },
  { name: 'Recorded Elder Interview', category: 'Voice', description: 'Audio or video preserving the voice of someone who came before' },
  { name: 'Handwritten Family Recipe', category: 'Taste', description: 'The exact proportions and kitchen memories of a signature dish' },
  { name: 'Personal Poem or Ode', category: 'Word', description: 'Reflective writing on names, origins, and personal rootedness' },
  { name: 'Letter to the Past or Future', category: 'Epistle', description: 'Words written to an ancestor or an unborn grandchild' },
  { name: 'Revised Autobiography', category: 'Identity', description: 'A rewrite of who you are, grounded in your complete story' },
  { name: 'Audio Soundscape', category: 'Sound', description: 'Atmospheric recordings of home, language, and laughter' },
  { name: 'Reclaimed Cultural Practice', category: 'Living Tradition', description: 'A restored ritual, greeting, or home blessing' },
];

export const WHO_IS_THIS_FOR = [
  {
    title: 'People whose lives stretch across cultures',
    text: 'Moving between worlds, languages, or diasporic spaces, seeking an integrated sense of self.',
  },
  {
    title: 'People living away from where their families began',
    text: 'Navigating geographic distance while holding a quiet hunger for connection to their origins.',
  },
  {
    title: 'People curious about their family history',
    text: 'Those ready to ask the questions they didn’t have the vocabulary or courage to ask earlier.',
  },
  {
    title: 'People who feel connected to some parts and distant from others',
    text: 'Honoring that heritage is often messy, fragmented, or uneven—and welcoming all of it.',
  },
  {
    title: 'Parents thinking about what they want to pass forward',
    text: 'Wanting to anchor their children with deep roots before the world tells them who they are.',
  },
  {
    title: 'People who have questions they never thought to ask',
    text: 'Realizing that time moves fast, and the custodians of family memory won’t be here forever.',
  },
  {
    title: 'People who simply want to understand themselves more deeply',
    text: 'Recognizing that knowing where you come from clarifies where you are going.',
  },
];
