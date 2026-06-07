// src/app/page.tsx
// EN: Landing page — links to the product demo that shows the RSC/Client boundary.
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

const TITLE = "RSC vs Client Component Boundaries";
const DESCRIPTION =
  "A Server Component queries the database and renders HTML with zero client JS; a Client Component island handles interactivity. Open the demo to watch the boundary in action.";

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonHeader title={TITLE} description={DESCRIPTION} />
        <Card>
          <CardHeader>
            <CardTitle>Open the demo route</CardTitle>
            <CardDescription>
              The /products/1 route renders a Server Component for data and a Client Component for the cart button.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Paragraph size="sm" color="muted">
              Only the productId crosses the boundary into the client bundle — the database query stays on the server.
            </Paragraph>
            <Link href="/products/1" className="inline-block w-fit" data-testid="link-product">
              <Button variant="primary" type="button">
                Open /products/1
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
