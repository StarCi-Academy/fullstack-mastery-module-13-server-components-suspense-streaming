// src/app/layout.tsx
// EN: Root layout of the App Router. Static — does not touch request-time APIs.
// Wraps children in the client <Providers> so HeroUI context is available app-wide.
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "PPR Demo",
  description: "Partial Prerendering hands-on lab",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
