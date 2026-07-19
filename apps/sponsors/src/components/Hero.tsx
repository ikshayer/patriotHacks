import { HERO } from '../config'
import HeroGrid from './HeroGrid'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper"
    >
      {/* Photo grid — right side only; a wall of hackathon shots. */}
      <HeroGrid className="absolute inset-y-0 right-0 w-1/2 lg:w-[52%]" />

      {/* Feather the grid's left edge into the dark left side so there's no
          hard seam. The left half stays solid for the logo + headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper from-45% via-paper/40 via-60% to-transparent to-78%"
      />

      {/* Logo + wordmark — pinned to the top-left corner (out of the layout
          flow so it never shifts). */}
      <div className="absolute left-6 top-10 z-20 flex items-center gap-3 sm:left-10 sm:top-14">
        <img
          src="/logo.png"
          alt=""
          aria-hidden
          className="h-14 w-auto sm:h-16"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          PatriotHacks
        </span>
      </div>

      {/* Headline — middle-left. */}
      <div className="animate-rise relative z-10 my-auto px-6 sm:px-10 lg:px-16">
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {HERO.title}
        </h1>
      </div>
    </section>
  )
}
