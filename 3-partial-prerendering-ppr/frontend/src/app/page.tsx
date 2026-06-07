import Link from "next/link";
import { Button } from "@/components/ui";

/** Root page — directs user to /product (PPR demo). */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <div className="text-base font-semibold text-foreground">PPR Demo</div>
        <div className="h-3" />
        <div className="text-sm text-muted">
          Partial Prerendering — static shell plus a dynamic hole that reads cookies via Suspense.
        </div>
        <div className="h-6" />
        <Link href="/product" className="inline-block">
          <Button variant="primary" type="button">
            Open /product
          </Button>
        </Link>
      </div>
    </main>
  );
}
