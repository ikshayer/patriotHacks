# PatriotHacks

Monorepo for George Mason University's hackathon, **PatriotHacks**. Two
independent sites, each deployed separately:

| App | Path | What it is |
| --- | --- | --- |
| **Main site** | [`apps/web`](apps/web) | Public landing page — hero, sponsors, FAQ, interest-list email capture. |
| **Sponsors site** | [`apps/sponsors`](apps/sponsors) | Sponsorship prospectus — tiers, benefits matrix, and add-ons for prospective sponsors. |

Both are **Vite + React + TypeScript + Tailwind CSS v4**, managed with
**npm workspaces**.

## Getting started

```bash
npm install            # installs deps for both apps (run once, at the root)

npm run dev            # main site  → http://localhost:5173
npm run dev:sponsors   # sponsors   → http://localhost:5174
```

## Scripts (run from the repo root)

| Command | Does |
| --- | --- |
| `npm run dev` / `npm run dev:web` | Dev server for the main site (:5173). |
| `npm run dev:sponsors` | Dev server for the sponsors site (:5174). |
| `npm run build` | Build **both** apps. |
| `npm run build:web` | Build only the main site → `apps/web/dist`. |
| `npm run build:sponsors` | Build only the sponsors site → `apps/sponsors/dist`. |
| `npm run preview:web` / `npm run preview:sponsors` | Serve a built app locally. |
| `npm run lint` | Type-check both apps. |

You can also work inside an app directly (`cd apps/web && npm run dev`).

## Editing content

Each app keeps its editable content in **`src/config.ts`**:

- **`apps/web/src/config.ts`** — contact email, event label, sponsors grid, FAQ,
  footer, and the interest-list signup endpoint. See
  [`apps/web/README.md`](apps/web/README.md) for the full guide (including how to
  wire up the Google Sheet email capture).
- **`apps/sponsors/src/config.ts`** — the sponsorship pitch, stats, tiers,
  benefits matrix, and add-ons. The tier cards and the comparison table are both
  generated from the `TIERS` + `BENEFITS` data, so they never drift apart. The
  numbers and prices ship as **placeholders** — replace them with your real
  prospectus figures before sharing.

The `MAIN_SITE_URL` constant in `apps/sponsors/src/config.ts` points the
sponsors site's nav/footer back at the main site — update it once the main
site's domain is live.

## Deploy

Each app deploys as its **own project** from this one repo. On **Vercel**, create
two projects pointing at the same repo and set:

| Setting | Main site | Sponsors site |
| --- | --- | --- |
| **Root Directory** | `apps/web` | `apps/sponsors` |
| Framework | Vite | Vite |
| Build command | `npm run build` | `npm run build` |
| Output directory | `dist` | `dist` |

Vercel detects the npm workspace and installs from the repo root automatically.
Each app also ships a `vercel.json` and a `netlify.toml` with the same settings,
so Netlify works the same way (set the app folder as the site's base directory).
