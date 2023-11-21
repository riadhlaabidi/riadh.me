import { Project, allProjects } from 'contentlayer/generated';
import { ImageResponse } from 'next/og';

export const alt = 'Project thumbnail';

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = {
    contentType: 'image/png',
  };
  const project = allProjects.find((p: Project) => p.slug === params.slug);
  return project
    ? { ...metadata, alt: `${project.name} project thumbnail` }
    : metadata;
}

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(<div></div>, {});
}
