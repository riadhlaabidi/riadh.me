import hljs from 'highlight.js';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { createElement } from 'react';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();
}

function heading(level: number) {
  return ({ children }: { children?: React.ReactNode }) => {
    const slug = slugify(children as string);
    const heading = createElement(
      `h${level}`,
      { id: slugify(children as string) },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    );
    return heading;
  };
}

function Code({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!className) {
    return <code {...props}>{children}</code>;
  }

  const language = className.replace(/language-/, '');
  const html = hljs.highlight(children as string, { language }).value;
  // const html = Prism.highlight(children, Prism.languages[language], language);

  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

function CustomLink({
  href,
  children,
  ...props
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferer noopener nofollow" {...props}>
      {children}
    </a>
  );
}

const components = {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  code: Code,
  a: CustomLink,
};

export function CustomMDX(
  props: React.JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return (
    <div className="prose prose-neutral mt-10 max-w-none font-normal md:prose-lg dark:prose-invert prose-headings:font-medium">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
