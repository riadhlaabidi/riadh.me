import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="m-auto w-full border-t-[1px] border-zinc-700"></div>
      <div className="self-center py-4 text-zinc-400">
        <small className="text-sm">
          Copyright &copy; <time dateTime="2023-10-18">2023</time> Riadh
          Laabidi. All rights reserved.
        </small>
      </div>
    </footer>
  )
}
