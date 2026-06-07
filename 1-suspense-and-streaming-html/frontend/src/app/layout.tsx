// Root layout — wraps every route (EN: Layout gốc bao quanh mọi route App Router).
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suspense & Streaming HTML",
  description: "Lab: progressive HTML streaming via React Suspense + Next.js loading.tsx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
