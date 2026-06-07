import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Chip,
  Paragraph,
} from "@/components/ui";
import { LessonHeader } from "@/components/lesson-header";
import { CommentForm } from "./_components/comment-form";
import { listAllComments } from "./_lib/store";

/** Comments page — Server Component reads the store; the form is a Client Component. */
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
        <LessonHeader
          title="Comments"
          description="Post via a Server Action with Zod validation. The native form action keeps working when JavaScript is off."
        />

        <div className="flex flex-col gap-6">
          {/* New comment — the form below is a Client Component (useFormState / useFormStatus). */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <CardTitle>New comment</CardTitle>
              <Chip color="warning" variant="soft" size="sm">
                Client Component
              </Chip>
            </CardHeader>
            <CardContent>
              <CommentForm />
            </CardContent>
          </Card>

          {/* All comments — rendered by this Server Component from the store. */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <CardTitle>All comments</CardTitle>
              <div className="flex items-center gap-2">
                <Chip color="accent" variant="soft" size="sm">
                  Server Component
                </Chip>
                <Chip color="default" variant="soft" size="sm" data-testid="comment-count">
                  {comments.length} total
                </Chip>
              </div>
            </CardHeader>
            <CardContent>
              {comments.length === 0 ? (
                <Paragraph size="sm" color="muted">
                  No comments yet.
                </Paragraph>
              ) : (
                <ul data-testid="comment-list" className="flex flex-col gap-2">
                  {comments.map((c) => (
                    <li
                      key={c.id}
                      data-testid="comment-item"
                      className="rounded-xl bg-default-100 p-3"
                    >
                      <Paragraph size="sm">{c.body}</Paragraph>
                      <Paragraph size="xs" color="muted" className="mt-1.5">
                        {formatCommentTime(c.createdAt)}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Link href="/" className="inline-block">
            <Button variant="secondary" type="button" size="sm">
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
