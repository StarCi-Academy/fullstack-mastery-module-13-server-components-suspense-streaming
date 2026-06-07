// src/app/products/[id]/page.tsx
// EN: Server Component — queries the DB and renders HTML, no "use client".
// The Chip labels make the RSC (server) vs Client island boundary visually explicit.
import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Chip,
  Paragraph,
} from "@/components/ui";
import { AddToCartButton } from "./_components/add-to-cart";

interface ProductRow {
  id: string;
  name: string;
  price: number;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.JSX.Element> {
  const { id } = await params;
  const { rows } = await db.query<ProductRow>(
    "SELECT id, name, price FROM products WHERE id = $1",
    [id],
  );
  const product = rows[0];

  if (!product) {
    return (
      <main className="min-h-screen bg-background p-3">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-danger">Product not found</CardTitle>
              <CardDescription>No product matched id {id}.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Server Component card — data fetched on the server, rendered to HTML */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <Chip color="accent" variant="soft" size="sm" className="w-fit">
                Server Component
              </Chip>
              <CardTitle data-testid="product-name" className="text-2xl font-semibold tracking-tight">
                {product.name}
              </CardTitle>
            </div>
            <Chip color="default" variant="secondary" size="sm" className="w-fit">
              id: {product.id}
            </Chip>
          </CardHeader>
          <CardContent>
            <p data-testid="product-price" className="text-3xl font-bold text-foreground">
              ${product.price}
            </p>
          </CardContent>
        </Card>

        {/* Client Component card — interactive island; only productId crosses the boundary */}
        <Card className="border-warning-200 border">
          <CardHeader className="flex flex-row items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <Chip color="warning" variant="soft" size="sm" className="w-fit">
                Client Component
              </Chip>
              <Paragraph size="sm" color="muted">
                Only{" "}
                <code className="rounded bg-default-100 px-1 py-0.5 text-xs">productId</code> crosses
                the boundary into the client bundle.
              </Paragraph>
            </div>
          </CardHeader>
          <CardContent>
            <AddToCartButton productId={product.id} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
