import type { Metadata } from "next";
import { Almarai, Cairo } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "URS | Pharmacy Management System",
  description: "Advanced Pharmacy Management System with Smart Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${almarai.variable} ${cairo.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
