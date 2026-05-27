// src/app/product/page.tsx
// VI: Trang demo PPR — shell tĩnh prerender; Suspense bọc lỗ động <CartCount> đọc cookies().
// EN: PPR demo page — static shell prerender; Suspense wraps the dynamic <CartCount> hole reading cookies().
import { Suspense } from "react";
import { CartCount } from "./_components/cart-count";

export const experimental_ppr = true;

export default function ProductPage() {
  return (
    <main style={{ padding: 32, display: "flex", flexDirection: "column", gap: 12 }}>
      <header>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Acme Widget</h1>
        <p style={{ color: "#555" }}>Static description that is the same for every visitor.</p>
      </header>
      <Suspense fallback={<span data-testid="cart-fallback">Cart: …</span>}>
        <CartCount />
      </Suspense>
    </main>
  );
}
