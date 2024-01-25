import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');

  const font = fetch(
    new URL('../../public/fonts/Raleway-Regular.ttf', import.meta.url),
  ).then(res => res.arrayBuffer());

  const fontData = await font;

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
          <span>{title}</span>
        </h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Geist',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
