import { foramtDate } from '@/app/util/date';
import { ReactNode } from 'react';

export default function ArticleHeader({
  title,
  publishedDate,
  children,
}: {
  title: string;
  publishedDate: string;
  children?: ReactNode;
}) {
  return (
    <header>
      <h1 className="mb-2 text-yellow">{title}</h1>
      <time className="text-dark5 text-base">{foramtDate(publishedDate)}</time>
      {children}
    </header>
  );
}
