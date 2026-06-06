import { db } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle, Chip } from "@/components/ui";
import { AddToCartButton } from "./_components/add-to-cart";

interface ProductRow {
  id: string;
  name: string;
  price: number;
}

// EN: Server Component — queries the DB and renders HTML, no "use client".
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
      <main className="mx-auto max-w-3xl p-6">
        <Card className="border-danger-200 border">
          <CardHeader>
            <CardTitle className="text-danger-700 text-2xl font-semibold">
              Product not found
            </CardTitle>
          </CardHeader>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-default-500 text-xs uppercase tracking-wide">Server Component</span>
            <CardTitle
              data-testid="product-name"
              className="text-3xl font-bold tracking-tight"
            >
              {product.name}
            </CardTitle>
          </div>
          <Chip color="accent" variant="soft" size="sm">
            id: {product.id}
          </Chip>
        </CardHeader>
        <CardContent className="space-y-4">
          <p data-testid="product-price" className="text-primary-700 text-4xl font-bold">
            ${product.price}
          </p>
          <p className="text-default-500 text-sm">
            The element below is a Client Component — only <code className="bg-default-100 rounded px-1 py-0.5 text-xs">productId</code> crosses the boundary.
          </p>
          <AddToCartButton productId={product.id} />
        </CardContent>
      </Card>
    </main>
  );
}
