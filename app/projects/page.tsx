import { Metadata } from "next";
import Header from "../components/Header";

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
      <h1 className="text-4xl">Projects</h1>
      <div className="border rounded-lg mt-20 p-16 border-zinc-700">
        <p className="font-extralight text-xl text-zinc-500">
          Content will be added soon!
        </p>
      </div>
    </section>
  );
}
