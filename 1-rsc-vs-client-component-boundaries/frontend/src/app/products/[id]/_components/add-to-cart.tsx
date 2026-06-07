"use client";

// EN: Client Component — the interactive island that handles cart state.
import { useState } from "react";
import { Button, Chip } from "@/components/ui";

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps): React.JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-3">
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
        color={count > 0 ? "success" : "default"}
        variant="secondary"
        size="sm"
        className="w-fit capitalize"
      >
        {count > 0 ? "added" : "empty"}
      </Chip>
    </div>
  );
}
