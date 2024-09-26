import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Sample",
  description: "A basic layout with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
