import { Suspense } from "react";
import { LessonShell } from "@/components/LessonShell";
import { Heading, Paragraph, Skeleton } from "@/components/ui";
import { CartCount } from "./_components/cart-count";

// Per-route opt-in: this single line marks the route for Partial Prerendering.
export const experimental_ppr = true;

/** PPR demo page — static shell prerender; Suspense wraps the dynamic CartCount hole. */
const ProductPage = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Product page"
          description="Static product shell plus a dynamic cart hole — both stream in one response when PPR is enabled."
          alertTitle="Set cart_count cookie, then reload /product"
          alertBody="The Acme Widget block is prerendered at build time. The cart hole reads cookies() per request and streams inside Suspense after the shell."
          alertTip="Tip: change cart_count between reloads — only the hole updates; the static shell stays the same."
        >
          <div className="flex flex-col gap-6">
            <section className="flex flex-col gap-1">
              <Paragraph size="sm" color="muted" className="text-xs uppercase tracking-wide">Static shell</Paragraph>
              <Heading level={2} weight="semibold">
                Acme Widget
              </Heading>
              <Paragraph size="sm" color="muted">
                Static description that is the same for every visitor.
              </Paragraph>
            </section>

            <section className="flex flex-col gap-2">
              <Paragraph size="sm" className="font-semibold text-foreground">Items in cart</Paragraph>
              <Suspense fallback={<CartFallback />}>
                <CartCount />
              </Suspense>
            </section>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}

export default ProductPage

/** KPI placeholder while the dynamic hole streams in. */
const CartFallback = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-24 rounded-lg" />
      <span data-testid="cart-fallback" className="text-sm text-muted">
        Cart: …
      </span>
    </div>
  );
}
