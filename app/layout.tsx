import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import Header from './components/Header';
import { GoogleTagManager } from '@next/third-parties/google';
import Analytics from './components/Analytics';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SpeedInsights } from '@vercel/speed-insights/next';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;

export const metadata: Metadata = {
  metadataBase: new URL('https://riadh.me'),
  title: {
    default: 'Riadh Laabidi',
    template: '%s | Riadh Laabidi',
  },
  description: "Riadh Laabidi's portfolio homepage",
  openGraph: {
    title: 'Riadh Laabidi',
    description: 'Fullstack web developer',
    url: 'https://riadh.me',
    siteName: 'Riadh Laabidi',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Riadh Laabidi',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <Analytics />
      </head>
      <body className="font-light text-white">
        <GoogleTagManager gtmId={GTM_ID} />
        <Header />
        <main className="m-auto mb-20 mt-10 flex min-h-screen w-full flex-col justify-between px-6 lg:mb-0 lg:mt-20 lg:w-[75%] lg:px-10">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
