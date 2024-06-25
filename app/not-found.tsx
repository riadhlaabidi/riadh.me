export default function Error() {
  return (
    <div className="flex max-h-screen justify-center">
      <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row-reverse">
        <span className="inline-block text-[160px] font-light leading-none text-comment md:text-[200px]">
          🕸
        </span>
        <div className="mt-8 flex flex-col items-center gap-3 lg:mr-12 lg:items-start">
          <p className="text-3xl font-semibold text-green1 md:text-5xl">404</p>
          <p className="text-lg font-normal md:text-xl text-dark5">
            Looks like nothing is here!
          </p>
        </div>
      </div>
    </div>
  );
}
