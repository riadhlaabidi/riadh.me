import React, { ReactNode } from 'react';

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="article my-16 mx-auto max-w-[975px] leading-[175%]">
      {children}
    </article>
  );
}
