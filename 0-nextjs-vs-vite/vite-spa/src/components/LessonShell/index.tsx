import type { ReactNode } from "react"
import { Alert } from "@heroui/react"

/** Rendering mode label shown in the lesson shell. */
export type LessonRenderMode = "csr" | "ssr"

interface LessonShellProps {
    /** Lesson title shown above the content. */
    title: string
    /** Short lesson description under the title. */
    description: string
    /** Which rendering model this app demonstrates. */
    renderMode: LessonRenderMode
    /** Page body rendered below the Network callout. */
    children: ReactNode
}

/** Network tab instructions tailored to CSR vs SSR. */
function networkHint(renderMode: LessonRenderMode): string {
    if (renderMode === "csr") {
        return "Reload with DevTools → Network open. After the JS bundle loads, you should see a separate GET /api/posts request — that second round trip is client-side rendering fetching data in the browser."
    }
    return "Reload with DevTools → Network open. The document (/) response already contains the product list HTML — there is no separate GET /api/posts XHR on the first load."
}

/**
 * LessonShell — shared page frame: title, description, alert, content slot.
 * @param props.title - Lesson title shown above the content.
 * @param props.description - Short lesson description under the title.
 * @param props.renderMode - Which rendering model this app demonstrates.
 * @param props.children - Page body rendered below the Network callout.
 */
export function LessonShell({
    title,
    description,
    renderMode,
    children,
}: LessonShellProps) {
    return (
        <main className="min-h-screen bg-background p-3">
            <div className="mx-auto max-w-2xl">
                <div className="text-base font-semibold text-foreground">{title}</div>
                <div className="h-3" />
                <div className="text-sm text-muted">{description}</div>
                <div className="h-6" />
                <Alert status="accent" className="shadow-none bg-accent/10">
                    <Alert.Indicator />
                    <Alert.Content className="gap-2">
                        <Alert.Title>Open DevTools → Network, then reload this page</Alert.Title>
                        <Alert.Description className="text-xs">{networkHint(renderMode)}</Alert.Description>
                        <Alert.Description className="text-xs text-muted">
                            Tip: also try View Source — the Vite page shows an empty #root; the Next.js page
                            already contains the product list in the HTML.
                        </Alert.Description>
                    </Alert.Content>
                </Alert>
                <div className="h-6" />
                {children}
            </div>
        </main>
    )
}
