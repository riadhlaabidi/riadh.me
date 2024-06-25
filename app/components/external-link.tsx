import { ReactNode } from 'react';

export default function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  );
}
