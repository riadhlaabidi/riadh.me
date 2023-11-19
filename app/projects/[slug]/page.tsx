import { notFound } from 'next/navigation';
import { allProjects, Project } from 'contentlayer/generated';
import { Mdx } from 'app/components/mdx';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { ReactNode } from 'react';

export async function generateStaticParams() {
  return allProjects.map((project: Project) => ({
    params: { slug: project.slug },
  }));
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-zinc-700/60 px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-[2px] rounded-full border border-zinc-200 px-4 py-2 font-medium text-zinc-200 hover:border-primary-green hover:text-primary-green"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}

export default function Project({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = allProjects.find((p: Project) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="m-auto w-full md:w-3/4">
      <header className="mb-14 lg:mb-20">
        <Link
          href="/projects"
          className="flex items-center gap-1 text-zinc-400 hover:text-primary-green"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          All projects
        </Link>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-10">
            <h1 className=" text-5xl font-bold">{project.name}</h1>
            <small className="mt-4 block text-sm text-secondary-gray">
              Last updated:{' '}
              {format(parseISO(project.lastModified), 'LLLL, d yyyy')}
            </small>
          </div>
          {(project.repository || project.url) && (
            <div className="mt-10">
              <div className="flex flex-wrap gap-4 ">
                {project.repository && (
                  <ExternalLink
                    href={`https://github.com/${project.repository}`}
                  >
                    Github
                  </ExternalLink>
                )}
                {project.url && (
                  <ExternalLink href={project.url}>Website</ExternalLink>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="mt-10 flex gap-1">
          {project.stack.map((tech: string) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {/* <p className="mt-7 mb-16 font-normal leading-normal lg:max-w-[60%]">
            {project.description}
          </p> */}
      </header>
      <Mdx source={project.body.code} />
    </div>
  );
}
