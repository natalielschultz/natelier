import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Natelier — Handcrafted Jewelry",
    template: "%s | Natelier",
  },
  description:
    "Handcrafted jewelry for those who appreciate quality and restraint. Each piece is made with intention, designed to last.",
  metadataBase: new URL("https://thenatelier.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Natelier",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
