import Link from "next/link";
import { LessonShell } from "@/components/LessonShell";
import { Button } from "@/components/ui";

const TITLE = "Partial Prerendering (PPR)";
const DESCRIPTION =
  "A static shell prerendered at build time plus a dynamic hole that reads cookies via Suspense — both delivered in a single streamed response.";

/** Home page — entry point linking to the /product PPR demo. */
export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title={TITLE}
          description={DESCRIPTION}
          statusLabel="Lab — entry"
          alertTitle="Open /product to see the PPR shell + dynamic hole"
          alertBody="The /product route opts into PPR via experimental_ppr. Its static shell paints instantly while the cart hole streams in from the cart_count cookie."
          alertTip="Tip: set cart_count in DevTools → Application → Cookies, then reload to change only the dynamic hole."
        >
          <p className="text-sm text-muted">
            Open the product page to compare the prerendered shell with the per-request cart KPI.
          </p>
          <div className="h-4" />
          <Link href="/product" className="inline-block w-fit">
            <Button variant="primary" type="button">
              Open /product
            </Button>
          </Link>
        </LessonShell>
      </div>
    </main>
  );
}
