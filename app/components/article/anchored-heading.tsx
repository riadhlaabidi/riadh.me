import { ReactNode, createElement } from 'react';

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .replace(/[?!]+/gi, '')
    .trim()
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();
}

export default function AnchoredHeading({
  level,
  children,
}: {
  level: number;
  children: ReactNode;
}) {
  const slug = slugify(children as string);
  const heading = createElement(
    `h${level}`,
    {
      id: slugify(children as string),
      className: `group`,
    },
    [
      createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: `invisible absolute -ml-[64px] text-dark5 lg:group-hover:visible`,
        },
        '#',
      ),
    ],
    children,
  );
  return heading;
}
