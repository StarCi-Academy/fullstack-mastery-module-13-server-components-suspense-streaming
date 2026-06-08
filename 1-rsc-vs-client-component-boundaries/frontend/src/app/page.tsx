import Link from "next/link";
import { LessonShell } from "@/components/LessonShell";
import { Button, Paragraph } from "@/components/ui";

const TITLE = "RSC vs Client Component Boundaries";
const DESCRIPTION =
  "A Server Component queries the database and renders HTML with zero client JS; a Client Component island handles interactivity.";

/** Landing page — links to the product demo that shows the RSC/Client boundary. */
const Home = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title={TITLE}
          description={DESCRIPTION}
          alertTitle="Open /products/1 to see the server/client boundary"
          alertBody="The product name and price render on the server. The Add to cart button is a client island — only productId crosses into the client bundle."
          alertTip="Tip: View Source on /products/1 — product data is already in the HTML before hydration."
        >
          <div className="flex flex-col gap-3">
            <Paragraph size="sm" color="muted">
              Only the productId crosses the boundary into the client bundle — the database query stays
              on the server.
            </Paragraph>
            <Link href="/products/1" className="inline-block w-fit" data-testid="link-product">
              <Button variant="primary" type="button">
                Open /products/1
              </Button>
            </Link>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}

export default Home
