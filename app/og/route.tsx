import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');

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
          padding: 150,
        }}
      >
        <h2
          style={{
            color: '#ff9e64',
            fontSize: 64,
            fontWeight: 'bold',
          }}
        >
          <span>{title}</span>
        </h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    },
  );
}
