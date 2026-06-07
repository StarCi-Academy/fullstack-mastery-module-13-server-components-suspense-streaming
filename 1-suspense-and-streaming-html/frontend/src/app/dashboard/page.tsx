import { Suspense } from "react";
import { LessonHeader } from "@/components/lesson-header";
import { Card, CardContent, Skeleton } from "@/components/ui";
import { Quick } from "./_components/quick";
import { Medium } from "./_components/medium";
import { Slow } from "./_components/slow";

/** Dashboard — three independent Suspense boundaries for progressive streaming. */
export default function DashboardPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3" data-testid="dashboard-main">
      <div className="mx-auto max-w-2xl">
        <LessonHeader
          title="Streaming dashboard"
          description="Each widget sits in its own Suspense boundary and streams in as soon as its data resolves."
        />
        <div className="grid gap-4 md:grid-cols-3">
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
      </div>
    </main>
  );
}

// Skeleton placeholder — reserves the layout box to avoid CLS while a widget pends.
function WidgetSkeleton({ label }: { label: string }): React.ReactElement {
  return (
    <Card data-testid={`skeleton-${label}`} className="border-default-200 border">
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-24 rounded-lg" />
        <Skeleton className="h-8 w-full rounded-lg" />
        <Skeleton className="h-3 w-32 rounded-lg" />
      </CardContent>
    </Card>
  );
}
