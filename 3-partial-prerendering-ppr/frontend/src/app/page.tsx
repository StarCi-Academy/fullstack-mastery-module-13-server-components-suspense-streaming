// src/app/page.tsx
// VI: Trang gốc — chỉ direct user sang /product (route demo PPR).
// EN: Root page — only directs the user to /product (PPR demo route).
export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>PPR Demo</h1>
      <p>
        Go to <a href="/product">/product</a> for the PPR lab page.
      </p>
    </main>
  );
}
