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
    <div className="m-auto w-full md:w-3/4">
      <header className="mb-20">
        <Link
          href="/projects"
          className=" text-zinc-400 hover:text-primary-green"
        >
          ← All projects
        </Link>
        <div className="mt-10 flex items-center justify-between">
          <h1 className=" text-5xl font-bold">{project.name}</h1>
          <div className="flex gap-4">
            <a
              href={project.url}
              className="flex items-center gap-1 font-medium hover:text-primary-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
              </svg>
            </a>
            <a
              href={`https://github.com/${project.repository}`}
              className="flex items-center gap-1 font-medium hover:text-primary-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
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
