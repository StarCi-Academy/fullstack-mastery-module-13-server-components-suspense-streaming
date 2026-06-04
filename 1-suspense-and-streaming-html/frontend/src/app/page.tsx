// Home page — links to /dashboard so the route loading.tsx flow can be observed.
// (EN: Trang chủ — đặt link sang /dashboard để quan sát flow loading.tsx mức route.)
import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export default function HomePage(): React.ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle data-testid="home-title" className="text-3xl font-bold tracking-tight">
            Suspense & Streaming HTML lab
          </CardTitle>
          <CardDescription>
            Quan sát cách Next.js stream từng widget độc lập qua Suspense boundary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard" data-testid="link-dashboard" className="inline-block">
            <Button color="primary" size="lg" variant="solid" className="font-medium" type="button">
              Go to dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
