// Route-level loading.tsx — Next.js auto-wraps page.tsx in an implicit Suspense
// boundary with this component as fallback. (EN: Fallback cấp route hiển thị
// trước khi shell /dashboard sẵn sàng — Next.js bọc page.tsx trong Suspense
// ngầm với component này.)
export default function DashboardLoading(): React.ReactElement {
  return (
    <main className="flex min-h-screen items-center justify-center p-12">
      <div
        data-testid="route-loading"
        className="rounded-md bg-gray-100 px-6 py-4 text-lg font-medium text-gray-700"
      >
        Loading dashboard route...
      </div>
    </main>
  );
}
