// EN: CSR pattern: the component renders EMPTY first, then fetches in the browser.
// EN: The user first sees a loading UI, then data arrives in a 2nd round trip.
import { useEffect, useState } from "react";
import { LessonShell } from "../components/LessonShell";

interface Post {
  id: string;
  title: string;
  price: number;
}

/** Lesson copy for the Vite home route. */
const TITLE = "Products — Vite SPA";
const DESCRIPTION =
  "Client-side rendering (CSR): the server returns an empty shell, React mounts in the browser, then fetches /api/posts in a second round trip.";

/**
 * HomePage — Vite CSR demo. Playwright targets `loading` and `product-list` testids only.
 */
export default function HomePage() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    // EN: Runs in the browser ONLY after JS has loaded and React mounted.
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  // EN: Until the fetch resolves, the HTML holds nothing meaningful.
  if (!posts) {
    return (
      <LessonShell title={TITLE} description={DESCRIPTION} renderMode="csr">
        <p data-testid="loading">Loading...</p>
      </LessonShell>
    );
  }

  return (
    <LessonShell title={TITLE} description={DESCRIPTION} renderMode="csr">
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
