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
  title: "نظام URS | الحل الأمثل لإدارة الصيدليات",
  description: "نظام سحابي متكامل يربط صيدليتك مع رصد والزكاة، ويدير المخزون والمبيعات بذكاء لزيادة أرباحك.",
  openGraph: {
    title: "نظام URS | الحل الأمثل لإدارة الصيدليات",
    description: "نظام سحابي متكامل يربط صيدليتك مع رصد والزكاة، ويدير المخزون والمبيعات بذكاء لزيادة أرباحك.",
    siteName: "URS System",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "نظام URS | إدارة صيدليات ذكية",
    description: "اربط صيدليتك مع رصد والزكاة فوراً مع نظام URS.",
  },
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
