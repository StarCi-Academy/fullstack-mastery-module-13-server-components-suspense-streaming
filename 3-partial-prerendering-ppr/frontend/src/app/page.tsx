// src/app/page.tsx
// VI: Trang gốc — direct user sang /product (PPR demo).
// EN: Root page — directs user to /product (PPR demo).
import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">PPR Demo</CardTitle>
          <CardDescription>
            Partial Prerendering — shell tĩnh + lỗ động đọc cookie qua Suspense.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/product" className="inline-block">
            <Button color="primary" size="lg" variant="solid" type="button" className="font-medium">
              Mở /product
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
