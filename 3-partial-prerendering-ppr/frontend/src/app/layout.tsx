// src/app/layout.tsx
// VI: Root layout của App Router. Static — không touch request-time API.
// EN: Root layout of the App Router. Static — does not touch request-time APIs.
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "PPR Demo",
  description: "Partial Prerendering hands-on lab",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
