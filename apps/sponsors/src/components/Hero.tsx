import { CONTACT_EMAIL, HERO } from '../config'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col items-start justify-center overflow-hidden bg-paper px-6 pb-24 pt-32 sm:px-10 lg:px-20"
    >
      {/* Subtle dot-grid backdrop — brand-quiet, echoes the main site's dots. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,23,18,0.06) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 70% 30%, #000 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 70% 30%, #000 30%, transparent 75%)',
        }}
      />
      {/* Soft green glow, top-right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-mason-soft/70 blur-3xl"
      />

      <div className="animate-rise relative z-10 flex w-full max-w-3xl flex-col items-start">
        <span className="mb-5 inline-flex items-center rounded-full border border-mason/20 bg-mason-soft px-4 py-1.5 text-sm font-semibold text-mason">
          {HERO.eyebrow}
        </span>

        <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {HERO.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
          {HERO.subtitle}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#tiers"
            className="inline-flex items-center justify-center bg-mason px-8 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,102,51,0.6)] transition hover:bg-mason-deep"
          >
            View sponsorship packages
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsoring%20PatriotHacks%202027`}
            className="inline-flex items-center justify-center border border-line bg-paper px-8 py-3.5 font-semibold text-ink transition hover:border-mason hover:text-mason"
          >
            Talk to the team
          </a>
        </div>
      </div>
    </section>
  )
}
