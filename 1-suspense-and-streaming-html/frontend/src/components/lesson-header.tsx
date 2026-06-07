import { Heading, Paragraph } from "@/components/ui";

/** Props for the shared lesson header. */
interface LessonHeaderProps {
  /** Page title rendered as a level-4 heading. */
  title: string;
  /** Short muted description shown under the title. */
  description: string;
  /** Optional testid forwarded to the title element. */
  titleTestId?: string;
}

/**
 * Shared lesson header — canonical title/description block used by every page
 * shell in this lesson. Fixed spacing tokens (h-3 between title and
 * description, h-6 before the page content) keep all routes visually aligned.
 */
export function LessonHeader({
  title,
  description,
  titleTestId,
}: LessonHeaderProps): React.ReactElement {
  return (
    <>
      <Heading level={4} weight="semibold" data-testid={titleTestId}>
        {title}
      </Heading>
      <div className="h-3" />
      <Paragraph size="sm" color="muted">
        {description}
      </Paragraph>
      <div className="h-6" />
    </>
  );
}
