import { CustomMDX } from '@/app/components/mdx';
import { BlogPost, getBlogPosts } from '@/app/db/mdx';
import { foramtDate } from '@/app/util/date';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: `${post.metadata.title} | Riadh Laabidi`,
      images: [
        {
          url: `https://riadh.me/og?title=${post.metadata.title}`,
          alt: `${post.metadata.title} blog post image`,
        },
      ],

      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.publishedAt,
      url: `https://riadh.me/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.metadata.title} | Riadh Laabidi`,
      description: post.metadata.description,
      images: [`https://riadh.me/og?title=${post.metadata.title}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPosts().find(
    (post: BlogPost) => post.slug === params.slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto w-full md:w-3/5">
      <Link
        href="/blog"
        className="group flex items-center gap-1 text-secondary-gray hover:text-green-500 dark:text-neutral-400 dark:hover:text-primary-green"
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
        All posts
      </Link>
      <article className="mb-20 mt-12">
        <h1 className="text-3xl font-semibold lg:text-4xl">
          {post.metadata.title}
        </h1>
        <div className="mt-6 text-sm text-secondary-gray md:text-base dark:text-neutral-400">
          <time className="" dateTime={post.metadata.publishedAt}>
            {foramtDate(post.metadata.publishedAt)}
          </time>
          <span className="mx-2 ">•</span>
          <span>{post.metadata.readTime} min read</span>
        </div>

        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
