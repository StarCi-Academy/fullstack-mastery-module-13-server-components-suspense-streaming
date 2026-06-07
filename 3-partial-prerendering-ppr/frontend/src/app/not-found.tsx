// src/app/not-found.tsx
// EN: Global 404 — Card + ErrorMessage, consistent with the lesson design tokens.
import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle, ErrorMessage } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Page not found</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <ErrorMessage>The page you requested does not exist. Try the PPR demo route instead.</ErrorMessage>
            <Link href="/product" className="inline-block w-fit">
              <Button variant="primary" type="button">
                Go to /product
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
