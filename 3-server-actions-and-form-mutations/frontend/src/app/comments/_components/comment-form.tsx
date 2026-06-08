"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button, ErrorMessage, TextArea } from "@/components/ui";
import { createComment, type CreateCommentState } from "../actions";

/** Submit control — shows centered dots while the Server Action is pending. */
const Submit = (): React.ReactElement => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isDisabled={pending}
      data-testid="submit-btn"
      variant="primary"
      size="md"
      className="font-medium"
      aria-label={pending ? "Posting comment" : "Post comment"}
    >
      {pending ? (
        <span
          aria-hidden
          className="inline-flex min-w-8 items-center justify-center tracking-[0.25em]"
        >
          ···
        </span>
      ) : (
        "Post comment"
      )}
    </Button>
  );
}

const initialState: CreateCommentState = { error: null };

/**
 * Comment form — useFormState wraps the Server Action to surface Zod errors.
 * The HeroUI TextArea keeps progressive enhancement working without JS.
 */
export const CommentForm = (): React.ReactElement => {
  const [state, action] = useFormState(createComment, initialState);

  return (
    <form action={action} className="flex flex-col gap-3" data-testid="comment-form">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="comment-body" className="text-sm font-semibold text-foreground">
          Comment
        </label>
        <TextArea
          id="comment-body"
          name="body"
          data-testid="body-input"
          placeholder="Write a comment..."
          rows={3}
          className="w-full"
        />
      </div>
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
