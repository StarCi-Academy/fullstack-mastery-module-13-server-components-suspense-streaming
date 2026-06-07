// EN: A second route, declared by hand in App.tsx via createBrowserRouter.
// EN: In Vite the route mapping lives in code; the file path means nothing to a router.
import { LessonShell } from "../components/LessonShell";

/**
 * AboutPage — secondary route to show manual client-side routing in Vite.
 */
export default function AboutPage() {
  return (
    <LessonShell
      title="About — Vite SPA"
      description="This route is wired manually in App.tsx with createBrowserRouter — file paths do not define URLs in a Vite SPA."
      renderMode="csr"
    >
      <p>About us</p>
    </LessonShell>
  );
}
