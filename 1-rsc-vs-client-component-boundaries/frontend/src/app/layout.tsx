// src/app/layout.tsx
// EN: Root layout of the App Router (Server Component). Wraps children in the client
// <Providers> island so HeroUI context is available app-wide.
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSC vs Client Component Boundaries",
  description: "Lesson lab — RSC boundary demo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
