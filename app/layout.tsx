import type { Metadata } from "next";
import { Barlow, DM_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Luce | AI Agents That Work For You",
  description:
    "AI agents that plug into your real tools and work 24/7. No coding. No setup headaches. Built for businesses and busy professionals.",
  openGraph: {
    title: "Luce | AI Agents That Work For You",
    description: "AI agents that plug into your real tools and work 24/7.",
    url: "https://ai-marketplace-alpha-three.vercel.app",
    siteName: "Luce",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luce | AI Agents That Work For You",
    description: "AI agents that plug into your real tools and work 24/7.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
