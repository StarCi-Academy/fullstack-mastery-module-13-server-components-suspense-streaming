import Link from "next/link";
import { LessonShell } from "@/components/LessonShell";
import { Button, Code, Paragraph } from "@/components/ui";

/** Home page — entry point linking to the /comments Server Action demo. */
const HomePage = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Server Actions Lab"
          description={
            <>
              Mutate data with a Server Action plus Zod validation and <Code>revalidatePath</Code>.
              The native form still submits with JavaScript disabled.
            </>
          }
          alertTitle="Open /comments to run the Server Action demo"
          alertBody="Post a comment through a Server Action, watch Zod validation surface inline errors, and confirm the list revalidates after a successful submit."
          alertTip="Tip: try DevTools → Network while posting — the mutation runs on the server, not via a client-side REST call."
        >
          <div className="flex flex-col gap-3">
            <Paragraph size="sm" color="muted">
              Open the comments page to post a comment through a Server Action, see inline
              validation errors, and confirm the form works even without client JavaScript.
            </Paragraph>
            <Link href="/comments" className="inline-block" data-testid="link-comments">
              <Button variant="primary" type="button">
                Open /comments
              </Button>
            </Link>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}

export default HomePage
