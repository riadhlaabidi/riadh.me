import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to Riadh Laabidi',
  openGraph: {
    title: 'Contact | Riadh Laabidi',
    description: "Reach out to me and let's work together",
  },
  twitter: {
    title: 'Contact | Riadh Laabidi',
    description: "Reach out to me and let's work together",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
