import Link from "next/link";
import { Button, Card, CardContent, Heading, Paragraph } from "@/components/ui";

/** 404 page — rendered for unmatched routes. */
const NotFound = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <Card className="border border-default-200 p-3">
          <CardContent className="flex flex-col gap-3">
            <Heading level={4} weight="semibold">
              Page not found
            </Heading>
            <Paragraph size="sm" color="muted">
              The page you are looking for does not exist.
            </Paragraph>
            <Link href="/" className="inline-block">
              <Button variant="primary" type="button" size="sm">
                Back to home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default NotFound
