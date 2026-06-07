"use client";

import type { PropsWithChildren } from "react";

/**
 * App-wide client provider seam.
 *
 * HeroUI v3 components are self-contained (React Aria based) and need no global
 * theme provider, so this wrapper simply establishes a single client boundary
 * at the root of the App Router tree. Cross-cutting client providers (toast
 * queue, theme, i18n) can be mounted here later without touching layout.tsx.
 */
export function Providers({ children }: PropsWithChildren): React.ReactElement {
  return <>{children}</>;
}
