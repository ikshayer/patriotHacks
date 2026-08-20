# PatriotHacks

George Mason University's hackathon — **coming Spring 2027**. One site, built
with **Vite + React + TypeScript + Tailwind CSS v4**.

| Page | URL | Source | What it is |
| --- | --- | --- | --- |
| **Home** | `/` | `index.html` → [`src/`](src) | Landing page — hero, sponsor grid, FAQ, interest-list email capture. |
| **Sponsor** | `/sponsor` | `sponsor/index.html` → [`src/sponsor/`](src/sponsor) | Sponsorship prospectus — the pitch, stats, past-sponsor reel, benefits. |
| **Book** | `/book` | [`public/book/index.html`](public/book/index.html) | Standalone Cal.com booking embed the sponsor page links to. |

Home and Sponsor are two entry points of one Vite build, so each page ships
only its own JavaScript and keeps its own `<title>` and social-preview tags.
They share `src/index.css` (the green-and-gold-on-white theme) and the parts of
`src/config.ts` that both need.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173  (and /sponsor, /book)
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build
npm run lint     # type-check only
```

## Editing content

Almost everything is data, not JSX.

**[`src/config.ts`](src/config.ts)** — the home page, plus anything shared:

- `CONTACT_EMAIL` — used by the contact band, both footers, and the FAQ.
- `SPONSOR_PAGE_URL` — where "Interested in Sponsoring?" points (`/sponsor`).
- `SPONSORS` — the home page's rotating logo grid. `logo` is optional; without
  it a tile shows the company name as text. Order in the array = order in the
  grid. Logo files live in `public/sponsors/`.
- `FAQS` — the accordion's question/answer list.
- `FOOTER` — code-of-conduct link, address lines, and social links. A social
  entry with an empty `href` renders greyed-out instead of clickable.
- `SIGNUP_ENDPOINT` — the interest-list capture (see below).

**[`src/sponsor/config.ts`](src/sponsor/config.ts)** — the `/sponsor` page:

- `HERO`, `ABOUT`, `STATS`, `LOCATION` — the pitch, the stat rectangle, and the
  map block. Stats are projections; swap in real figures.
- `REEL_SPONSORS` — the past-sponsor marquee. These are a **separate logo set**
  under `public/sponsors/reel/`, because the reel flattens each logo to a black
  silhouette (`raw: true` opts a logo out of that filter). The home page's grid
  uses `public/sponsors/` instead.
- `TIERS` + `BENEFITS` — the tier/benefit matrix data. Prices ship as
  **placeholders**; replace them before sharing this with sponsors.
- `BOOK_MEETING_URL` — the "Book a meeting" target. To change which calendar it
  opens, edit `public/book/index.html`.
- `CONTACT_EMAIL` and `FOOTER` are re-exported from `src/config.ts`, so there is
  only one place to edit them.

### Wire up the email signups (private Google Sheet database)

The "Notify me" bar appends every email (with a timestamp) to a Google Sheet
only you can see — a hidden database. It POSTs to a Google Apps Script Web App,
so there's no backend to host and no secrets in the code.

1. Create a **Google Sheet** (this is your database). Optionally add a header
   row: `Timestamp | Email`.
2. In that Sheet: **Extensions → Apps Script**. Replace the placeholder code
   with the contents of [`apps-script/Code.gs`](apps-script/Code.gs) and save.
3. **Deploy → New deployment → Web app.** Set **Execute as: Me** and **Who has
   access: Anyone**, click Deploy, authorize, and copy the `/exec` URL.
4. Paste that URL into `SIGNUP_ENDPOINT` in `src/config.ts`.

Until `SIGNUP_ENDPOINT` is set, the bar runs in **demo mode**: it shows the
success message without storing anything. New emails then land as rows in your
Sheet. (Only people you share the Sheet with can read it — the endpoint URL
itself is safe to ship.)

## Deploy

One project, one build. Configured for **Vercel** (`vercel.json`) and
**Netlify** (`netlify.toml`): build command `npm run build`, output `dist/`,
**root directory the repo root**.

Both configs rewrite the bare `/sponsor` and `/book` paths to their
`index.html` files; `vite.config.ts` does the same for the dev and preview
servers, so every URL resolves identically in all three.
