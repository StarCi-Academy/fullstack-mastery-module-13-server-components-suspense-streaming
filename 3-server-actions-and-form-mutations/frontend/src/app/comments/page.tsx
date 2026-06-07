import Link from "next/link";
import { LessonShell } from "@/components/LessonShell";
import { Button, Paragraph } from "@/components/ui";
import { CommentForm } from "./_components/comment-form";
import { CommentItem } from "./_components/comment-item";
import { listAllComments } from "./_lib/store";

/** Comments page â€” Server Component reads the store; the form is a Client Component. */
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
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Comments"
          description="Post via a Server Action with Zod validation. The native form action keeps working when JavaScript is off."
          alertTitle="Submit empty, then post a valid comment"
          alertBody="Click Post comment with an empty body to see the Zod error from useFormState. Fill the textarea and submit again â€” revalidatePath refreshes the server-rendered list."
          alertTip="Tip: disable JavaScript and submit again â€” the native form action still posts through the Server Action."
        >
          <div className="flex flex-col gap-6">
            <section className="flex flex-col gap-3">
              <CommentForm />
            </section>

            <section className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">
                All comments
                <span className="ml-2 text-xs font-normal text-muted" data-testid="comment-count">
                  ({comments.length})
                </span>
              </p>
              {comments.length === 0 ? (
                <Paragraph size="sm" color="muted">
                  No comments yet.
                </Paragraph>
              ) : (
                <ul data-testid="comment-list" className="flex flex-col gap-3">
                  {comments.map((c) => (
                    <CommentItem
                      key={c.id}
                      comment={c}
                      timeLabel={formatCommentTime(c.createdAt)}
                    />
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
        </LessonShell>
      </div>
    </main>
  );
}
