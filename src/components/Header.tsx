'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  // { name: 'Apply', path: '/apply' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          DIT<span className="text-gray-600"> | Dovepeak Institute</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-base transition duration-300 ${
                pathname === link.path
                  ? 'text-blue-700 font-semibold'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/courses"
            className="ml-4 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-sm shadow"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-6 animate-slideDown">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base ${
                  pathname === link.path
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/courses"
              onClick={toggleMenu}
              className="mt-2 text-center px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-sm shadow"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
