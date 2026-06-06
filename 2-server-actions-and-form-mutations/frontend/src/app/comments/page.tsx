import { Card, CardContent, CardHeader, CardTitle, CardDescription, Chip } from "@/components/ui";
import { CommentForm } from "./_components/comment-form";
import { listAllComments } from "./_lib/store";

// /comments page is a Server Component — reads store, renders form + list.
export const dynamic = "force-dynamic";

export default function CommentsPage(): React.ReactElement {
  const comments = listAllComments();
  return (
    <main className="mx-auto max-w-2xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Comments</CardTitle>
          <CardDescription>
            Server Action + Zod + revalidatePath. Form submit native even with JS disabled.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CommentForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle className="text-xl font-semibold">All comments</CardTitle>
          <Chip color="primary" variant="flat" size="sm">
            {comments.length} total
          </Chip>
        </CardHeader>
        <CardContent>
          {comments.length === 0 ? (
            <p className="text-default-500 py-4 text-sm">No comments yet.</p>
          ) : (
            <ul data-testid="comment-list" className="space-y-2">
              {comments.map((c) => (
                <li
                  key={c.id}
                  data-testid="comment-item"
                  className="border-default-200 bg-default-50 rounded-medium border p-3 text-sm"
                >
                  {c.body}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
