import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Header from "./components/Header";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riadh.me"),
  title: {
    default: "Riadh Laabidi",
    template: "%s | Riadh Laabidi",
  },
  description: "Riadh Laabidi's portfolio",
  openGraph: {
    title: "Riadh Laabidi",
    description: "Fullstack web developer",
    url: "https://riadh.me",
    siteName: "Riadh Laabidi",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Riadh Laabidi",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className + " font-light text-white"}>
        <Header />
        <main className="w-full md:w-2/3 m-auto flex min-h-screen flex-col justify-between px-10 mt-20 mb-20 lg:mb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
