import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group rounded-xl border border-zinc-500/50 bg-transparent p-7 hover:border-zinc-300/50">
      {children}
    </div>
  )
}
