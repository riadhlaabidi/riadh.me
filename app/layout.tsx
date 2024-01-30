import './globals.css';
import 'highlight.js/styles/github-dark.css';
import type { Metadata } from 'next';
import Footer from './components/footer';
import Header from './components/header';
import { GoogleTagManager } from '@next/third-parties/google';
import Analytics from './components/Analytics';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

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
    <html
      lang="en"
      className={`bg-white font-light text-primary-gray dark:bg-[#1f1f1f] dark:text-neutral-100 ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <Analytics />
      </head>
      <body className="antialiased">
        <GoogleTagManager gtmId={GTM_ID} />
        <Header />
        <main className="m-auto mb-20 mt-10 flex min-h-dvh w-full flex-col justify-between px-6 lg:mb-0 lg:mt-20 lg:w-[75%] lg:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
