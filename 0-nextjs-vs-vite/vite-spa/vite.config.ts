import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// EN: Mock products shared by the dev API middleware below.
const MOCK_PRODUCTS = [
  { id: "1", title: "Mechanical Keyboard", price: 129 },
  { id: "2", title: "Wireless Mouse", price: 49 },
  { id: "3", title: "27-inch Monitor", price: 329 },
];

// EN: Tiny dev-only middleware that answers GET /api/posts with JSON.
// EN: A pure Vite SPA has no backend, so we fake the endpoint the browser fetches AFTER mount.
function mockApiPlugin(): Plugin {
  return {
    name: "mock-api",
    configureServer(server) {
      server.middlewares.use("/api/posts", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(MOCK_PRODUCTS));
      });
    },
  };
}

// EN: Vite is ONLY a build tool + dev server (esbuild for dev, Rollup for build).
// EN: It ships no router and no server renderer — the output is a client-side-rendered SPA.
export default defineConfig({
  plugins: [react(), mockApiPlugin()],
  server: { port: 5173 },
});
