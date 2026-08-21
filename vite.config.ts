import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Bare paths for the non-root pages. Each page is a single flat .html file
 * rather than a <name>/index.html folder — Vite names a page's output after
 * its input path, so `volunteer.html` builds to `dist/volunteer.html` and the
 * rewrites below (and in vercel.json / netlify.toml) map the clean `/volunteer`
 * URL onto it. Same URLs, no directory per page.
 *
 * /sponsor, /volunteer and /judge are Vite entries; /book is a standalone
 * static file served straight from public/.
 */
const PAGES: Record<string, string> = {
  '/sponsor': '/sponsor.html',
  '/volunteer': '/volunteer.html',
  '/judge': '/judge.html',
  '/book': '/book.html',
}

function pageRoutes(): Plugin {
  const rewrite = (req: { url?: string }) => {
    // req is typed without @types/node here, so narrow to the one field.
    const page = req.url && PAGES[req.url.replace(/\/$/, '')]
    if (page) {
      req.url = page
    }
  }
  return {
    name: 'page-routes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req as { url?: string })
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req as { url?: string })
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pageRoutes()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sponsor: 'sponsor.html',
        volunteer: 'volunteer.html',
        judge: 'judge.html',
      },
    },
  },
})
