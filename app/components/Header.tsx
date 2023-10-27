import Link from "next/link";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
  { path: "/blog", name: "Blog" },
];

export function NavLink() {
  return <Link href={"/"}>Home</Link>;
}

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-lg bg-transparent">
      <div className="flex justify-end w-4/5 m-auto">
        <nav className="z-50">
          <ul className="flex gap-6 px-10 py-8 rounded-full">
            {navItems.map((item, index) => (
              <li key={item.name + index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t-[1px] border-zinc-700 w-full m-auto"></div>
    </header>
  );
}
