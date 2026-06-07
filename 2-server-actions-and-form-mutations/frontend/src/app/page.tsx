import Link from "next/link";
import { Button } from "@/components/ui";

/** Home page — links to /comments. */
export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <div className="text-base font-semibold text-foreground">Server Actions Lab</div>
        <div className="h-3" />
        <div className="text-sm text-muted">
          Server Actions with Zod validation and{" "}
          <code className="rounded bg-default-100 px-1.5 py-0.5 text-xs">revalidatePath</code> —
          native form submit works with JavaScript disabled.
        </div>
        <div className="h-6" />
        <Link href="/comments" className="inline-block" data-testid="link-comments">
          <Button variant="primary" type="button">
            Open /comments
          </Button>
        </Link>
      </div>
    </main>
  );
}
