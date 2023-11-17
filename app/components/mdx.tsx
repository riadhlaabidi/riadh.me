import { useMDXComponent } from 'next-contentlayer/hooks';

export function Mdx({ source }: { source: string }) {
  const Component = useMDXComponent(source);

  return (
    <article className="prose mb-20 max-w-full font-normal dark:prose-invert md:text-lg">
      <Component />
    </article>
  );
}
