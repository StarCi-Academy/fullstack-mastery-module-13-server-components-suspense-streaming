// Home page — links to /dashboard so the route loading.tsx flow can be observed.
// (EN: Trang chủ — đặt link sang /dashboard để quan sát flow loading.tsx mức route.)
import Link from "next/link";

export default function HomePage(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-12">
      <h1 className="text-3xl font-bold" data-testid="home-title">
        Suspense & Streaming HTML lab
      </h1>
      <Link
        href="/dashboard"
        data-testid="link-dashboard"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
