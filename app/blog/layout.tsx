import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description: "Riadh Laabidi's Blog",
  openGraph: {
    title: 'Blog | Riadh Laabidi',
    description: 'Checkout latest blog posts published by Riadh Laabidi',
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
