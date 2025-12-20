import React from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Blog",
  description: "Engineering notes and thoughts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-3xl p-4 flex gap-6">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}