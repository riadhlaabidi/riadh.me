"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Divider from "./Divider";

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
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header className="sticky top-0 ">
      <nav className="py-7 backdrop-blur-lg">
        <div className="mx-auto flex px-6 lg:w-4/5 lg:px-10 justify-between">
          {isCollapsed && (
            <div className="flex lg:flex-1">
              <Link href={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Riadh Laabidi</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1081 1.04574H27.6547C33.1776 1.04574 37.6547 5.52289 37.6547 11.0457V12.5267C37.6547 18.0496 33.1776 22.5267 27.6547 22.5267H20.1081V1.04574Z"
                    fill="white"
                  />
                  <path
                    d="M11.9546 1.04575H16.1069V46.9543H11.9546V1.04575Z"
                    fill="white"
                  />
                  <rect
                    x="10.3453"
                    y="1.04575"
                    width="0.668407"
                    height="45.9085"
                    fill="white"
                  />
                  <rect
                    x="18.5039"
                    y="1.04574"
                    width="0.668407"
                    height="45.9085"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.1082 41.9326V24.8102L37.6547 41.9326V46.9542H20.1081V41.9326L20.1082 41.9326Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          )}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsCollapsed(false)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                stroke={isCollapsed ? "#fff" : ""}
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex gap-6">
            {navItems.map((item, index) => (
              <li key={item.name + index}>
                <Link
                  className="font-normal hover:text-primary-green"
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {!isCollapsed && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-51"></div>
          <div className="fixed inset-y-0 right-0 z-51 w-full overflow-y-auto bg-zinc-850 backdrop-blur-xl px-6 py-7 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-2xl">
            <div className="flex items-center justify-between">
              <Link href={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Riadh Laabidi</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1081 1.04574H27.6547C33.1776 1.04574 37.6547 5.52289 37.6547 11.0457V12.5267C37.6547 18.0496 33.1776 22.5267 27.6547 22.5267H20.1081V1.04574Z"
                    fill="white"
                  />
                  <path
                    d="M11.9546 1.04575H16.1069V46.9543H11.9546V1.04575Z"
                    fill="white"
                  />
                  <rect
                    x="10.3453"
                    y="1.04575"
                    width="0.668407"
                    height="45.9085"
                    fill="white"
                  />
                  <rect
                    x="18.5039"
                    y="1.04574"
                    width="0.668407"
                    height="45.9085"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.1082 41.9326V24.8102L37.6547 41.9326V46.9542H20.1081V41.9326L20.1082 41.9326Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsCollapsed(true)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="stroke-white"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <ul className="mt-14 space-y-5">
                  {navItems.map((item, index) => (
                    <li
                      key={item.name + index}
                      onClick={() => setIsCollapsed(true)}
                    >
                      <Link
                        className="text-lg font-normal hover:text-primary-green"
                        href={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-px bg-zinc-700/40 w-full " />
    </header>
  );
}
