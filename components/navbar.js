'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imagePath = "/logo.png";
const trimmedPath = imagePath.trimEnd();


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  
  // Close dropdown when clicking outside
  const closeDropdowns = () => {
    setIsProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-20 bg-[#E8CDF9] p-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              priority
              src = {trimmedPath}
              alt="Dashford Logo"
              width={100}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <div className="hidden space-x-8 lg:flex">
          <Link href="/dashboard" className="text-gray-700 hover:text-purple-800">
            Dashboard
          </Link>
          <Link href="/analytics" className="text-gray-700 hover:text-purple-800">
            Analytics
          </Link>
          <Link href="/reports" className="text-gray-700 hover:text-purple-800">
            Reports
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative ml-3 hidden lg:block">
          <button
            type="button"
            className="flex items-center rounded-full px-3 py-1 text-gray-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={toggleProfile}
            aria-expanded={isProfileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="ml-2">Profile</span>
          </button>

          {/* Profile dropdown menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </Link>
              <Link href="/signout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Sign out
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/dashboard" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-100">
              Dashboard
            </Link>
            <Link href="/analytics" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-100">
              Analytics
            </Link>
            <Link href="/reports" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-100">
              Reports
            </Link>
            <Link href="/settings" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-100">
              Settings
            </Link>
            <Link href="/signout" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-100">
              Sign out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;