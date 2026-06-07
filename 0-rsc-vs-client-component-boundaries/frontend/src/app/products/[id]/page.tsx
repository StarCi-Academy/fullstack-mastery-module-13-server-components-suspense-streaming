import { db } from "@/lib/db";
import { Chip } from "@/components/ui";
import { AddToCartButton } from "./_components/add-to-cart";

interface ProductRow {
  id: string;
  name: string;
  price: number;
}

/** Server Component — queries the DB and renders HTML, no "use client". */
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
          <div className="text-base font-semibold text-danger">Product not found</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Server Component</div>
            <h1
              data-testid="product-name"
              className="text-2xl font-semibold text-foreground"
            >
              {product.name}
            </h1>
          </div>
          <Chip variant="secondary" size="sm" className="w-fit">
            id: {product.id}
          </Chip>
        </div>

        <p data-testid="product-price" className="text-3xl font-bold text-foreground">
          ${product.price}
        </p>

        <p className="text-sm text-muted">
          The control below is a Client Component — only{" "}
          <code className="rounded bg-default-100 px-1 py-0.5 text-xs">productId</code> crosses
          the boundary.
        </p>

        <AddToCartButton productId={product.id} />
      </div>
    </main>
  );
}
