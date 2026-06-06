export const SITE_NAME = "Spiritual Peach";

export const SITE_TAGLINE =
  "Gentle spiritual tools for healing, growth, and inner peace.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Oracle Deck", href: "/oracle-deck" },
  { label: "Meditations", href: "/#meditations" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;

export const ORACLE_CATEGORIES = [
  {
    name: "Self-Love",
    description: "Worthy, acceptance, compassion, and boundaries.",
    examples: ["Worthy", "Acceptance", "Compassion", "Boundaries"],
  },
  {
    name: "Intuition",
    description: "Listen, trust, flow, and inner knowing.",
    examples: ["Listen", "Trust", "Flow", "Inner Knowing"],
  },
  {
    name: "Healing",
    description: "Release, forgiveness, renewal, and reflection.",
    examples: ["Release", "Forgiveness", "Renewal", "Reflection"],
  },
  {
    name: "Abundance",
    description: "Receive, expand, gratitude, and alignment.",
    examples: ["Receive", "Expand", "Gratitude", "Alignment"],
  },
  {
    name: "Transformation",
    description: "Rebirth, courage, becoming, and evolution.",
    examples: ["Rebirth", "Courage", "Becoming", "Evolution"],
  },
] as const;

export const MEDITATION_CATEGORIES = [
  {
    name: "Sleep Meditations",
    description: "Gentle guidance to soften into restful, restorative sleep.",
  },
  {
    name: "Nervous System Reset",
    description: "Calm your body and mind with grounding breath and presence.",
  },
  {
    name: "Morning Alignment",
    description: "Begin your day with intention, clarity, and soft focus.",
  },
  {
    name: "Confidence Activation",
    description: "Reconnect with your worth and step forward with ease.",
  },
] as const;

export const GUIDEBOOK_SECTIONS = [
  {
    title: "Message",
    description: "A gentle oracle message to meet you where you are.",
  },
  {
    title: "Reflection",
    description: "A thoughtful prompt to deepen your understanding.",
  },
  {
    title: "Journal Prompt",
    description: "Space to explore your inner world through writing.",
  },
  {
    title: "Affirmation",
    description: "A supportive phrase to carry with you.",
  },
] as const;

export const PEACH_GLOW_RESET = {
  title: "7-Day Peach Glow Reset",
  description:
    "A free gentle reset to help you reconnect with yourself — one soft step at a time.",
  features: [
    {
      title: "Daily Affirmation",
      description: "Start each day with words that nurture self-trust and warmth.",
    },
    {
      title: "Journal Prompt",
      description: "Reflect with guided questions designed to unlock clarity.",
    },
    {
      title: "Reflection Exercise",
      description: "Pause, breathe, and explore what your inner wisdom is sharing.",
    },
    {
      title: "Simple Ritual",
      description: "Small, intentional practices to anchor your daily glow.",
    },
  ],
} as const;

export const DECK_CARD_COUNT = 44;
