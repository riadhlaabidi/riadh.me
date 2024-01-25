import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group rounded-xl border-2 border-neutral-400 bg-transparent p-7 duration-300 hover:border-green-500  hover:transition-all dark:border-zinc-500/50 dark:hover:border-primary-green">
      {children}
    </div>
  );
}
