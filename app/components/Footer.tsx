import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="border-t-[1px] border-zinc-700 w-full m-auto"></div>
      <div className="self-center text-zinc-400 py-6">
        <small className="text-sm">
          Copyright &copy; <time dateTime="2023-10-18">2023</time> Riadh
          Laabidi. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
