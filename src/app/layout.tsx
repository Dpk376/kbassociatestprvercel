import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K.B. ASSOCIATES | Professional Loan Consultancy",
  description: "Expert loan consultancy services in Tiruppur led by K.S. Savitha. Home loans, business loans, mortgage loans and more.",
  keywords: ["loan consultancy Tiruppur", "home loan Tiruppur", "business loan Tiruppur"],
  openGraph: {
    title: "K.B. ASSOCIATES | Professional Loan Consultancy",
    description: "Secure Home, Business, and Personal loans with professional guidance from K.S. Savitha.",
    type: "website",
    locale: "en_IN",
    siteName: "K.B. ASSOCIATES",
  },
};

import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body bg-background text-on-background antialiased`}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
