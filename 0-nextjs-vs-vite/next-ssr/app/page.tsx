import { LessonShell } from "./components/LessonShell";
import { getPosts } from "./lib/posts";

/** Lesson copy for the Next.js home route. */
const TITLE = "Products — Next.js SSR";
const DESCRIPTION =
  "Server-side rendering (SSR/RSC): data is fetched on the server before HTML is sent — the product list is already in the first document response.";

// EN: SSR pattern: the Server Component is async and fetches BEFORE sending HTML.
// EN: The HTML returned to the browser already contains the rendered list — View Source proves it.
// EN: This file maps to the "/" route automatically (file-based routing, no router config).
/**
 * HomePage — Next.js SSR demo. Playwright targets `product-list` testid only.
 */
export default async function HomePage() {
  // EN: Runs on the server; the data is ready before any HTML is sent.
  const posts = await getPosts();

  // EN: No loading state for the initial paint — content is in the HTML.
  return (
    <LessonShell title={TITLE} description={DESCRIPTION} renderMode="ssr">
      <ul data-testid="product-list">
        {posts.map((p) => (
          <li key={p.id}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>
    </LessonShell>
  );
}
