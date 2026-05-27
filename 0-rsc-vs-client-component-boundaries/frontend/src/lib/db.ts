import "server-only";

// VI: Helper truy vấn database — mô phỏng (EN: Database query helper — mocked for the FE-only lab).
// Trong lesson thật ta sẽ dùng `pg`; ở đây mock để giữ FE-only chạy được mà không cần Postgres.

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
   * VI: Mô phỏng db.query trả về sản phẩm theo id (EN: Simulate db.query returning a product by id).
   */
  async query<T = Product>(_sql: string, params: unknown[]): Promise<QueryResult<T>> {
    const id = String(params[0]);
    const product = MOCK_PRODUCTS[id];
    // VI: Giả lập latency nhỏ để cho thấy nó là async server work (EN: tiny latency to simulate async server work).
    await new Promise((resolve) => setTimeout(resolve, 30));
    return { rows: product ? [product as unknown as T] : [] };
  },
};
