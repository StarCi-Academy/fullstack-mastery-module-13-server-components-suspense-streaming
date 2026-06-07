import "server-only";

// EN: Database query helper — mocked for the FE-only lab.
// A real lesson would use `pg`; here it is mocked so the FE-only lab runs without Postgres.

interface Product {
  id: string;
  name: string;
  price: number;
}

const MOCK_PRODUCTS: Record<string, Product> = {
  "1": { id: "1", name: "Mechanical Keyboard", price: 129 },
  "2": { id: "2", name: "Wireless Mouse", price: 49 },
};

interface QueryResult<T> {
  rows: T[];
}

export const db = {
  /**
   * EN: Simulate db.query returning a product by id.
   */
  async query<T = Product>(_sql: string, params: unknown[]): Promise<QueryResult<T>> {
    const id = String(params[0]);
    const product = MOCK_PRODUCTS[id];
    // EN: tiny latency to simulate async server work.
    await new Promise((resolve) => setTimeout(resolve, 30));
    return { rows: product ? [product as unknown as T] : [] };
  },
};
