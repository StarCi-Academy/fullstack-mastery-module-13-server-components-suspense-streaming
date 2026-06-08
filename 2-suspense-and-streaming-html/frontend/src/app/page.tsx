import Link from "next/link";
import { LessonShell } from "@/components/LessonShell";
import { Button, Paragraph } from "@/components/ui";

/** Shared Network alert copy for the home route. */
const ALERT_TITLE = "Open DevTools → Network, then click Go to dashboard";
const ALERT_BODY =
  "Navigate with Network open. Next.js streams the /dashboard HTML in chunks — route loading.tsx shows first, then each Suspense boundary flushes as its async Server Component resolves.";
const ALERT_TIP =
  "Tip: compare document timing vs waiting for all three widgets — Quick (~50ms), Medium (~500ms), and Slow (~1500ms) stream independently.";

/** Home page — links to /dashboard so the route loading.tsx flow can be observed. */
const HomePage = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Suspense & Streaming HTML"
          description="Watch each dashboard widget stream independently through its own Suspense boundary."
          alertTitle={ALERT_TITLE}
          alertBody={ALERT_BODY}
          alertTip={ALERT_TIP}
          titleTestId="home-title"
        >
          <div className="flex flex-col gap-3">
            <Paragraph size="sm" color="muted">
              The dashboard renders three widgets at different speeds (50ms, 500ms, 1500ms). The
              shell and skeletons paint first; each widget streams in as its data resolves — no
              boundary blocks another.
            </Paragraph>
            <Link href="/dashboard" data-testid="link-dashboard" className="inline-block">
              <Button variant="primary" type="button">
                Go to dashboard
              </Button>
            </Link>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}

export default HomePage
