"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button, Chip } from "@/components/ui";
import { createComment, type CreateCommentState } from "../actions";

/** Submit control — disabled while the Server Action is pending. */
function Submit(): React.ReactElement {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isDisabled={pending}
      data-testid="submit-btn"
      variant="primary"
      size="md"
      className="font-medium"
    >
      {pending ? "Posting..." : "Post comment"}
    </Button>
  );
}

const initialState: CreateCommentState = { error: null };

/**
 * Comment form — useFormState wraps the Server Action to surface Zod errors.
 * Native textarea keeps progressive enhancement (no JS required).
 */
export function CommentForm(): React.ReactElement {
  const [state, action] = useFormState(createComment, initialState);

  return (
    <form action={action} className="space-y-3" data-testid="comment-form">
      <label htmlFor="comment-body" className="block text-sm font-medium text-foreground">
        Comment body
      </label>
      <textarea
        id="comment-body"
        name="body"
        data-testid="body-input"
        placeholder="Write a comment..."
        rows={3}
        className="block w-full rounded-xl bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none"
      />
      {state.error && (
        <Chip
          color="danger"
          variant="secondary"
          size="sm"
          className="w-fit"
          data-testid="error-msg"
        >
          {state.error}
        </Chip>
      )}
      <Submit />
    </form>
  );
}
