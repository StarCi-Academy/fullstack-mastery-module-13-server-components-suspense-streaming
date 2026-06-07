import Link from "next/link";
import { Button } from "@/components/ui";

/** Home page — links to /dashboard so the route loading.tsx flow can be observed. */
export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <div
          data-testid="home-title"
          className="text-base font-semibold text-foreground"
        >
          Suspense &amp; Streaming HTML
        </div>
        <div className="h-3" />
        <div className="text-sm text-muted">
          Watch each dashboard widget stream independently through its own Suspense boundary.
        </div>
        <div className="h-6" />
        <Link href="/dashboard" data-testid="link-dashboard" className="inline-block">
          <Button variant="primary" type="button">
            Go to dashboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
