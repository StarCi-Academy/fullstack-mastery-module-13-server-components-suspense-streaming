import { CommentForm } from "./_components/comment-form";
import { listAllComments } from "./_lib/store";

// VI: Trang /comments là Server Component — đọc store, render form + list.
// (EN: /comments page is a Server Component — reads store, renders form + list.)
export const dynamic = "force-dynamic";

export default function CommentsPage(): React.ReactElement {
  const comments = listAllComments();
  return (
    <main className="mx-auto max-w-2xl p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentForm />
      <ul data-testid="comment-list" className="space-y-2">
        {comments.map((c) => (
          <li
            key={c.id}
            data-testid="comment-item"
            className="rounded border p-2"
          >
            {c.body}
          </li>
        ))}
      </ul>
    </main>
  );
}
