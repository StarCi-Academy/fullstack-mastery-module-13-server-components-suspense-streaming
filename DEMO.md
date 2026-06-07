# Module 13 — Instructor demo

## Concept

- One **`frontend/`** per lab — Next.js 15 App Router + HeroUI v3 + Tailwind v4.
- **Port pinned in `package.json`** (`next dev -p …`) — run with `npm run dev` only.
- UI shell matches M12 lesson FE: flat layout, no bordered result boxes, `Chip variant="secondary"`.

## Demo ports

| Lesson | Port | Open |
|--------|------|------|
| L0 RSC boundaries | **3380** | http://127.0.0.1:3380/products/1 |
| L1 Suspense / streaming | **3390** | http://127.0.0.1:3390/dashboard |
| L2 Server Actions | **3400** | http://127.0.0.1:3400/comments |
| L3 PPR | **3410** | http://127.0.0.1:3410/product |

> **Note:** L3 port **3410** is the Next app (not M12 Multer BE). Stop M12 L0 backend if that port is occupied.

### L0 — RSC boundary

```powershell
cd 0-rsc-vs-client-component-boundaries/frontend
npm run dev
```

**Script:** `/products/1` → server-rendered name/price → **Add to cart** (client boundary).

### L1 — Suspense streaming

```powershell
cd 1-suspense-and-streaming-html/frontend
npm run dev
```

**Script:** `/dashboard` → watch Quick → Medium → Slow widgets stream independently.

### L2 — Server Actions

```powershell
cd 2-server-actions-and-form-mutations/frontend
npm run dev
```

**Script:** post comment → validation error on empty → list revalidates.

### L3 — PPR

```powershell
cd 3-partial-prerendering-ppr/frontend
npm run dev
```

**Script:** static shell instant → dynamic cart count streams from cookie.

### Warm-up (optional)

`0-nextjs-vs-vite/vite-spa` → **5173** · `0-nextjs-vs-vite/next-ssr` → **3000**

### E2E

```powershell
cd <lesson>/frontend
npm run test:e2e
```

Playwright configs include `webServer` with `reuseExistingServer` when not in CI.
