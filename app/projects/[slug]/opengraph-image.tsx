import { Project, allProjects } from 'contentlayer/generated';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = {
    contentType: 'image/png',
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
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 210,
        }}
      >
        <h2
          style={{
            fontFamily: 'Geist',
            color: '#fff',
            fontSize: 100,
          }}
        >
          <span>{project.name}</span>
        </h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
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
