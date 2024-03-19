"use client";

import { NavLink } from "../../constants";
import Logo from "../../public/FX.jpeg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex">
            <Image src={Logo} alt="logo" className="w-30 h-20 absolute top-0" />
          </div>
          <div className="md:hidden flex-shrink-0">
            <h3 className="text-white font-bold">LOGO</h3>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* These links will be hidden on mobile screens */}
            {NavLink.map(({ name, link }) => (
              <h4 className="font-bold text-white" key={link}>
                {name}
              </h4>
            ))}
          </div>
          {/* Hamburger menu for mobile screens */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-2">
            <h3 className="text-white">Sign In</h3>
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
