import { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Riadh Laabidi's Blog",
  openGraph: {
    title: "Blog | Riadh Laabidi",
    description: "Checkout latest blog posts published by Riadh Laabidi",
  },
};

export default function Blog() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="border rounded-lg mt-20 p-16 border-zinc-700">
        <p className="font-extralight text-xl text-zinc-500">
          Content will be added soon!
        </p>
      </div>
    </section>
  );
}
