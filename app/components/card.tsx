import Link from 'next/link';

export default function Card({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <article className="group flex flex-col p-6 hover:bg-highlight">
      <h2 className="text-yellow line-clamp-2">{title}</h2>
      <p className="group-hover:text-fg text-fg-dark line-clamp-2 mt-2 mb-auto">
        {description}
      </p>
      <Link className="font-medium mt-6" href={url}>
        Read more
      </Link>
    </article>
  );
}
