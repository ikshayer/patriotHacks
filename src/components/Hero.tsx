import DotField from './DotField'
import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-start justify-center overflow-hidden bg-paper px-6 pb-24 pt-28 text-left sm:px-10 sm:pt-32 lg:px-20"
    >
      <DotField />

      {/* Left-to-right paper wash keeps the copy legible while the dot scenes
          on the right stay visible. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 28%, rgba(255,255,255,0.35) 48%, transparent 66%)',
        }}
      />

      <div className="animate-rise relative z-10 flex w-full max-w-xl flex-col items-start">
        {/* Wordmark */}
        <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-ink sm:text-7xl">
          PatriotHacks
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-lg text-base text-slate sm:text-lg">
          George Mason University's hackathon is coming Spring 2027. Drop your
          email and we'll keep you in the loop.
        </p>

        {/* Email capture */}
        <div id="notify" className="mt-5 w-full max-w-md scroll-mt-28">
          <EmailSignup />
        </div>
      </div>
    </section>
  )
}
