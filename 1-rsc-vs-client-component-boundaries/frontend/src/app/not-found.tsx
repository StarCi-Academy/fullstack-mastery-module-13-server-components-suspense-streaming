// EN: 404 page — shown for unmatched routes.
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ErrorMessage,
} from "@/components/ui";

export default function NotFound(): React.ReactElement {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card data-testid="not-found" className="border-default-200 border">
        <CardHeader>
          <CardTitle>Page not found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ErrorMessage>
            The page you are looking for does not exist.
          </ErrorMessage>
          <Link href="/" className="inline-block">
            <Button variant="primary" type="button">
              Back to home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
