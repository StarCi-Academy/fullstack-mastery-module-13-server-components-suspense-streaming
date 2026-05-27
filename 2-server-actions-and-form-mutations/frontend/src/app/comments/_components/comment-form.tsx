"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createComment, type CreateCommentState } from "../actions";

// VI: Component nút submit; dùng useFormStatus để disable + đổi label khi pending.
// (EN: Submit button component; uses useFormStatus to disable + change label when pending.)
function Submit(): React.ReactElement {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      data-testid="submit-btn"
      className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
    >
      {pending ? "Posting..." : "Post"}
    </button>
  );
}

const initialState: CreateCommentState = { error: null };

// VI: Form bình luận; useFormState wrap action để surface lỗi Zod ra React state.
// (EN: Comment form; useFormState wraps the action to surface Zod errors as React state.)
export function CommentForm(): React.ReactElement {
  const [state, action] = useFormState(createComment, initialState);
  return (
    <form action={action} className="space-y-2" data-testid="comment-form">
      <textarea
        name="body"
        data-testid="body-input"
        className="w-full rounded border p-2"
        placeholder="Viết bình luận..."
      />
      {state.error && (
        <p className="text-sm text-red-600" data-testid="error-msg">
          {state.error}
        </p>
      )}
      <Submit />
    </form>
  );
}
