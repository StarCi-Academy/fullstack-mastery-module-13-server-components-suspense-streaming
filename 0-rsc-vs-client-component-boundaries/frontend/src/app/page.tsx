import Link from "next/link";

// VI: Trang chủ lab — link tới product demo (EN: Landing page — link to product demo).
export default function Home() {
  return (
    <main className="space-y-4 p-8">
      <h1 className="text-2xl font-semibold">RSC Boundary Lab</h1>
      <p>
        Visit{" "}
        <Link className="text-blue-600 underline" href="/products/1">
          /products/1
        </Link>{" "}
        to see a Server Component render product data and a Client Component handle interactivity.
      </p>
    </main>
  );
}
