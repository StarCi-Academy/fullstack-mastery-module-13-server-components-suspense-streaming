"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button, ErrorMessage } from "@/components/ui";
import { createComment, type CreateCommentState } from "../actions";

/** Submit control — disabled while the Server Action is pending. */
function Submit(): React.ReactElement {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isDisabled={pending}
      isPending={pending}
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
 * The native textarea keeps progressive enhancement working without JS.
 */
export function CommentForm(): React.ReactElement {
  const [state, action] = useFormState(createComment, initialState);

  return (
    <form action={action} className="flex flex-col gap-3" data-testid="comment-form">
      <label htmlFor="comment-body" className="text-sm font-medium text-foreground">
        Comment body
      </label>
      <textarea
        id="comment-body"
        name="body"
        data-testid="body-input"
        placeholder="Write a comment..."
        rows={3}
        className="block w-full rounded-xl border border-default-200 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
      />
      {state.error && (
        <ErrorMessage data-testid="error-msg" className="text-sm">
          {state.error}
        </ErrorMessage>
      )}
      <div className="pt-1">
        <Submit />
      </div>
    </form>
  );
}
