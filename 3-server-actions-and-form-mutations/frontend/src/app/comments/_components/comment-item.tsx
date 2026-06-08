import { Avatar, AvatarFallback, AvatarImage, Paragraph } from "@/components/ui";
import type { Comment } from "../_lib/store";

interface CommentItemProps {
  /** Comment row to render in the list. */
  comment: Comment;
  /** Formatted time label shown under the body. */
  timeLabel: string;
}

/** Build a random but stable avatar URL from the stored seed. */
const avatarSrc = (seed: number): string => {
  return `https://i.pravatar.cc/80?img=${seed}`;
}

/** Derive fallback initials from the comment body. */
const avatarInitial = (body: string): string => {
  const trimmed = body.trim();
  return trimmed.length > 0 ? trimmed.charAt(0).toUpperCase() : "?";
}

/**
 * CommentItem — single comment row with a random HeroUI Avatar beside the text.
 * @param props.comment - Comment row to render in the list.
 * @param props.timeLabel - Formatted time label shown under the body.
 */
export const CommentItem = ({ comment, timeLabel }: CommentItemProps): React.ReactElement => {
  return (
    <li data-testid="comment-item" className="flex items-start gap-3">
      <Avatar size="sm" className="shrink-0">
        <AvatarImage src={avatarSrc(comment.avatarSeed)} alt="" />
        <AvatarFallback>{avatarInitial(comment.body)}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-col gap-1">
        <Paragraph size="sm" className="text-foreground">{comment.body}</Paragraph>
        <Paragraph size="sm" color="muted" className="text-xs">{timeLabel}</Paragraph>
      </div>
    </li>
  );
}
