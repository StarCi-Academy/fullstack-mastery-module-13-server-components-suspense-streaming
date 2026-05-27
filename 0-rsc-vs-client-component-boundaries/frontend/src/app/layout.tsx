import type { Metadata } from "next";
import "./globals.css";

// VI: Layout gốc của App Router (EN: Root layout for the App Router).
export const metadata: Metadata = {
  title: "RSC vs Client Component Boundaries",
  description: "Lesson lab — RSC boundary demo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
