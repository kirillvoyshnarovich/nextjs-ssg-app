import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangem test task",
  description: "Tanem test task",
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
