"use client";

// src/app/error.tsx
// EN: Global error boundary — must be a Client Component. Card + ErrorMessage with a retry.
import { Button, Card, CardContent, CardHeader, CardTitle, ErrorMessage } from "@/components/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Something went wrong</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <ErrorMessage>{error.message || "An unexpected error occurred while rendering this route."}</ErrorMessage>
            <Button variant="primary" type="button" onPress={() => reset()} className="w-fit">
              Try again
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
