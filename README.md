# Fullstack Mastery — Module 13: Server Components, Suspense & Streaming

Five lessons on Next.js App Router: RSC boundaries, Suspense streaming, Server Actions, and Partial Prerendering (PPR). Each lab is a self-contained **Next.js 15** app under `frontend/` (no separate NestJS backend).

| # | Folder | Topic | Dev port |
|---|--------|--------|----------|
| — | `0-nextjs-vs-vite/` | Warm-up: Vite SPA vs Next SSR | 5173 / 3000 |
| 0 | `0-rsc-vs-client-component-boundaries` | RSC vs Client boundaries | **3380** |
| 1 | `1-suspense-and-streaming-html` | Suspense + streaming HTML | **3390** |
| 2 | `2-server-actions-and-form-mutations` | Server Actions + Zod | **3400** |
| 3 | `3-partial-prerendering-ppr` | Partial Prerendering | **3410** |

## Run a lab

```powershell
cd <lesson>/frontend
npm install
npm run dev
```

Instructor quick reference: **[DEMO.md](./DEMO.md)**.

## E2E

```powershell
cd <lesson>/frontend
npm run dev          # terminal 1
npm run test:e2e     # terminal 2 (or use webServer in playwright.config.ts)
```
