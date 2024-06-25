import type { Metadata } from 'next';
import ArticleContainer from '@/app/components/article/article-container';
import ArticleHeader from '@/app/components/article/article-header';
import ExternalLink from '@/app/components/external-link';
import { Article } from '@/app/components/article/article';

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    title: 'riadh.me',
    description: 'My portfolio website project',
    openGraph: {
      title: 'riadh.me | Riadh Laabidi',
      description: 'My portfolio website project',
      images: [
        {
          url: `https://riadh.me/og?title=riadh.me`,
          alt: `riadh.me project image`,
        },
      ],
      type: 'article',
      publishedTime: '2024-06-23',
      url: 'https://riadh.me/projects/riadh-me',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'riadh.me | Riadh Laabidi',
      description: 'My portfolio website project',
      images: [`https://riadh.me/og?title=riadh.me`],
    },
  };
}

export default function Project() {
  return (
    <ArticleContainer>
      <ArticleHeader title="riadh.me" publishedDate="2024-06-23">
        <div className="flex lg:justify-end gap-3 mt-6">
          <ExternalLink
            href={`https://github.com/riadhlaabidi/riadh.me`}
            className="flex"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24"
              height="24"
            >
              <path d="M 33 29 C 31.203125 29 30 30.515625 30 33 C 30 35.484375 30.890625 38.046875 33 38 C 35.21875 37.949219 36.019531 35.777344 36 33 C 35.984375 30.515625 34.792969 29 33 29 Z M 44.261719 17.066406 C 44.535156 15.722656 44.652344 10.964844 42.679688 6 C 42.679688 6 38.148438 6.496094 31.296875 11.199219 C 29.863281 10.800781 27.429688 10.601563 25 10.601563 C 22.570313 10.601563 20.140625 10.800781 18.699219 11.195313 C 11.851563 6.496094 7.324219 6 7.324219 6 C 5.347656 10.964844 5.445313 15.609375 5.738281 17.066406 C 3.417969 19.585938 2 22.609375 2 26.742188 C 2 44.707031 16.90625 44.996094 20.667969 44.996094 C 21.519531 44.996094 23.210938 44.996094 25 45 C 26.789063 44.996094 28.484375 44.996094 29.332031 44.996094 C 33.09375 44.996094 48 44.707031 48 26.742188 C 48 22.609375 46.582031 19.585938 44.261719 17.066406 Z M 25.140625 43 L 25 43 C 15.570313 43 8.15625 41.660156 8.15625 32.496094 C 8.15625 30.300781 8.933594 28.265625 10.773438 26.574219 C 13.84375 23.753906 19.035156 25.246094 24.929688 25.246094 C 24.953125 25.246094 25.050781 25.246094 25.070313 25.246094 C 30.964844 25.246094 36.160156 23.757813 39.230469 26.574219 C 41.070313 28.265625 41.84375 30.300781 41.84375 32.496094 C 41.84375 41.660156 34.570313 43 25.140625 43 Z M 17 29 C 15.207031 29 14 31.015625 14 33.5 C 14 35.984375 15.207031 38 17 38 C 18.796875 38 20 35.984375 20 33.5 C 20 31.015625 18.796875 29 17 29 Z"></path>
            </svg>
          </ExternalLink>
          <ExternalLink href="https://riadh.me" className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </ExternalLink>
        </div>
      </ArticleHeader>
      <Article>
        <p>
          I made this website using Next.js and deployed it on Vercel. You can
          checkout the source code in the Github link above.
        </p>
      </Article>
    </ArticleContainer>
  );
}
