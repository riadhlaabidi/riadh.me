import Card from '../components/Card';
import Divider from '../components/Divider';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export default function Projects() {
  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mb-16 mt-4 text-zinc-400">
        Some of the projects I&apos;m working on.
      </p>
      <Divider />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allProjects
          .sort((a, b) => {
            if (new Date(a.lastModified) > new Date(b.lastModified)) {
              return -1;
            }
            return 1;
          })
          .map(project => (
            <Card key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                <h2 className="text-2xl font-bold text-zinc-200 group-hover:text-white">
                  {project.name}
                </h2>
                <p className="mt-7 text-zinc-400 group-hover:text-zinc-100">
                  {project.description}
                </p>
              </Link>
            </Card>
          ))}
      </div>
    </>
  );
}
