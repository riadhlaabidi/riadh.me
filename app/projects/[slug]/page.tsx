import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';
import { Mdx } from 'app/components/mdx';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export async function generateStaticParams() {
  return allProjects.map((project: Project) => ({
    params: { slug: project.slug },
  }));
}

export default function Project({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = allProjects.find((p: Project) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="m-auto w-3/4">
      <header className="mb-20">
        <Link
          href="/projects"
          className=" text-zinc-400 hover:text-primary-green"
        >
          ← All projects
        </Link>
        <h1 className="mt-10 text-5xl font-bold">{project.name}</h1>
        <small className="mt-4 block text-sm text-secondary-gray">
          Last updated: {format(parseISO(project.lastModified), 'LLLL, d yyyy')}
        </small>
        {/* <p className="mt-7 mb-16 font-normal leading-normal lg:max-w-[60%]">
            {project.description}
          </p> */}
      </header>
      <Mdx source={project.body.code} />
    </div>
  );
}
