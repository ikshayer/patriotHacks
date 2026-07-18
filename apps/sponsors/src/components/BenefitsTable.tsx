import { BENEFITS, TIERS, type Benefit, type TierKey } from '../config'

function Cell({ value }: { value: Benefit['tiers'][TierKey] }) {
  if (typeof value === 'string') {
    return <span className="text-sm font-semibold text-mason">{value}</span>
  }
  if (value) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="mx-auto size-5 text-mason"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="Included"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  return (
    <span aria-label="Not included" className="text-slate/40">
      —
    </span>
  )
}

export default function BenefitsTable() {
  return (
    <section
      id="benefits"
      className="scroll-mt-20 bg-paper px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Compare benefits
          </h2>
          <p className="mt-4 text-slate">
            Every benefit, side by side across all tiers.
          </p>
        </header>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-4 pr-4 text-sm font-semibold text-ink">
                  Benefit
                </th>
                {TIERS.map((t) => (
                  <th
                    key={t.key}
                    className={`px-3 py-4 text-center ${
                      'highlight' in t && t.highlight ? 'bg-mason-soft/50' : ''
                    }`}
                  >
                    <div className="font-display text-base font-bold text-ink">
                      {t.name}
                    </div>
                    <div className="text-xs font-medium text-slate">{t.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BENEFITS.map((b) => (
                <tr key={b.label} className="border-b border-line">
                  <td className="py-4 pr-4 text-sm text-ink">{b.label}</td>
                  {TIERS.map((t) => (
                    <td
                      key={t.key}
                      className={`px-3 py-4 text-center align-middle ${
                        'highlight' in t && t.highlight ? 'bg-mason-soft/50' : ''
                      }`}
                    >
                      <Cell value={b.tiers[t.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
