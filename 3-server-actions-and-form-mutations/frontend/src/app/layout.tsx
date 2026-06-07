import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

// Lab page metadata — shown in the browser tab.
export const metadata: Metadata = {
  title: "Server Actions Lab",
  description: "Server Actions and Form Mutations — Fullstack Mastery M13L2",
};

// Root layout for the App Router; wraps HTML + body and mounts client providers.
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
