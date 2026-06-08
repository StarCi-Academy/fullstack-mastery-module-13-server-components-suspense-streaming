// Route-level loading.tsx — Next.js auto-wraps page.tsx in an implicit Suspense
// boundary with this component as fallback, so it shows during navigation to
// /dashboard before the route's server tree resolves.
import { Card, CardContent, Spinner } from "@/components/ui";

const DashboardLoading = (): React.ReactElement => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card
        data-testid="route-loading"
        className="border border-default-200"
      >
        <CardContent className="flex flex-row items-center gap-4 px-6 py-4">
          <Spinner color="accent" size="md" />
          <span className="text-default-700 text-lg font-medium">
            Loading dashboard route...
          </span>
        </CardContent>
      </Card>
    </main>
  );
}

export default DashboardLoading
