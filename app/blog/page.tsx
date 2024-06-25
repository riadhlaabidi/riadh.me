import type { Metadata } from 'next';
import Card from '@/app/components/card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Checkout latest blog posts published by Riadh Laabidi',
  openGraph: {
    title: 'Blog | Riadh Laabidi',
    description: 'Checkout latest blog posts published by Riadh Laabidi',
  },
};

const blogs = [
  {
    slug: 'server-actions',
    title: 'Create a contact form using Next.js & server actions',
    description:
      'How to create a contact form using Next.js server actions to submit data.',
  },
];

export default function Blog() {
  return (
    <>
      <header>
        <h1>Blog</h1>
        <p className="mt-4 text-dark5">Read my latest articles.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
        {blogs.map(blog => (
          <Card
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            url={`blog/${blog.slug}`}
          />
        ))}
      </div>
    </>
  );
}
