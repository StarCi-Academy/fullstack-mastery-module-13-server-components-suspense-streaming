import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui";

// VI: Trang chủ lab — link tới product demo (EN: Landing page — link to product demo).
export default function Home(): React.ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">RSC Boundary Lab</CardTitle>
          <CardDescription>
            Open <code className="bg-default-100 rounded px-1.5 py-0.5 text-sm">/products/1</code> để
            xem Server Component render dữ liệu và Client Component xử lý interactivity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/products/1" className="inline-block" data-testid="link-product">
            <Button color="primary" size="lg" variant="solid" type="button" className="font-medium">
              Mở /products/1
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
