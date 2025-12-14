import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosa - Portfolio",
  description: "Personal portfolio of Kosa - Student, Dreamer, Trendsetter",
  openGraph: {
    title: "Kosa - Portfolio",
    description: "Personal portfolio of Kosa - Student, Dreamer, Trendsetter",
    siteName: "Kosa",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Kosa Portfolio Preview",
      },
    ],
    type: "website",
  },
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
