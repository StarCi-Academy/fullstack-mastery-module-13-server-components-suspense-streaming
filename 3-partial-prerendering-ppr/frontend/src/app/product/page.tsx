import { Suspense } from "react";
import { Chip, Skeleton } from "@/components/ui";
import { CartCount } from "./_components/cart-count";

export const experimental_ppr = true;

/** PPR demo — static shell prerendered; dynamic cart count streams per request. */
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Static shell</div>
            <h1 className="text-2xl font-semibold text-foreground">Acme Widget</h1>
            <p className="mt-1 text-sm text-muted">
              Static description that is the same for every visitor.
            </p>
          </div>
          <Chip variant="secondary" size="sm" className="w-fit">
            prerendered
          </Chip>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs uppercase tracking-wide text-muted">KPI · Dynamic hole</div>
              <div className="text-sm font-medium text-foreground">Items in cart</div>
            </div>
            <Chip variant="secondary" size="sm" className="w-fit">
              per-request
            </Chip>
          </div>
          <Suspense fallback={<CartFallback />}>
            <CartCount />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

/** Skeleton placeholder while the dynamic hole streams in. */
function CartFallback() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-32 rounded-xl" />
      <span data-testid="cart-fallback" className="text-sm text-muted">
        Cart: …
      </span>
    </div>
  );
}
