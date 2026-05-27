"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  productId: string;
}

// VI: Client Component — xử lý interactive (EN: Client Component — handles interactivity).
export function AddToCartButton({ productId }: AddToCartButtonProps): React.JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <button
      data-testid="add-to-cart"
      data-product-id={productId}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      onClick={() => setCount((c) => c + 1)}
      type="button"
    >
      Add to cart ({count})
    </button>
  );
}
