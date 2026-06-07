// EN: CSR pattern: the component renders EMPTY first, then fetches in the browser.
// EN: The user first sees a loading UI, then data arrives in a 2nd round trip.
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  price: number;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    // EN: Runs in the browser ONLY after JS has loaded and React mounted.
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  // EN: Until the fetch resolves, the HTML holds nothing meaningful.
  if (!posts) return <p data-testid="loading">Loading...</p>;
  return (
    <main>
      <h1>Products (Vite SPA — rendered in the browser)</h1>
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
