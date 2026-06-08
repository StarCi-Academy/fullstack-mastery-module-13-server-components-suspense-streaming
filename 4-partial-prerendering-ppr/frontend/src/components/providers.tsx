"use client";

// EN: Client-side providers tree. The root layout is a Server Component, so any
// context provider (HeroUI's I18nProvider, etc.) must live in this client island
// and wrap {children}. Without it the App shell renders without HeroUI context.
import type { PropsWithChildren } from "react";
import { I18nProvider } from "@heroui/react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <I18nProvider>{children}</I18nProvider>;
}
