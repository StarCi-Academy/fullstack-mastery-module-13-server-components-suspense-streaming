import type { PropsWithChildren } from "react"
import { I18nProvider } from "@heroui/react"

/**
 * HeroUIProvider — wraps the client tree for @heroui/react components.
 * @param props.children - Client subtree to render inside HeroUI context.
 */
export const HeroUIProvider = ({ children }: PropsWithChildren) => {
    return <I18nProvider>{children}</I18nProvider>
}
