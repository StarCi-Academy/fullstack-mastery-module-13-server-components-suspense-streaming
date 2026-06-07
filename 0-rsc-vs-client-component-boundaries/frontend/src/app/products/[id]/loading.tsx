// EN: Route-level loading.tsx — Next.js wraps the product page in an implicit
// Suspense boundary with this Skeleton fallback while the server tree resolves.
import { Card, CardContent, CardHeader, Skeleton } from "@/components/ui";

export default function ProductLoading(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-6" data-testid="product-loading">
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <Skeleton className="h-5 w-32 rounded-medium" />
            <Skeleton className="h-7 w-48 rounded-medium" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-9 w-24 rounded-medium" />
          </CardContent>
        </Card>
        <Card className="border-warning-200 border">
          <CardHeader>
            <Skeleton className="h-5 w-36 rounded-medium" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-40 rounded-medium" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
