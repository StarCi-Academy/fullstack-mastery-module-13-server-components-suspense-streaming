import { getPosts } from "./lib/posts";

// EN: SSR pattern: the Server Component is async and fetches BEFORE sending HTML.
// EN: The HTML returned to the browser already contains the rendered list — View Source proves it.
// EN: This file maps to the "/" route automatically (file-based routing, no router config).
export default async function HomePage() {
  // EN: Runs on the server; the data is ready before any HTML is sent.
  const posts = await getPosts();

  // EN: No loading state for the initial paint — content is in the HTML.
  return (
    <main>
      <h1>Products (Next.js — rendered on the server)</h1>
      <ul data-testid="product-list">
        {posts.map((p) => (
          <li key={p.id}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
