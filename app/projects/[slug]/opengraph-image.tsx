import { Project, allProjects } from 'contentlayer/generated';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = {
    contentType: 'image/png',
    size: size,
    id: 'og-image',
  };
  const project = allProjects.find((p: Project) => p.slug === params.slug);
  return project
    ? [{ ...metadata, alt: `${project.name} project thumbnail` }]
    : [metadata];
}

export default async function Image({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return null;
  }

  const font = fetch(
    new URL('../../../public/fonts/Raleway-Regular.ttf', import.meta.url),
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: 'url(https://riadh.me/images/og-bg.png)',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 140,
        }}
      >
        <h2
          style={{
            fontFamily: 'Geist',
            color: '#fff',
            fontSize: 56,
          }}
        >
          <span>{project.name}</span>
        </h2>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: await font,
          style: 'normal',
        },
      ],
    },
  );
}
