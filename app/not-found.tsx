export default function Error() {
  return (
    <div className="flex h-[80vh] items-center justify-center lg:h-[60vh]">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row-reverse">
        <span className="inline-block text-[130px] font-thin leading-none text-zinc-700/25 md:text-[180px]">
          🕸
        </span>
        <div className="mt-8 flex flex-col items-center gap-3 lg:mr-12 lg:items-start">
          <p className="text-3xl font-bold text-primary-green md:text-5xl">
            404
          </p>
          <p className="text-lg font-normal md:text-xl">
            Looks like nothing is here!
          </p>
        </div>
      </div>
    </div>
  )
}
