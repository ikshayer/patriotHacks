import { CONTACT_EMAIL, EVENT, FOOTER, MAIN_SITE_URL } from '../config'

function ContactBand() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-mason px-5 py-20 text-center sm:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mt-4 text-mason-soft">
          Ready to sponsor, or want a custom package? We'll get back to you within
          a couple of days.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Sponsoring%20PatriotHacks%202027`}
          className="mt-8 inline-block bg-paper px-8 py-3.5 font-semibold text-mason transition hover:bg-mason-soft"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <ContactBand />

      <footer className="bg-night px-5 py-14 text-slate sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-12 text-center md:grid-cols-2 md:text-left">
          {/* Left — identity */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-mono.png"
                alt=""
                aria-hidden
                className="h-10 w-auto invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-display text-xl font-bold text-white">
                PatriotHacks
              </span>
            </div>
            <p className="mt-5 text-sm text-white/60">
              © {year} PatriotHacks · {EVENT.university}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 text-sm text-white/60 transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Right — links */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={MAIN_SITE_URL}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              ← Back to main site
            </a>
            <a
              href={FOOTER.codeOfConductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              MLH Code of Conduct
            </a>
            <address className="text-sm not-italic leading-relaxed text-white/60 md:text-right">
              {FOOTER.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </footer>
    </>
  )
}
