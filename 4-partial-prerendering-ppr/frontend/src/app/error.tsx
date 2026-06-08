"use client";

// src/app/error.tsx
// EN: Global error boundary — must be a Client Component. Card + ErrorMessage with a retry.
import { Button, Card, CardContent, CardHeader, CardTitle, ErrorMessage } from "@/components/ui";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({
  error,
  reset,
}: GlobalErrorProps) => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Card className="border border-default-200 p-3">
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

export default GlobalError
