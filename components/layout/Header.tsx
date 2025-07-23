import React, { useState } from "react";
import Image from "next/image";
import { AuthButtons } from "../common/Button";
import Search from "../common/Search";
import Link from "next/link";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top teal banner */}
      <div className="w-full bg-teal-500 h-7 flex items-center justify-center">
        <p className="text-xs text-white text-center px-2">
          Overseas trip? Get the latest information on travel guides
        </p>
      </div>

      {/* Main header content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/Logos/alxlogo.png"
              alt="Logo"
              width={120}
              height={60}
              className="h-8 md:h-5  w-auto sm:h-4"
            />
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
            <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2 w-full h-14">
              <div className="px-3 hover:bg-gray-100 rounded-full cursor-pointer flex-1 min-w-0">
                <div className="text-sm text-gray-700 font-medium truncate">Location</div>
                <div className="text-xs text-gray-400 truncate">Search for destination</div>
              </div>
              <span className="text-gray-300 mx-1">|</span>

              <div className="px-3 hover:bg-gray-100 rounded-full cursor-pointer flex-1 min-w-0">
                <div className="text-sm text-gray-700 font-medium truncate">Check-in</div>
                <div className="text-xs text-gray-400 truncate">Add dates</div>
              </div>
              <span className="text-gray-300 mx-1">|</span>

              <div className="px-3 hover:bg-gray-100 rounded-full cursor-pointer flex-1 min-w-0">
                <div className="text-sm text-gray-700 font-medium truncate">Check-out</div>
                <div className="text-xs text-gray-400 truncate">Add dates</div>
              </div>
              <span className="text-gray-300 mx-1">|</span>

              <div className="px-3 hover:bg-gray-100 rounded-full cursor-pointer flex-1 min-w-0">
                <div className="text-sm text-gray-700 font-medium truncate">People</div>
                <div className="text-xs text-gray-400 truncate">Add guests</div>
              </div>
              
              <div className="ml-2">
                <Search />
              </div>
            </div>
          </div>

          {/* Mobile search button - shown only on mobile */}
          <div className="md:hidden mx-2 flex-1 flex justify-center">
            <Search mobile />
          </div>

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
          </div>

          {/* Mobile profile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-1 focus:outline-none"
              aria-label="Profile menu"
            >
              <Image
                src="/assets/icons/profile 2.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>


        {/* Mobile profile dropdown */}
        {isProfileOpen && (
          <div className="md:hidden absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;