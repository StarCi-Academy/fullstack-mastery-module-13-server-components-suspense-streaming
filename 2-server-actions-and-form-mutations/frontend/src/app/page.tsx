import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui";

// VI: Trang chủ điều hướng sang /comments với UI polished.
// (EN: Home page redirects to /comments with polished UI.)
export default function HomePage(): React.ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Server Actions Lab</CardTitle>
          <CardDescription>
            Thực hành Server Actions của Next.js 15 — submit form, validate Zod, revalidate path.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/comments" className="inline-block">
            <Button color="primary" size="lg" variant="solid" type="button" className="font-medium">
              Mở /comments
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
