import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Mitra Utama Cemerlang | Reliable Business Supply Partner",
  description:
    "PT. Mitra Utama Cemerlang menyediakan bahan baku, pangan, dan perlengkapan umum untuk mendukung kebutuhan operasional bisnis di Jakarta dan Kalimantan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
