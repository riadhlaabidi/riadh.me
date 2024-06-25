import { ReactNode } from 'react';

export default function ArticleContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="mx-auto max-w-4xl">{children}</section>;
}
