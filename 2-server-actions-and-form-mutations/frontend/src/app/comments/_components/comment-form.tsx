"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui";
import { createComment, type CreateCommentState } from "../actions";

// Submit button component; uses useFormStatus to disable + change label when pending.
function Submit(): React.ReactElement {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isDisabled={pending}
      data-testid="submit-btn"
      color="primary"
      variant="solid"
      size="md"
      className="font-medium"
    >
      {pending ? "Posting..." : "Post"}
    </Button>
  );
}

const initialState: CreateCommentState = { error: null };

// Comment form; useFormState wraps the action to surface Zod errors as React state.
// Use native <textarea> so the form still submits with JS disabled — progressive enhancement.
export function CommentForm(): React.ReactElement {
  const [state, action] = useFormState(createComment, initialState);
  return (
    <form action={action} className="space-y-3" data-testid="comment-form">
      <label htmlFor="comment-body" className="text-default-700 block text-sm font-medium">
        Comment body
      </label>
      <textarea
        id="comment-body"
        name="body"
        data-testid="body-input"
        placeholder="Write a comment..."
        rows={3}
        className="border-default-300 bg-default-50 focus:border-primary focus:ring-primary block w-full rounded-medium border p-3 text-sm shadow-sm outline-none focus:ring-1"
      />
      {state.error && (
        <p className="text-danger-700 text-sm font-medium" data-testid="error-msg">
          {state.error}
        </p>
      )}
      <Submit />
    </form>
  );
}
