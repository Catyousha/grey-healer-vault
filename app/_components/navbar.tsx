'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const links: NavLinkType[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Medicine',
      href: '/medicine',
    },
    {
      label: 'Lecture',
      href: '/lecture',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav className="navbar sticky top-0 bg-white z-50 h-[5vh] shadow-md shadow-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content z-[1] gap-2 w-52 bg-white shadow-lg">
            {links.map((e) => (
              <li key={e.label}>
                <Link
                  href={e.href}
                  className={clsx(
                    'py-2 px-3',
                    pathname === e.href ? 'active' : ''
                  )}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-xl font-bold font-mono">GreyHealerVault</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal z-[1] gap-6 bg-white">
          {links.map((e) => (
            <li key={e.label}>
              <Link
                href={e.href}
                className={clsx(
                  'py-2 px-3',
                  pathname === e.href ? 'active' : ''
                )}
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

type NavLinkType = {
  href: string;
  label: string;
};
