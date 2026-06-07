import Link from "next/link";
import { Button, Chip } from "@/components/ui";
import { CommentForm } from "./_components/comment-form";
import { listAllComments } from "./_lib/store";

/** Comments page — Server Component listing store + client form. */
export const dynamic = "force-dynamic";

/** Format a unix-ms timestamp for the comment list. */
function formatCommentTime(createdAt: number): string {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(createdAt));
}

export default function CommentsPage(): React.ReactElement {
  const comments = listAllComments();

  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Server Action</div>
            <h1 className="text-2xl font-semibold text-foreground">Comments</h1>
          </div>
          <Chip variant="secondary" size="sm" className="w-fit" data-testid="comment-count">
            {comments.length} total
          </Chip>
        </div>

        <p className="text-sm text-muted">
          Post via a Server Action with Zod validation. The form uses native{" "}
          <code className="rounded bg-default-100 px-1 py-0.5 text-xs">action=</code> so it
          still submits when JavaScript is off.
        </p>

        <section className="rounded-xl bg-default-100 p-4">
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
            New comment
          </div>
          <CommentForm />
        </section>

        <section>
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
            All comments
          </div>
          {comments.length === 0 ? (
            <p className="py-2 text-sm text-muted">No comments yet.</p>
          ) : (
            <ul data-testid="comment-list" className="flex flex-col gap-2">
              {comments.map((c) => (
                <li
                  key={c.id}
                  data-testid="comment-item"
                  className="rounded-xl bg-default-100 p-3"
                >
                  <p className="text-sm text-foreground">{c.body}</p>
                  <p className="mt-1.5 text-xs text-muted">{formatCommentTime(c.createdAt)}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <Link href="/" className="inline-block">
          <Button variant="secondary" type="button" size="sm">
            Back to home
          </Button>
        </Link>
      </div>
    </main>
  );
}
