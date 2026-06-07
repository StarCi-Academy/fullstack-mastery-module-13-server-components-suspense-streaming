"use client"

import type { PropsWithChildren } from "react"
import { I18nProvider } from "@heroui/react"

/**
 * HeroUIProvider — client boundary for @heroui/react in the App Router layout.
 * @param props.children - App subtree to render inside HeroUI context.
 */
export function HeroUIProvider({ children }: PropsWithChildren) {
    return <I18nProvider>{children}</I18nProvider>
}
