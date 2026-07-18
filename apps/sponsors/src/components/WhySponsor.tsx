import { WHY_SPONSOR } from '../config'

export default function WhySponsor() {
  return (
    <section
      id="why"
      className="scroll-mt-20 bg-paper px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why sponsor PatriotHacks?
          </h2>
          <p className="mt-4 text-slate">
            A weekend of your investment turns into a semester of goodwill — and a
            pipeline of talent that remembers who showed up.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_SPONSOR.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col border border-line bg-paper p-6 transition hover:border-mason/40 hover:shadow-[0_20px_50px_-30px_rgba(0,102,51,0.5)]"
            >
              <span className="font-display text-sm font-bold text-mason">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
