import { HERO_IMAGES } from '../config'

/* ---------------------------------------------------------------------
 * Hero photo grid
 * ---------------------------------------------------------------------
 * A static wall of hackathon photos that fills the hero behind the copy
 * (replaces the cross-fading carousel). Photos come from HERO_IMAGES in
 * config.ts (public/hero/…). The parent positions it, e.g. `absolute inset-0`.
 * ------------------------------------------------------------------- */

export default function HeroGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid auto-rows-fr grid-cols-2 gap-1.5 ${className}`}>
      {HERO_IMAGES.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ))}
    </div>
  )
}
