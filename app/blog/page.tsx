import type { Metadata } from 'next';
import Link from 'next/link';
import { foramtDate } from '../util/date';
import { BlogPost, getBlogPosts } from '../db/mdx';
import Card from '../components/Card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Checkout latest blog posts published by Riadh Laabidi',
  openGraph: {
    title: 'Blog | Riadh Laabidi',
    description: 'Checkout latest blog posts published by Riadh Laabidi',
  },
};

export default function Blog() {
  const sortedBlogs: BlogPost[] = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-10 ">
        {sortedBlogs.map(blog => (
          <Card key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <article className="group flex flex-col justify-center gap-2">
                <span className="self-start rounded-md bg-zinc-400/40 px-2 py-1 text-xs font-normal uppercase">
                  {blog.metadata.tag}
                </span>
                <h2 className="line-clamp-2 text-xl font-semibold md:text-xl">
                  {blog.metadata.title}
                </h2>
                <p className="text-sm text-secondary-gray  dark:text-neutral-400">
                  <time dateTime={blog.metadata.publishedAt}>
                    {foramtDate(blog.metadata.publishedAt)}
                  </time>
                  <span className="m-2 font-bold ">&bull;</span>
                  <span>{blog.metadata.readTime} min read</span>
                </p>
              </article>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
