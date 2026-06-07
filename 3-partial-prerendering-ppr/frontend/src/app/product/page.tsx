// src/app/product/page.tsx
// VI: Trang demo PPR — shell tĩnh prerender; Suspense bọc lỗ động <CartCount> đọc cookies().
// EN: PPR demo page — static shell prerender; Suspense wraps the dynamic <CartCount> hole reading cookies().
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Chip, Skeleton } from "@/components/ui";
import { CartCount } from "./_components/cart-count";

// Per-route opt-in: this single line marks the route for Partial Prerendering.
export const experimental_ppr = true;

export default function ProductPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      {/* Static shell — no request-time data, prerendered at build */}
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-default-500 text-xs uppercase tracking-wide">Static shell</span>
            <CardTitle className="text-3xl font-bold tracking-tight">Acme Widget</CardTitle>
            <CardDescription>Static description that is the same for every visitor.</CardDescription>
          </div>
          <Chip color="primary" variant="flat" size="sm">
            prerendered
          </Chip>
        </CardHeader>
      </Card>

      {/* Dynamic hole card — CartCount reads cookies(), deferred to request time */}
      <Card className="border-warning-200 border">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-default-500 text-xs uppercase tracking-wide">KPI · Dynamic hole</span>
            <span className="text-default-700 text-sm font-medium">Items in cart</span>
          </div>
          <Chip color="warning" variant="flat" size="sm">
            per-request
          </Chip>
        </CardHeader>
        <CardContent>
          {/* Dynamic hole — CartCount reads cookies(), cannot be prerendered */}
          <Suspense fallback={<CartFallback />}>
            <CartCount />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}

// VI: KPI tile fallback — Skeleton hiển thị trong khi lỗ động stream về.
// EN: KPI tile fallback — Skeleton placeholder while the dynamic hole streams in.
function CartFallback() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-32 rounded-medium" />
      <span data-testid="cart-fallback" className="text-default-500 text-sm">
        Cart: …
      </span>
    </div>
  );
}
