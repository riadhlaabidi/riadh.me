export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className=" h-px w-full bg-zinc-700/40 " />
      <div className="self-center py-4 text-zinc-400">
        <small className="text-sm">
          &copy; <time dateTime="2023-10-18">2023</time> Riadh Laabidi. All
          rights reserved.
        </small>
      </div>
    </footer>
  );
}
