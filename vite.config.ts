import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Bare paths for the non-root pages. /sponsor is a second Vite entry
 * (sponsor/index.html) and /book is a standalone static file
 * (public/book/index.html); without a trailing slash the dev and preview
 * servers would otherwise miss both. Production hosts are handled by
 * vercel.json / netlify.toml so the same URLs resolve everywhere.
 */
const PAGES: Record<string, string> = {
  '/sponsor': '/sponsor/index.html',
  '/book': '/book/index.html',
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
        sponsor: 'sponsor/index.html',
      },
    },
  },
})
