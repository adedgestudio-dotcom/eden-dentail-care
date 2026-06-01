import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "EDEN Dental & Esthetics | Premium Dental Care in Madhavaram, Chennai",
  description:
    "Experience premium dental care and aesthetic treatments at EDEN Dental & Esthetics. Women-owned clinic with 5.0 rating. Services include teeth whitening, veneers, smile makeover, and general dentistry. Located in Madhavaram, Chennai.",
  keywords:
    "dental clinic Chennai, teeth whitening, veneers, smile makeover, cosmetic dentistry, Madhavaram dental, women-owned clinic, best dentist Chennai",
  openGraph: {
    title: "EDEN Dental & Esthetics | Premium Dental Care in Chennai",
    description:
      "5.0 rated dental clinic offering comprehensive dental care and aesthetic treatments in Madhavaram, Chennai.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
