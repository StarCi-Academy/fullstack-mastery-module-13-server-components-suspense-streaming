// src/app/product/_components/cart-count.tsx
// EN: Server component reading the `cart_count` cookie via the request-time API of Next.js 15.
// EN: Rendered as a KPI tile (large bold number + sub-label).
import { cookies } from "next/headers";

export async function CartCount() {
  const store = await cookies();
  const count = store.get("cart_count")?.value ?? "0";
  return (
    <div className="flex items-baseline gap-2">
      <span data-testid="cart-count" className="text-3xl font-bold text-foreground">
        Cart: {count}
      </span>
      <span className="text-default-500 text-xs">streamed from server cookie</span>
    </div>
  );
}
