import { Heading, Paragraph } from "@/components/ui";

interface LessonHeaderProps {
  /** Short lesson title rendered as the page heading. */
  title: string;
  /** One-line description shown under the title in muted text. */
  description: React.ReactNode;
}

/**
 * Shared lesson header — keeps title/description spacing consistent across the
 * lab pages. Title uses Heading (level 4, sized via className) followed by a
 * muted Paragraph, grouped with gap-3.
 */
export const LessonHeader = ({ title, description }: LessonHeaderProps): React.ReactElement => {
  return (
    <header className="flex flex-col gap-3">
      <Heading level={4} className="text-sm font-semibold">
        {title}
      </Heading>
      <Paragraph size="sm" color="muted">
        {description}
      </Paragraph>
    </header>
  );
}
