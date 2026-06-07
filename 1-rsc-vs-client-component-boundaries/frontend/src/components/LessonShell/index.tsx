"use client";

import type { ReactNode } from "react";
import { Alert, Heading, Paragraph } from "@/components/ui";

interface LessonShellProps {
  /** Page title shown above the content. */
  title: string;
  /** Short muted description under the title. */
  description: ReactNode;
  /** Primary instruction shown in the alert title. */
  alertTitle: string;
  /** Main alert body copy (rendered at text-xs). */
  alertBody: string;
  /** Optional muted tip below the main alert body (rendered at text-xs). */
  alertTip?: string;
  /** Optional testid forwarded to the title element. */
  titleTestId?: string;
  /** When false, hides the alert info icon indicator. Defaults to true. */
  showAlertIndicator?: boolean;
  /** Page body rendered below the alert callout. */
  children: ReactNode;
}

/**
 * LessonShell — M12-style frame with title, alert, and content slot.
 */
export function LessonShell({
  title,
  description,
  alertTitle,
  alertBody,
  alertTip,
  titleTestId,
  showAlertIndicator = true,
  children,
}: LessonShellProps): React.ReactElement {
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
      <Alert status="accent" className="shadow-none bg-accent/10">
        {showAlertIndicator ? <Alert.Indicator /> : null}
        <Alert.Content className="gap-2">
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description className="text-xs">{alertBody}</Alert.Description>
          {alertTip ? (
            <Alert.Description className="text-xs text-muted">{alertTip}</Alert.Description>
          ) : null}
        </Alert.Content>
      </Alert>
      <div className="h-6" />
      {children}
    </>
  );
}
