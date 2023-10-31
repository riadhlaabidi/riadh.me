import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-transparent border border-zinc-500/50 rounded-xl hover:border-zinc-300/50 p-7 group">
      {children}
    </div>
  );
}
