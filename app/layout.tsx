import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosa - Portfolio",
  description: "Personal portfolio of Kosa - Student, Dreamer, Trendsetter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
