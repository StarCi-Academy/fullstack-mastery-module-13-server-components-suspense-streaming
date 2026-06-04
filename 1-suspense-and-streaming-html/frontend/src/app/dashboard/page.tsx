// Dashboard page — composes 3 independent Suspense boundaries so each async
// widget streams in as soon as its data resolves. (EN: Trang dashboard ghép 3
// boundary Suspense độc lập — mỗi widget stream ngay khi data resolve, widget
// chậm KHÔNG chặn widget nhanh.)
import { Suspense } from "react";
import { Card, CardContent, Skeleton } from "@/components/ui";
import { Quick } from "./_components/quick";
import { Medium } from "./_components/medium";
import { Slow } from "./_components/slow";

export default function DashboardPage(): React.ReactElement {
  return (
    <main
      className="mx-auto grid max-w-6xl gap-6 p-6 md:grid-cols-3"
      data-testid="dashboard-main"
    >
      <Suspense fallback={<WidgetSkeleton label="quick" />}>
        <Quick />
      </Suspense>
      <Suspense fallback={<WidgetSkeleton label="medium" />}>
        <Medium />
      </Suspense>
      <Suspense fallback={<WidgetSkeleton label="slow" />}>
        <Slow />
      </Suspense>
    </main>
  );
}

// Skeleton placeholder — reserves layout box to avoid CLS while widget pends.
// (EN: Skeleton HeroUI giữ chỗ layout, tránh cumulative layout shift khi widget chờ.)
function WidgetSkeleton({ label }: { label: string }): React.ReactElement {
  return (
    <Card
      data-testid={`skeleton-${label}`}
      className="border-default-200 border"
    >
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-24 rounded-lg" />
        <Skeleton className="h-8 w-full rounded-lg" />
        <Skeleton className="h-3 w-32 rounded-lg" />
      </CardContent>
    </Card>
  );
}
