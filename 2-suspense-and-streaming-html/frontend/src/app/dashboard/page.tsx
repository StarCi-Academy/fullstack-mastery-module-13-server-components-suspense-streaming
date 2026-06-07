import { Suspense } from "react";
import { LessonShell } from "@/components/LessonShell";
import { Skeleton } from "@/components/ui";
import { Quick } from "./_components/quick";
import { Medium } from "./_components/medium";
import { Slow } from "./_components/slow";

/** Shared Network alert copy for the dashboard route. */
const ALERT_TITLE = "Open DevTools → Network, then reload /dashboard";
const ALERT_BODY =
  "Reload with Network open and watch the document response stream HTML chunks. Each widget sits in its own Suspense boundary — Quick resolves first, then Medium, then Slow.";
const ALERT_TIP =
  "Tip: skeleton-* placeholders appear before widget-* blocks swap in. No slow boundary blocks the faster ones.";

/** Dashboard — three independent Suspense boundaries for progressive streaming. */
export default function DashboardPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3" data-testid="dashboard-main">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Streaming dashboard"
          description="Each widget sits in its own Suspense boundary and streams in as soon as its data resolves."
          statusLabel="Streaming — RSC"
          alertTitle={ALERT_TITLE}
          alertBody={ALERT_BODY}
          alertTip={ALERT_TIP}
        >
          <div className="flex flex-col gap-6">
            <Suspense fallback={<WidgetSkeleton label="quick" />}>
              <Quick />
            </Suspense>
            <Suspense fallback={<WidgetSkeleton label="medium" />}>
              <Medium />
            </Suspense>
            <Suspense fallback={<WidgetSkeleton label="slow" />}>
              <Slow />
            </Suspense>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}

/** Skeleton placeholder — text block shape while a widget boundary is pending. */
function WidgetSkeleton({ label }: { label: string }): React.ReactElement {
  return (
    <div data-testid={`skeleton-${label}`} className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20 rounded-lg" />
      <Skeleton className="h-4 w-full max-w-md rounded-lg" />
      <Skeleton className="h-3 w-40 rounded-lg" />
    </div>
  );
}
