import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './components/icons';

export default function Home() {
  return (
    <section className="mx-auto flex w-full flex-col items-center p-0">
      <div className="flex flex-col items-center">
        <div className=" mb-8 flex items-center rounded-full border border-neutral-400 px-4 py-1 text-sm font-medium transition-all duration-200 hover:scale-110 dark:border-zinc-600">
          <span className="relative mr-2 flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <p>Available for hire</p>
        </div>
        <Image
          className="rounded-full"
          src="/images/me.png"
          alt="riadh's photo"
          quality={100}
          width={110}
          height={110}
          priority
        />
        <h1 className="mt-8 text-center text-4xl leading-tight md:text-6xl lg:text-large ">
          Hello, I&apos;m <br />
          Riadh Laabidi
        </h1>
        <p className="mt-6 max-w-2xl text-center text-base font-normal text-secondary-gray md:text-lg dark:text-neutral-400">
          I&apos;m a full stack developer, I enjoy crafting useful web
          applications and I&apos;m an open source enthusiast.
        </p>
      </div>
      <div className="mt-9 flex flex-col gap-3 lg:flex-row">
        <a
          id="download-resume"
          href="/files/resume-riadh-laabidi.pdf"
          className="rounded-full border border-zinc-600 bg-zinc-600 px-12 py-[10px] font-normal uppercase text-white hover:bg-transparent hover:text-zinc-600  dark:border-zinc-300 dark:bg-zinc-300 dark:text-black dark:hover:text-zinc-300"
          download
        >
          Download resume
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-green-500 bg-green-500 px-12 py-[10px] text-center font-normal uppercase text-white hover:bg-transparent hover:text-green-500 dark:border-primary-green dark:bg-primary-green dark:text-black dark:hover:text-primary-green"
        >
          Contact me
        </Link>
      </div>
      <div className="mt-10 flex gap-4">
        <a
          href="https://github.com/riadhlaabidi"
          target="_blank"
          rel="noreferer noopener nofollow"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/riadhlaabidi/"
          target="_blank"
          rel="noreferer noopener nofollow"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://twitter.com/riadh__laabidi"
          target="_blank"
          rel="noreferer noopener nofollow"
        >
          <TwitterIcon />
        </a>
      </div>
    </section>
  );
}
