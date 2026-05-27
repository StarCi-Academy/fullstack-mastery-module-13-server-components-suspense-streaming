import Link from "next/link";

// VI: Trang chủ chỉ điều hướng sang /comments — UI tối giản.
// (EN: Home page just navigates to /comments — minimal UI.)
export default function HomePage(): React.ReactElement {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-semibold">Server Actions Lab</h1>
      <p className="mt-2 text-gray-600">
        Mở{" "}
        <Link className="text-blue-600 underline" href="/comments">
          /comments
        </Link>{" "}
        để thực hành Server Actions.
      </p>
    </main>
  );
}
