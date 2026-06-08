"use client";

import { useState } from "react";
import { Button, Chip } from "@/components/ui";

type CartStatus = "empty" | "added";

interface AddToCartButtonProps {
  /** Product id passed from the Server Component — the only prop that crosses the boundary. */
  productId: string;
}

/**
 * AddToCartButton — client cart island; status chip sits to the right of the action button.
 * @param props.productId - Product id passed from the Server Component — the only prop that crosses the boundary.
 */
export const AddToCartButton = ({ productId }: AddToCartButtonProps): React.JSX.Element => {
  const [count, setCount] = useState(0);
  const cartStatus: CartStatus = count > 0 ? "added" : "empty";

  return (
    <li className="flex items-center gap-3">
      <Button
        data-testid="add-to-cart"
        data-product-id={productId}
        variant="primary"
        size="md"
        type="button"
        className="font-medium"
        onPress={() => setCount((c) => c + 1)}
      >
        Add to cart ({count})
      </Button>
      <Chip
        data-testid="cart-state"
        color={cartStatus === "added" ? "success" : "default"}
        size="sm"
        variant="soft"
        className="w-fit capitalize border-none bg-transparent shadow-none"
      >
        {cartStatus}
      </Chip>
    </li>
  );
}
