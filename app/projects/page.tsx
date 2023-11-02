import { Metadata } from 'next'
import Card from '../components/Card'
import Divider from '../components/Divider'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mb-16 mt-4 text-zinc-400">
        Some of the projects I&apos;m working on.
      </p>
      <Divider />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Link href="#">
            <h2 className="text-2xl font-bold">riadh.me</h2>
            <p className="mt-6 text-zinc-400 group-hover:text-zinc-100">
              This portfolio website.
            </p>
          </Link>
        </Card>
      </div>
    </>
  )
}
