'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  function closeMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header bg-bg-dark text-fg-dark">
      <nav>
        <ul className={`bg-bg-dark${isMenuOpen ? ' menu-open' : ''}`}>
          <li>
            <Link
              className={`hover:bg-blue hover:text-bg-dark${path === '/' ? ' bg-blue text-bg-dark' : ''}`}
              id="logo"
              onClick={closeMenu}
              href="/"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93333 0C11.0889 0 12.8667 0.268907 14.2667 0.806722C15.6667 1.32213 16.7111 2.11765 17.4 3.19328C18.0889 4.2465 18.4333 5.57983 18.4333 7.19328C18.4333 8.29132 18.2222 9.2549 17.8 10.084C17.4 10.8908 16.8556 11.5854 16.1667 12.1681C15.5 12.7283 14.7778 13.1877 14 13.5462L21 24H15.4L9.73333 14.7899H7.03333V10.6555H8.66667C10.3333 10.6555 11.5222 10.3753 12.2333 9.81513C12.9667 9.2549 13.3333 8.42577 13.3333 7.32773C13.3333 6.56583 13.1556 5.96078 12.8 5.51261C12.4667 5.04202 11.9444 4.70588 11.2333 4.5042C10.5444 4.28011 9.65556 4.16807 8.56667 4.16807H7.03333L2 0H8.93333Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <button id="toggle-menu-btn" onClick={toggleMenu}>
              <svg
                id="open"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                id="close"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li>
            <Link
              className={`hover:bg-blue hover:text-bg-dark${path === '/projects' ? ' bg-blue text-bg-dark' : ''}`}
              onClick={closeMenu}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`hover:bg-blue hover:text-bg-dark${path === '/blog' ? ' bg-blue text-bg-dark' : ''}`}
              onClick={closeMenu}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`hover:bg-blue hover:text-bg-dark${path === '/contact' ? ' bg-blue text-bg-dark' : ''}`}
              onClick={closeMenu}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
