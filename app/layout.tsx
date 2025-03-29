import type { Metadata } from "next";
import "./globals.css";
import { Banner } from "@/components";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  );
}
