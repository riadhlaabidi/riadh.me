import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./components/SocialIcon";

export default function Home() {
  return (
    <section className="flex flex-col items-center mt-4 w-full mx-auto p-0 ">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-full"
          src="/images/me.png"
          alt="riadh's photo"
          quality={100}
          width={110}
          height={110}
        />
        <h1 className="text-4xl leading-snug mt-8 md:text-6xl lg:text-large text-center ">
          Hello, I&apos;m <br />
          Riadh Laabidi
        </h1>
        <p className="text-base md:text-lg max-w-3xl mt-6 text-center text-secondary-gray">
          I&apos;m a fullstack developer, currently working on some interesting
          projects. I use Spring boot & Angular on a daily basis, and I&apos;m
          an open source enthusiast.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-14 gap-3">
        <Link
          href="/resume-riadh-laabidi.pdf"
          className="px-12 py-[10px] font-normal uppercase rounded-full bg-zinc-300 text-black border border-zinc-300 hover:bg-transparent hover:text-zinc-300"
        >
          Download resume
        </Link>
        <Link
          href="/contact"
          className="px-12 py-[10px] text-center text-black font-normal rounded-full uppercase bg-primary-green border border-primary-green   hover:text-primary-green hover:bg-transparent"
        >
          Contact me
        </Link>
      </div>
      <div className="flex gap-4 mt-10">
        <SocialIcon href="https://github.com/riadhlaabidi" name="github" />
        <SocialIcon
          href="https://www.linkedin.com/in/riadhlaabidi/"
          name="linkedin"
        />
        <SocialIcon href="https://twitter.com/riadh__laabidi" name="twitter" />
      </div>
    </section>
  );
}
