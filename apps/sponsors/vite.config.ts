import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * The booking page is a standalone static file (public/book/index.html).
 * The dev/preview servers' SPA fallback would otherwise swallow the bare
 * /book path, so rewrite it to the file. Production hosts are handled by
 * vercel.json / netlify.toml so the same URL resolves everywhere.
 */
function bookPageRoute(): Plugin {
  const rewrite = (req: { url?: string }) => {
    // req is typed without @types/node here, so narrow to the one field.
    if (req.url === '/book' || req.url === '/book/') {
      req.url = '/book/index.html'
    }
  }
  return {
    name: 'book-page-route',
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
  plugins: [react(), tailwindcss(), bookPageRoute()],
  server: { port: 5174 },
})
