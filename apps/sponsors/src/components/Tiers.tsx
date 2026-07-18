import { CONTACT_EMAIL, TIERS, benefitsForTier } from '../config'

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 size-4 shrink-0 text-mason"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function Tiers() {
  return (
    <section
      id="tiers"
      className="scroll-mt-20 bg-mist px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Sponsorship packages
          </h2>
          <p className="mt-4 text-slate">
            Pick the tier that fits your goals. Every tier is customizable — reach
            out and we'll tailor it to you.
          </p>
        </header>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const highlight = 'highlight' in tier && tier.highlight
            const benefits = benefitsForTier(tier.key)
            return (
              <div
                key={tier.key}
                className={`relative flex flex-col bg-paper p-7 ${
                  highlight
                    ? 'border-2 border-mason shadow-[0_30px_70px_-40px_rgba(0,102,51,0.7)] lg:-my-3'
                    : 'border border-line'
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold tracking-tight text-ink">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate">/ event</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b.label} className="flex gap-2.5 text-sm text-ink">
                      <Check />
                      <span>
                        {b.label}
                        {b.value && (
                          <span className="ml-1 font-semibold text-mason">
                            ({b.value})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    `${tier.name} sponsorship — PatriotHacks 2027`,
                  )}`}
                  className={`mt-7 inline-flex items-center justify-center px-6 py-3 font-semibold transition ${
                    highlight
                      ? 'bg-mason text-white hover:bg-mason-deep'
                      : 'border border-line text-ink hover:border-mason hover:text-mason'
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate">
          Need something bigger, or a custom in-kind package?{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Custom%20sponsorship%20—%20PatriotHacks%202027`}
            className="font-medium text-mason underline decoration-mason/40 underline-offset-4 transition hover:decoration-mason"
          >
            Let's talk.
          </a>
        </p>
      </div>
    </section>
  )
}
