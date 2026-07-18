import { useEffect, useState } from 'react'
import { CONTACT_EMAIL, MAIN_SITE_URL } from '../config'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href={MAIN_SITE_URL}
          className="flex items-center gap-2.5"
          aria-label="PatriotHacks home"
        >
          <img
            src="/logo.png"
            alt=""
            aria-hidden
            className="h-9 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            PatriotHacks
          </span>
          <span className="hidden rounded-full bg-mason-soft px-2.5 py-0.5 text-xs font-semibold text-mason sm:inline">
            Sponsors
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href="#tiers"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate transition hover:bg-mist hover:text-ink sm:block"
          >
            Packages
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsoring%20PatriotHacks%202027`}
            className="rounded-full bg-mason px-4 py-2 text-sm font-semibold text-white transition hover:bg-mason-deep sm:px-5"
          >
            Become a sponsor
          </a>
        </div>
      </nav>
    </header>
  )
}
