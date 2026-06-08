"use client";

import type { ReactNode } from "react";
import { Alert, Heading, Paragraph } from "@/components/ui";

interface LessonShellProps {
  /** Page title shown above the content. */
  title: string;
  /** Short muted description under the title. */
  description: string;
  /** Primary Network-tab instruction shown in the alert title. */
  alertTitle: string;
  /** Main alert body copy (rendered at text-xs). */
  alertBody: string;
  /** Optional muted tip below the main alert body (rendered at text-xs). */
  alertTip?: string;
  /** Optional testid forwarded to the title element. */
  titleTestId?: string;
  /** Page body rendered below the alert callout. */
  children: ReactNode;
}

/**
 * LessonShell — M12-style frame with title, Network alert, and content slot.
 * @param props.title - Page title shown above the content.
 * @param props.description - Short muted description under the title.
 * @param props.alertTitle - Primary Network-tab instruction shown in the alert title.
 * @param props.alertBody - Main alert body copy (rendered at text-xs).
 * @param props.alertTip - Optional muted tip below the main alert body (rendered at text-xs).
 * @param props.titleTestId - Optional testid forwarded to the title element.
 * @param props.children - Page body rendered below the alert callout.
 */
export const LessonShell = ({
  title,
  description,
  alertTitle,
  alertBody,
  alertTip,
  titleTestId,
  children,
}: LessonShellProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Heading level={4} className="text-sm font-semibold" data-testid={titleTestId}>
          {title}
        </Heading>
        <Paragraph size="sm" color="muted">
          {description}
        </Paragraph>
      </div>
      <Alert status="accent" className="shadow-none bg-accent/10">
        <Alert.Indicator />
        <Alert.Content className="gap-2">
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description className="text-xs">{alertBody}</Alert.Description>
          {alertTip ? (
            <Alert.Description className="text-xs text-muted">{alertTip}</Alert.Description>
          ) : null}
        </Alert.Content>
      </Alert>
      {children}
    </div>
  );
}
