import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Riadh Laabidi's portfolio contact page",
  openGraph: {
    title: "Contact | Riadh Laabidi",
    description: "Reach out to me and let's work together",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
