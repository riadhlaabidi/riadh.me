import './globals.css';
import 'highlight.js/styles/github-dark.css';
import type { Metadata } from 'next';
import Footer from './components/footer';
import Header from '@/app/components/header';
import { GoogleTagManager } from '@next/third-parties/google';
import { Fira_Code } from 'next/font/google';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://riadh.me'),
  title: {
    default: 'Riadh Laabidi',
    template: '%s | Riadh Laabidi',
  },
  description: "Riadh Laabidi's portfolio homepage",
  openGraph: {
    title: 'Riadh Laabidi',
    description: 'Fullstack software engineer',
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
    <html lang="en" className={`${firaCode.variable}`}>
      <body className="bg-bg text-fg max-w-full font-normal lg:text-lg">
        <GoogleTagManager gtmId={GTM_ID} />
        <Header />
        <main className="max-w-[90%] lg:max-w-[85%] py-32 mx-auto min-h-screen selection:bg-highlight">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
