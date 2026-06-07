import type { Metadata } from "next";

// EN: Root layout, server-rendered by default. It produces the HTML shell
// EN: that already wraps server-rendered content (unlike Vite's empty index.html).
export const metadata: Metadata = {
  title: "Next.js SSR — Products",
  description: "Products rendered on the server, present in the first HTML response.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
