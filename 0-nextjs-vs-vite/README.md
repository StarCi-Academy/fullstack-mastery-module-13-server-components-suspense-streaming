# 0-nextjs-vs-vite

Two parallel React apps that render the same product list two different ways, so you can
**see where rendering happens** before the rest of the module dives into RSC / Suspense / Streaming.

| Sub-app | Tool | Rendering | Port |
| --- | --- | --- | --- |
| `vite-spa/` | Vite + React | Client-side (CSR) — empty `index.html`, browser fetches `/api/posts` | 5173 |
| `next-ssr/` | Next.js App Router | Server-side (SSR/RSC) — full HTML in the first response | 3000 |

## Run

```bash
# Vite SPA
npm install --prefix vite-spa
cd vite-spa && npm run dev        # http://localhost:5173

# Next.js (separate terminal)
npm install --prefix next-ssr
cd next-ssr && npm run dev        # http://localhost:3000
```

Then **View Source** on each: the Vite page shows an empty `<div id="root">`, while the Next.js
page already contains the product list. Open DevTools → Network to compare JS, and
DevTools → Disable JavaScript to confirm only the SSR page survives without JS.
