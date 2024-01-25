import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';
import TechBadge from '@/app/components/tech-badge';
import { foramtDate } from '@/app/util/date';
import type { Metadata } from 'next';
import { Project, getProjects } from '@/app/db/mdx';
import { CustomMDX } from '@/app/components/mdx';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = getProjects().find((p: Project) => p.slug === params.slug);

  if (!project) {
    return;
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
    openGraph: {
      title: `${project.metadata.title} | Riadh Laabidi`,
      description: project.metadata.description,
      images: [
        {
          url: `https://riadh.me/og?title=${project.metadata.title}`,
          alt: `${project.metadata.title} project image`,
        },
      ],
      type: 'article',
      publishedTime: project.metadata.lastModified,
      url: `https://riadh.me/project/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.metadata.title} | Riadh Laabidi`,
      description: project.metadata.description,
      images: [`https://riadh.me/og?title=${project.metadata.title}`],
    },
  };
}

export async function generateStaticParams() {
  return getProjects().map((project: Project) => ({
    params: { slug: project.slug },
  }));
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
      className="fill-secondary-gray hover:fill-green-500 dark:fill-neutral-400 dark:hover:fill-primary-green"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  );
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = getProjects().find((p: Project) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full md:w-3/5">
      <Link
        href="/projects"
        className="group flex items-center gap-1 text-secondary-gray hover:text-primary-green dark:text-neutral-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={20}
          height={20}
          className="duration-200 group-hover:-translate-x-2"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        All projects
      </Link>
      <article className="mb-20">
        <div className="mb-14 lg:mb-20">
          <h1 className="mt-12 text-5xl font-bold">{project.metadata.title}</h1>
          <small className="mt-6 block text-sm text-secondary-gray dark:text-neutral-400">
            Last updated: {foramtDate(project.metadata.lastModified)}
          </small>
          <div className="mt-10 flex flex-col justify-between lg:flex-row">
            {(project.metadata.url || project.metadata.repository) && (
              <div className="mb-8 flex items-center gap-3 lg:mb-0 lg:w-1/3">
                {project.metadata.repository && (
                  <ExternalLink
                    href={`https://github.com/${project.metadata.repository}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 98 96"
                      width={30}
                      height={30}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      />
                    </svg>
                  </ExternalLink>
                )}
                {project.metadata.url && (
                  <ExternalLink href={project.metadata.url}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={30}
                      height={30}
                      className="hover:animate-wiggle"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>
                  </ExternalLink>
                )}
              </div>
            )}
            <div className="flex w-full items-end gap-1 lg:mt-0 lg:justify-end">
              <span className="text-sm text-secondary-gray dark:text-neutral-500">
                Stack:
              </span>
              {project.metadata.stack.split(',').map((tech: string) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>
        <CustomMDX source={project.content} />
      </article>
    </div>
  );
}
