// Dashboard page — composes 3 independent Suspense boundaries so each async
// widget streams in as soon as its data resolves. (EN: Trang dashboard ghép 3
// boundary Suspense độc lập — mỗi widget stream ngay khi data resolve, widget
// chậm KHÔNG chặn widget nhanh.)
import { Suspense } from "react";
import { Quick } from "./_components/quick";
import { Medium } from "./_components/medium";
import { Slow } from "./_components/slow";

export default function DashboardPage(): React.ReactElement {
  return (
    <main className="grid gap-4 p-8 md:grid-cols-3" data-testid="dashboard-main">
      <Suspense fallback={<Skeleton label="Quick" />}>
        <Quick />
      </Suspense>
      <Suspense fallback={<Skeleton label="Medium" />}>
        <Medium />
      </Suspense>
      <Suspense fallback={<Skeleton label="Slow" />}>
        <Slow />
      </Suspense>
    </main>
  );
}

// Skeleton placeholder — reserves layout box to avoid CLS while widget pends.
// (EN: Skeleton giữ chỗ layout, tránh cumulative layout shift khi widget chờ.)
function Skeleton({ label }: { label: string }): React.ReactElement {
  return (
    <div
      data-testid={`skeleton-${label.toLowerCase()}`}
      className="h-24 animate-pulse rounded bg-gray-100 p-4 text-gray-500"
    >
      Loading {label}...
    </div>
  );
}
