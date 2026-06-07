import { db } from "@/lib/db";
import {
  PRODUCT_NAME_CLASS,
  PRODUCT_PRICE_CLASS,
  PRODUCT_ROW_ACTIVE_CLASS,
  PRODUCT_ROW_INACTIVE_CLASS,
} from "../_lib/product-row-classes";

interface ProductCatalogProps {
  /** Active product id — its row receives Playwright testids for name and price. */
  activeProductId: string;
}

/**
 * ProductCatalog — server-rendered product list from the mock database.
 * @param props.activeProductId - Active product id — its row receives Playwright testids for name and price.
 */
export async function ProductCatalog({
  activeProductId,
}: ProductCatalogProps): Promise<React.JSX.Element> {
  const products = await db.listAllProducts();

  return (
    <ul data-testid="product-list" className="flex flex-col gap-3">
      {products.map((product) => {
        const isActive = product.id === activeProductId;
        return (
          <li
            key={product.id}
            className={isActive ? PRODUCT_ROW_ACTIVE_CLASS : PRODUCT_ROW_INACTIVE_CLASS}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              {isActive ? (
                <p data-testid="product-name" className={PRODUCT_NAME_CLASS}>
                  {product.name}
                </p>
              ) : (
                <p className={PRODUCT_NAME_CLASS}>{product.name}</p>
              )}
              {isActive ? (
                <p data-testid="product-price" className={PRODUCT_PRICE_CLASS}>
                  ${product.price}
                </p>
              ) : (
                <p className={PRODUCT_PRICE_CLASS}>${product.price}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
