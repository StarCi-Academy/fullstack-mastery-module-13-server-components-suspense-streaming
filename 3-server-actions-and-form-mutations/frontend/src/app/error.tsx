"use client";

import { Button, Card, CardContent, ErrorMessage, Heading } from "@/components/ui";

interface ErrorProps {
  /** The error thrown during rendering. */
  error: Error & { digest?: string };
  /** Re-attempts rendering the route segment. */
  reset: () => void;
}

/** Route-level error boundary for the App Router. */
const ErrorBoundary = ({ error, reset }: ErrorProps): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Card className="border border-default-200 p-3">
          <CardContent className="flex flex-col gap-3">
            <Heading level={4} weight="semibold">
              Something went wrong
            </Heading>
            <ErrorMessage className="text-sm">{error.message}</ErrorMessage>
            <Button variant="primary" type="button" size="sm" onPress={() => reset()}>
              Try again
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default ErrorBoundary
