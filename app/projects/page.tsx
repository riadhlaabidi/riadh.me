import { Metadata } from "next";
import Header from "../components/Header";
import Card from "../components/Card";
import Divider from "../components/Divider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Riadh Laabidi's projects showcase page",
  openGraph: {
    title: "Projects | Riadh Laabidi",
    description: "Checkout a list of projects made by Riadh Laabidi",
  },
};

export default function Projects() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 mb-16  text-zinc-400">
        Some of the projects I&apos;m working on.
      </p>
      <Divider />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <Link href={"/project"}>
            <h2 className="text-2xl font-bold">riadh.me</h2>
            <p className="mt-6 text-zinc-400 group-hover:text-zinc-100">
              This portfolio website.
            </p>
          </Link>
        </Card>
      </div>
    </section>
  );
}
