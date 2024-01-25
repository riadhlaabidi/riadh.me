import Card from '../components/Card';
import Divider from '../components/Divider';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Project, getProjects } from '../db/mdx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Checkout a list of projects made by Riadh Laabidi',
  openGraph: {
    title: 'Projects | Riadh Laabidi',
    description: 'Checkout a list of projects made by Riadh Laabidi',
  },
};

export default function Projects() {
  const sortedProjects: Project[] = getProjects().sort((a, b) => {
    if (new Date(a.metadata.lastModified) > new Date(b.metadata.lastModified)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mb-16 mt-4 text-secondary-gray dark:text-neutral-400">
        Some of the projects I&apos;m working on.
      </p>
      <Divider />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map(project => (
          <Card key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <h2 className="line-clamp-2 text-2xl font-bold dark:group-hover:text-white">
                {project.metadata.title}
              </h2>
              <p className="mt-7 line-clamp-2 text-secondary-gray dark:text-neutral-400">
                {project.metadata.description}
              </p>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
