import { Heading, Paragraph } from "@/components/ui";

interface LessonHeaderProps {
  /** Short lesson title rendered as the page heading. */
  title: string;
  /** One-line description shown under the title in muted text. */
  description: React.ReactNode;
}

/**
 * Shared lesson header — keeps title/description spacing consistent across the
 * lab pages. Title uses Heading (level 4, semibold) followed by a muted
 * Paragraph, separated by the canonical h-3 / h-6 spacers.
 */
export function LessonHeader({ title, description }: LessonHeaderProps): React.ReactElement {
  return (
    <header>
      <Heading level={4} weight="semibold">
        {title}
      </Heading>
      <div className="h-3" />
      <Paragraph size="sm" color="muted">
        {description}
      </Paragraph>
      <div className="h-6" />
    </header>
  );
}
