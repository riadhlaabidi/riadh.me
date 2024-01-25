import { BlogPost, getBlogPosts } from '@/app/db/mdx';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = {
    contentType: 'image/png',
    size: size,
    id: 'og-image',
  };

  const post = getBlogPosts().find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
    return [metadata];
  }

  return [{ ...metadata, alt: `${post.metadata.title} blog post thumbnail` }];
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
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
          <span>{post.metadata.title}</span>
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
