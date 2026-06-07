import { cookies } from "next/headers";

/** Server component reading cart_count from cookies — rendered inside the PPR dynamic hole. */
export async function CartCount(): Promise<React.ReactElement> {
  const store = await cookies();
  const count = store.get("cart_count")?.value ?? "0";
  return (
    <div className="flex flex-col gap-1">
      <span data-testid="cart-count" className="text-sm text-foreground">
        Cart: {count}
      </span>
      <span className="text-xs text-muted">streamed from server cookie</span>
    </div>
  );
}
