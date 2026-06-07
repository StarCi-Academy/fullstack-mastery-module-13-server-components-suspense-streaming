"use client";

// Client provider boundary — HeroUI v3 components rely on React context
// (theme + i18n), so the App Router root layout must wrap children in these
// providers. Kept in a dedicated "use client" module so the Server Component
// layout.tsx can import it without becoming a Client Component itself.
import type { PropsWithChildren } from "react";
import { I18nProvider } from "@heroui/react";

/** Wraps the whole app in the HeroUI context providers. */
export function Providers({ children }: PropsWithChildren): React.ReactElement {
  return <I18nProvider>{children}</I18nProvider>;
}
