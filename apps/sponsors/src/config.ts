/* =====================================================================
 * PatriotHacks — Sponsorship site content & configuration
 * ---------------------------------------------------------------------
 * This is the sponsorship prospectus site. Everything a sponsor sees —
 * the pitch, the stats, the tiers, and the benefits matrix — lives in
 * this one file. Components read from here, so you rarely touch JSX.
 *
 * NOTE: the numbers, prices, and benefits below are placeholders to get
 * the layout right. Replace them with your real prospectus figures
 * before sharing this with sponsors.
 * ===================================================================== */

/** Where the "Get in touch" / contact CTAs point. */
export const CONTACT_EMAIL = 'patriothacksgmu@gmail.com'

/** Link back to the main marketing site (nav + footer). */
export const MAIN_SITE_URL = 'https://patriothacks.org'

export const EVENT = {
  /** Shown throughout the prospectus. */
  seasonLabel: 'Spring 2027',
  university: 'George Mason University',
  location: 'Fairfax, VA',
} as const

/* ---------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------- */
export const HERO = {
  eyebrow: 'Sponsorship Prospectus · Spring 2027',
  title: 'Partner with PatriotHacks',
  subtitle:
    "Put your brand in front of the next generation of builders. PatriotHacks is George Mason University's flagship student hackathon — a weekend where hundreds of students design, build, and ship. Your sponsorship fuels it, and puts you first in line for their talent.",
} as const

/* ---------------------------------------------------------------------
 * By the numbers — the stat band under the hero.
 * (Projected figures for Spring 2027 — update with real numbers.)
 * ------------------------------------------------------------------- */
export type Stat = { value: string; label: string }

export const STATS: Stat[] = [
  { value: '500+', label: 'Student hackers' },
  { value: '36', label: 'Hours of non-stop building' },
  { value: '40k+', label: 'Students across GMU' },
  { value: '#1', label: 'Largest public university in Virginia' },
]

/* ---------------------------------------------------------------------
 * Why sponsor — the value-proposition cards.
 * ------------------------------------------------------------------- */
export type Value = { title: string; body: string }

export const WHY_SPONSOR: Value[] = [
  {
    title: 'Recruit early',
    body: "Meet motivated CS, engineering, and design students before they hit the job market. Collect résumés, run interviews on-site, and watch candidates build under real deadlines.",
  },
  {
    title: 'Brand visibility',
    body: 'Your logo on the venue, the website, the swag, and every project submission. Reach thousands of students across the DMV region in person and online.',
  },
  {
    title: 'Showcase your tech',
    body: 'Run a workshop, sponsor an API prize track, or drop by with hardware. Students build on the tools they discover here — and carry them into their careers.',
  },
  {
    title: 'Invest in the community',
    body: 'Support the next generation of technologists at one of the most diverse public universities in the country, minutes from Washington, D.C.',
  },
]

/* ---------------------------------------------------------------------
 * Tiers + benefits — the single source of truth.
 * ---------------------------------------------------------------------
 * TIERS defines the columns (name + price). BENEFITS defines the rows;
 * each benefit marks which tiers include it:
 *   true    → included (renders a checkmark)
 *   'text'  → included with a specific value (e.g. "3", "Yes — 1 track")
 *   absent  → not included
 *
 * Both the tier cards and the comparison table are generated from this,
 * so they never drift out of sync. Add a benefit → add its `tiers` map.
 * ------------------------------------------------------------------- */
export const TIERS = [
  { key: 'bronze', name: 'Bronze', price: '$500' },
  { key: 'silver', name: 'Silver', price: '$1,500' },
  { key: 'gold', name: 'Gold', price: '$3,000', highlight: true },
  { key: 'platinum', name: 'Platinum', price: '$5,000' },
  { key: 'title', name: 'Title', price: '$10,000' },
] as const

export type TierKey = (typeof TIERS)[number]['key']

export type Benefit = {
  label: string
  detail?: string
  tiers: Partial<Record<TierKey, boolean | string>>
}

export const BENEFITS: Benefit[] = [
  {
    label: 'Logo on website & event signage',
    tiers: { bronze: true, silver: true, gold: true, platinum: true, title: true },
  },
  {
    label: 'Shout-out on social media',
    tiers: { bronze: true, silver: true, gold: true, platinum: true, title: true },
  },
  {
    label: 'Access to opt-in résumé book',
    tiers: { silver: true, gold: true, platinum: true, title: true },
  },
  {
    label: 'Logo on event T-shirt',
    tiers: { silver: 'Small', gold: 'Medium', platinum: 'Large', title: 'Prominent' },
  },
  {
    label: 'Recruiter table at the venue',
    tiers: { gold: true, platinum: true, title: true },
  },
  {
    label: 'Host a tech talk or workshop',
    tiers: { gold: '30 min', platinum: '45 min', title: '60 min' },
  },
  {
    label: 'Sponsored prize track',
    tiers: { platinum: '1 track', title: '2 tracks' },
  },
  {
    label: 'Send judges & mentors',
    tiers: { gold: '2', platinum: '4', title: 'Unlimited' },
  },
  {
    label: 'Opening-ceremony speaking slot',
    tiers: { title: true },
  },
  {
    label: 'Naming rights ("presented by …")',
    tiers: { title: true },
  },
]

/** Benefits included in a given tier (used by the tier cards). */
export function benefitsForTier(key: TierKey): { label: string; value?: string }[] {
  return BENEFITS.filter((b) => b.tiers[key]).map((b) => {
    const v = b.tiers[key]
    return typeof v === 'string' ? { label: b.label, value: v } : { label: b.label }
  })
}

/* ---------------------------------------------------------------------
 * À la carte — optional add-ons on top of any tier.
 * ------------------------------------------------------------------- */
export type AddOn = { name: string; price: string; description: string }

export const ADD_ONS: AddOn[] = [
  {
    name: 'Meal sponsorship',
    price: '$1,000',
    description: 'Put your brand on a catered meal for all hackers — breakfast, lunch, dinner, or the midnight snack run.',
  },
  {
    name: 'Swag insert',
    price: '$400',
    description: 'Include your stickers, flyers, or branded goodies in every attendee swag bag.',
  },
  {
    name: 'Bonus prize',
    price: 'In-kind',
    description: 'Donate hardware, subscriptions, or credits as a prize for your own mini-challenge.',
  },
]

/* ---------------------------------------------------------------------
 * FAQ — sponsor-facing questions.
 * ------------------------------------------------------------------- */
export type FaqItem = { q: string; a: string }

export const FAQS: FaqItem[] = [
  {
    q: 'How do funds get used?',
    a: 'Sponsorship covers food, venue, prizes, hardware, and travel for students. PatriotHacks is a free, student-run event — every dollar goes directly to the attendee experience.',
  },
  {
    q: 'Can we customize a package?',
    a: `Absolutely. The tiers below are a starting point — if you have specific recruiting, branding, or workshop goals, email us at ${CONTACT_EMAIL} and we'll build a package around them.`,
  },
  {
    q: 'When is the deadline to sponsor?',
    a: 'The earlier the better — logo placement, workshop slots, and prize tracks are confirmed on a first-come basis as the event approaches. Reach out any time before Spring 2027.',
  },
  {
    q: 'Do you accept in-kind sponsorship?',
    a: 'Yes — hardware, cloud credits, software licenses, food, and API access all make great in-kind contributions. We can map their value onto a tier.',
  },
]

/* ---------------------------------------------------------------------
 * Footer
 * ------------------------------------------------------------------- */
export const FOOTER = {
  codeOfConductUrl: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  address: ['George Mason University', 'Fairfax, VA 22030'],
} as const
