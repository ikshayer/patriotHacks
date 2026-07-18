import { STATS } from '../config'

export default function Stats() {
  return (
    <section className="border-y border-line bg-mist px-6 py-14 sm:px-10 sm:py-16 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="font-display text-4xl font-bold tracking-tight text-mason sm:text-5xl">
              {s.value}
            </span>
            <span className="mt-2 max-w-[16ch] text-sm text-slate">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
