import type { Metadata } from "next";
import "./globals.css";

// VI: Metadata trang lab — hiển thị trên tab trình duyệt.
// (EN: Lab page metadata — shown in the browser tab.)
export const metadata: Metadata = {
  title: "Server Actions Lab",
  description: "Server Actions and Form Mutations — Fullstack Mastery M13L2",
};

// VI: Root layout cho App Router; bọc HTML + body.
// (EN: Root layout for the App Router; wraps HTML + body.)
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-default-50 text-foreground antialiased">{children}</body>
    </html>
  );
}
