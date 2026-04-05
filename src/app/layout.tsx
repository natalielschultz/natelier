import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";

export const viewport: Viewport = {
  themeColor: "#F3EEE7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Natelier — Handcrafted Jewelry",
    template: "%s | Natelier",
  },
  description:
    "Handcrafted jewelry for those who appreciate quality and restraint. Each piece is made with intention, designed to last.",
  metadataBase: new URL("https://thenatelier.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "handcrafted jewelry",
    "fine jewelry",
    "sapphire jewelry",
    "ruby jewelry",
    "emerald jewelry",
    "diamond jewelry",
    "18k gold",
    "platinum jewelry",
    "Natelier",
  ],
  authors: [{ name: "Natelier" }],
  creator: "Natelier",
  publisher: "Natelier",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thenatelier.com",
    siteName: "Natelier",
    title: "Natelier — Handcrafted Jewelry",
    description:
      "Handcrafted jewelry for those who appreciate quality and restraint. Each piece is made with intention, designed to last.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Natelier — Handcrafted Jewelry",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natelier — Handcrafted Jewelry",
    description:
      "Handcrafted jewelry for those who appreciate quality and restraint.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              getOrganizationSchema(),
              getWebSiteSchema(),
            ]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
