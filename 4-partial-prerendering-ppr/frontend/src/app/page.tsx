// src/app/page.tsx
// EN: Root page — entry point that links to the /product PPR demo.
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Paragraph,
} from "@/components/ui";
import { LessonHeader } from "@/components/lesson-header";

const TITLE = "Partial Prerendering (PPR)";
const DESCRIPTION =
  "A static shell prerendered at build time plus a dynamic hole that reads cookies via Suspense — both delivered in a single streamed response.";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonHeader title={TITLE} description={DESCRIPTION} />
        <Card>
          <CardHeader>
            <CardTitle>Open the demo route</CardTitle>
            <CardDescription>
              The /product route opts into PPR: its shell paints instantly while the cart hole streams in.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Paragraph size="sm" color="muted">
              Set a cart_count cookie to see the dynamic hole reflect a per-request value.
            </Paragraph>
            <Link href="/product" className="inline-block w-fit">
              <Button variant="primary" type="button">
                Open /product
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
