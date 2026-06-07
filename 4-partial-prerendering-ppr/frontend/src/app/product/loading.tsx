import { Skeleton } from "@/components/ui";

/** Route-level loading UI — skeleton blocks matching the flat PPR layout. */
export default function ProductLoading(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Skeleton className="mb-3 h-6 w-48 rounded-lg" />
        <Skeleton className="mb-6 h-4 w-full max-w-md rounded-lg" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-24 rounded-lg" />
            <Skeleton className="h-8 w-40 rounded-lg" />
            <Skeleton className="h-4 w-64 rounded-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-28 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  );
}
