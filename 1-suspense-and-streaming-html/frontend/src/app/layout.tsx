// Root layout — Server Component shell wrapping every App Router route. It stays
// a Server Component (no "use client") so it is part of the first-flushed shell;
// the HeroUI context lives in the <Providers> client boundary below.
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
