// EN: Shared lesson header — canonical title + description block reused across pages.
// Heading level 4 sized via className + muted sm paragraph, grouped with gap-3.
import { Heading, Paragraph } from "@/components/ui";

interface LessonHeaderProps {
  title: string;
  description: string;
}

export const LessonHeader = ({ title, description }: LessonHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Heading level={4} className="text-sm font-semibold">
        {title}
      </Heading>
      <Paragraph size="sm" color="muted">
        {description}
      </Paragraph>
    </div>
  );
}
