// EN: Shared lesson header — canonical title + description block reused across pages.
// Heading level 4 (semibold) + h-3 gap + muted sm paragraph + h-6 gap before content.
// Uses the standalone Heading/Paragraph client references (not Typography.Heading,
// which is not a registered client reference and resolves to undefined in RSC).
import { Heading, Paragraph } from "@/components/ui";

interface LessonHeaderProps {
  title: string;
  description: string;
}

export function LessonHeader({ title, description }: LessonHeaderProps) {
  return (
    <>
      <Heading level={4} weight="semibold">
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
