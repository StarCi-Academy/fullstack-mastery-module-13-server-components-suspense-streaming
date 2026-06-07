import Link from "next/link";
import { LessonHeader } from "@/components/lesson-header";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Chip,
  Paragraph,
} from "@/components/ui";

/** Home page — links to /dashboard so the route loading.tsx flow can be observed. */
export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonHeader
          title="Suspense & Streaming HTML"
          description="Watch each dashboard widget stream independently through its own Suspense boundary."
          titleTestId="home-title"
        />
        <Card className="border-default-200 border">
          <CardHeader className="flex flex-row items-center justify-between gap-2">
            <CardTitle>Streaming dashboard lab</CardTitle>
            <Chip color="accent" variant="soft" size="sm">
              RSC
            </Chip>
          </CardHeader>
          <CardContent className="space-y-4">
            <Paragraph size="sm" color="muted">
              The dashboard renders three widgets at different speeds (50ms,
              500ms, 1500ms). The shell and skeletons paint first; each widget
              streams in as its data resolves — no boundary blocks another.
            </Paragraph>
            <Link
              href="/dashboard"
              data-testid="link-dashboard"
              className="inline-block"
            >
              <Button variant="primary" type="button">
                Go to dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
