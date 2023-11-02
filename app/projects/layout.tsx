import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Riadh Laabidi's projects showcase page",
  openGraph: {
    title: 'Projects | Riadh Laabidi',
    description: 'Checkout a list of projects made by Riadh Laabidi',
  },
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
