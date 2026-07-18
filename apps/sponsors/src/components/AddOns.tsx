import { ADD_ONS } from '../config'

export default function AddOns() {
  return (
    <section className="bg-mist px-6 py-24 sm:px-10 sm:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            À la carte add-ons
          </h2>
          <p className="mt-4 text-slate">
            Layer any of these onto a package — or sponsor them stand-alone.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ADD_ONS.map((a) => (
            <div key={a.name} className="border border-line bg-paper p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">{a.name}</h3>
                <span className="font-display font-bold text-mason">{a.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
