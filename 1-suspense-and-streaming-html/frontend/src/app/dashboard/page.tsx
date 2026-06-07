import { Suspense } from "react";
import { Skeleton } from "@/components/ui";
import { Quick } from "./_components/quick";
import { Medium } from "./_components/medium";
import { Slow } from "./_components/slow";

/** Dashboard — three independent Suspense boundaries for progressive streaming. */
export default function DashboardPage(): React.ReactElement {
  return (
    <main
      className="min-h-screen bg-background p-3"
      data-testid="dashboard-main"
    >
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
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
    </main>
  );
}

/** Skeleton placeholder while a widget is pending. */
function WidgetSkeleton({ label }: { label: string }): React.ReactElement {
  return (
    <div
      data-testid={`skeleton-${label}`}
      className="rounded-xl bg-default-100 p-4"
    >
      <Skeleton className="mb-3 h-4 w-24 rounded-lg" />
      <Skeleton className="mb-2 h-8 w-full rounded-lg" />
      <Skeleton className="h-3 w-32 rounded-lg" />
    </div>
  );
}
