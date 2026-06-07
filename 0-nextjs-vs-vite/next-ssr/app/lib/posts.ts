import "server-only";

// EN: Data helper — mocked for the FE-only lab so it runs without a backend.
// EN: `server-only` guarantees this module can never be bundled into client JS.

export interface Post {
  id: string;
  title: string;
  price: number;
}

const MOCK_PRODUCTS: Post[] = [
  { id: "1", title: "Mechanical Keyboard", price: 129 },
  { id: "2", title: "Wireless Mouse", price: 49 },
  { id: "3", title: "27-inch Monitor", price: 329 },
];

/**
 * EN: Fetch products during the server render. Awaited inside the async
 * EN: Server Component so the data is already in the HTML before it is sent.
 */
export async function getPosts(): Promise<Post[]> {
  // EN: tiny latency to simulate async server work.
  await new Promise((resolve) => setTimeout(resolve, 30));
  return MOCK_PRODUCTS;
}
