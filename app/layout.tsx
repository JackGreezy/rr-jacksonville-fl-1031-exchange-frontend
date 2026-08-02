import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyCall from "@/components/StickyCall";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "1031 Exchange Jacksonville | Property Sale Solutions",
  description:
    "Prepare a Jacksonville 1031 exchange from planned sale through replacement closing. Request free information and current property options.",
  metadataBase: new URL("https://www.1031exchangeofjacksonville.com"),
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",

  alternates: { canonical: "/" },

  twitter: { card: "summary_large_image", title: "1031 Exchange Jacksonville | Property Sale Solutions", description: "Prepare a Jacksonville 1031 exchange from planned sale through replacement closing. Request free information and current property options." },

  openGraph: { title: "1031 Exchange Jacksonville | Property Sale Solutions", description: "Prepare a Jacksonville 1031 exchange from planned sale through replacement closing. Request free information and current property options." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-[#1a1a1a] text-[#f5f1eb]`}>
        <Header />
        {children}
        <Footer />
        <StickyCall phone="(904) 664-9656" />
        <Analytics />
      </body>
    </html>
  );
}
