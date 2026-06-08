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
 * shell in this lesson. Grouped with gap-3 so all routes stay visually aligned.
 */
export const LessonHeader = ({
  title,
  description,
  titleTestId,
}: LessonHeaderProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      <Heading level={4} className="text-sm font-semibold" data-testid={titleTestId}>
        {title}
      </Heading>
      <Paragraph size="sm" color="muted">
        {description}
      </Paragraph>
    </div>
  );
}
