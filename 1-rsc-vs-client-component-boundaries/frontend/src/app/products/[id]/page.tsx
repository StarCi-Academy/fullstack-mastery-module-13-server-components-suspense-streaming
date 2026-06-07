import { db } from "@/lib/db";
import { LessonShell } from "@/components/LessonShell";
import { AddToCartButton } from "./_components/add-to-cart";
import { ProductCatalog } from "./_components/product-catalog";

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
          <LessonShell
            title="Product not found"
            description={`No product matched id ${id}.`}
            alertTitle="Try /products/1 or /products/2"
            alertBody="This route is a Server Component — the not-found state is also rendered on the server."
          >
            <p className="text-sm text-muted">Use a valid product id from the mock database.</p>
          </LessonShell>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl">
        <LessonShell
          title="Product detail"
          description="Server-rendered product list plus a client cart island on the same route."
          showAlertIndicator={false}
          alertTitle="Open DevTools → disable JavaScript, then reload"
          alertBody="The product catalog renders on the server with names and prices in the first HTML response. Re-enable JS to use Add to cart on the active row."
          alertTip="Tip: inspect client chunks — db.ts / MOCK_PRODUCTS must not ship to the browser."
        >
          <div className="flex flex-col gap-6">
            <ProductCatalog activeProductId={product.id} />
            <ul className="flex flex-col">
              <AddToCartButton productId={product.id} />
            </ul>
          </div>
        </LessonShell>
      </div>
    </main>
  );
}
