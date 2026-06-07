import Link from "next/link";
import { Button } from "@/components/ui";

/** Landing page — links to the product demo. */
export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <div className="text-base font-semibold text-foreground">RSC Boundary Lab</div>
        <div className="h-3" />
        <div className="text-sm text-muted">
          Open{" "}
          <code className="rounded bg-default-100 px-1.5 py-0.5 text-xs">/products/1</code> to
          see a Server Component render data and a Client Component handle interactivity.
        </div>
        <div className="h-6" />
        <Link href="/products/1" className="inline-block" data-testid="link-product">
          <Button variant="primary" type="button">
            Open /products/1
          </Button>
        </Link>
      </div>
    </main>
  );
}
