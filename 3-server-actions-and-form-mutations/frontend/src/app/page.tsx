import Link from "next/link";
import { Button, Card, CardContent, Chip, Code, Paragraph } from "@/components/ui";
import { LessonHeader } from "@/components/lesson-header";

/** Home page — entry point linking to the /comments Server Action demo. */
export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonHeader
          title="Server Actions Lab"
          description={
            <>
              Mutate data with a Server Action plus Zod validation and <Code>revalidatePath</Code>.
              The native form still submits with JavaScript disabled.
            </>
          }
        />

        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Chip color="accent" variant="soft" size="sm">
                Server Action
              </Chip>
              <Chip color="default" variant="soft" size="sm">
                Zod validation
              </Chip>
              <Chip color="default" variant="soft" size="sm">
                Progressive enhancement
              </Chip>
            </div>

            <Paragraph size="sm" color="muted">
              Open the comments page to post a comment through a Server Action, see inline
              validation errors, and confirm the form works even without client JavaScript.
            </Paragraph>

            <Link href="/comments" className="inline-block" data-testid="link-comments">
              <Button variant="primary" type="button">
                Open /comments
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
