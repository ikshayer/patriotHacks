# PatriotHacks

George Mason University's hackathon — landing site. **Coming Spring 2027.**

Built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Sections

- **Hero** — plain white background with an animated field of drifting dots
  (canvas, respects reduced-motion), the PatriotHacks wordmark, and the
  interest-list email bar.
- **Sponsors** — tiered logo grid (empty until you add sponsors).
- **FAQ** — accordion of common questions.
- **Contact band** — "Questions? Reach out to patriothacksgmu@gmail.com".
- **Footer** — dark, two-column: identity on the left, code of conduct +
  socials + address on the right.

The theme is George Mason **green + gold on white**.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build
```

## Editing content

Almost everything lives in **`src/config.ts`**:

- `CONTACT_EMAIL` — the address the contact band, footer, and sponsor CTA use.
- `EVENT` — the "Coming Spring 2027" label and the eyebrow text.
- `SPONSOR_TIERS` — add sponsors here (see below).
- `FAQS` — the question/answer list.
- `FOOTER` — code-of-conduct link, address lines, social links, support-logo
  partners, and the "built by" credit (see below).

### Add your logo

Drop your logo into `public/` as `logo.svg` (or `logo.png` and update the
`src` in `src/components/Navbar.tsx`). It appears next to the wordmark in the
nav. The big hero title is set in type, so no image is required there.

### Add / edit sponsors

The sponsors section is a rotating grid of tiles; clicking a tile shows that
company's details in the panel beside it. Edit the `SPONSORS` array in
`src/config.ts`:

```ts
{
  name: 'Acme Corp',
  description: 'What the company does, in a sentence or two.',
  logo: '/sponsors/acme.svg', // optional — omit to show the name as text
  url: 'https://acme.com',     // optional — adds a "Visit website" link
}
```

`logo` is optional: until you add a logo file (drop it in `public/sponsors/`),
each tile shows the company name as text. Order in the array = order in the grid.

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

### Edit the footer

In `src/config.ts`, the `FOOTER` object controls the dark footer:

- `codeOfConductUrl` — defaults to the official MLH Code of Conduct.
- `address` — array of lines shown stacked.
- `socials` — one entry per platform (`instagram`, `twitter`, `facebook`,
  `linkedin`, `github`). An empty `href` renders the icon greyed-out (a visual
  placeholder) rather than a link; fill it in to make it clickable.

## Deploy

Configured for **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`).
Import the repo on either — build command `npm run build`, output `dist/`.
