// src/app/product/loading.tsx
// EN: Route-level loading UI — HeroUI Skeletons matching the shell layout so there
// is no layout shift while the route segment mounts.
import { Card, CardContent, CardHeader, Skeleton } from "@/components/ui";

export default function ProductLoading() {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-6">
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <Skeleton className="h-3 w-24 rounded-medium" />
            <Skeleton className="h-8 w-48 rounded-medium" />
            <Skeleton className="h-4 w-64 rounded-medium" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <Skeleton className="h-3 w-28 rounded-medium" />
            <Skeleton className="h-4 w-32 rounded-medium" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-40 rounded-medium" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
