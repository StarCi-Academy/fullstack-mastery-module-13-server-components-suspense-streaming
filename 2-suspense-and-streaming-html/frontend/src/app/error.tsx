"use client";

// Route-level error boundary — Next.js requires error.tsx to be a Client
// Component. Renders a recoverable fallback with a reset action.
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ErrorMessage,
} from "@/components/ui";

/** Props injected by Next.js into the route error boundary. */
interface ErrorProps {
  /** The error thrown while rendering the route segment. */
  error: Error & { digest?: string };
  /** Re-renders the segment to attempt recovery. */
  reset: () => void;
}

/** Route error fallback. */
const RouteError = ({
  error,
  reset,
}: ErrorProps): React.ReactElement => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card data-testid="route-error" className="border border-danger-200 p-3">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ErrorMessage>{error.message || "Unexpected error."}</ErrorMessage>
          <Button variant="primary" type="button" onClick={() => reset()}>
            Try again
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default RouteError
