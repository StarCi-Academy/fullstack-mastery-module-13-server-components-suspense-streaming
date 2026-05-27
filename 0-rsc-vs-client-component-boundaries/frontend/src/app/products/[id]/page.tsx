import { db } from "@/lib/db";
import { AddToCartButton } from "./_components/add-to-cart";

interface ProductRow {
  id: string;
  name: string;
  price: number;
}

// VI: Server Component — query DB và render HTML, không "use client"
// (EN: Server Component — queries the DB and renders HTML, no "use client").
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.JSX.Element> {
  const { id } = await params;
  const { rows } = await db.query<ProductRow>(
    "SELECT id, name, price FROM products WHERE id = $1",
    [id]
  );
  const product = rows[0];

  if (!product) {
    return (
      <main className="space-y-4 p-8">
        <h1 className="text-2xl">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="space-y-4 p-8">
      <h1 data-testid="product-name" className="text-2xl font-semibold">
        {product.name}
      </h1>
      <p data-testid="product-price" className="text-lg">
        ${product.price}
      </p>
      <AddToCartButton productId={product.id} />
    </main>
  );
}
