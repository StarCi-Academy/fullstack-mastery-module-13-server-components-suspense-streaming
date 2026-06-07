import { LessonShell } from "../components/LessonShell";

// EN: In Next.js the FILE PATH *is* the route — no router setup needed.
// EN: This file maps to the "/about" URL automatically, rendered on the server.
/**
 * AboutPage — secondary route to show file-based routing in Next.js App Router.
 */
export default function AboutPage() {
  return (
    <LessonShell
      title="About — Next.js SSR"
      description="This route is defined by the file path app/about/page.tsx — no router configuration is required."
      renderMode="ssr"
    >
      <p>About us</p>
    </LessonShell>
  );
}
