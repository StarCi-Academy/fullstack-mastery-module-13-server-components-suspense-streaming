// src/app/product/_components/cart-count.tsx
// VI: Server component đọc cookie `cart_count` qua API request-time của Next.js 15.
// EN: Server component reading the `cart_count` cookie via the request-time API of Next.js 15.
import { cookies } from "next/headers";

export async function CartCount() {
  const store = await cookies();
  const count = store.get("cart_count")?.value ?? "0";
  return <span data-testid="cart-count">Cart: {count}</span>;
}
