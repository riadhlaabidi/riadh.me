import hljs from 'highlight.js';
import { MDXRemote } from 'next-mdx-remote/rsc';
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
  return ({ children }: { children: string }) => {
    const slug = slugify(children);
    const heading = createElement(
      `h${level}`,
      { id: slugify(children) },
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
  children: string;
  className: string;
}) {
  if (!className) {
    return <code {...props}>{children}</code>;
  }

  const language = className.replace(/language-/, '');
  const html = hljs.highlight(children, { language }).value;
  // const html = Prism.highlight(children, Prism.languages[language], language);

  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

const components = {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  code: Code,
};

export function CustomMDX(props) {
  return (
    <div className="prose prose-neutral mt-10 max-w-none font-normal md:prose-lg dark:prose-invert prose-headings:font-medium">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
