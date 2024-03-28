"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "../../constants";
import Logo from "../../public/FX.jpeg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  // return (
  //   <nav className="bg-gray-800 p-4">
  //     <div className="max-w-7xl mx-auto px-4">
  //       <div className="flex justify-between items-center">
  //         <div className="hidden md:flex">
  //           <Image src={Logo} alt="logo" className="w-30 h-20 absolute top-0" />
  //         </div>
  //         <div className="md:hidden flex-shrink-0">
  //           <h3 className="text-white font-bold">LOGO</h3>
  //         </div>
  //         <div className="hidden md:flex md:items-center md:space-x-4">
  //           {/* These links will be hidden on mobile screens */}
  //           {NavLink.map(({ name, link }) => (
  //             <h4 className="font-bold text-white" key={link}>
  //               {name}
  //             </h4>
  //           ))}
  //         </div>
  //         {/* Hamburger menu for mobile screens */}
  //         <div className="md:hidden">
  //           <button className="text-gray-300 hover:text-white focus:outline-none">
  //             <svg
  //               className="h-6 w-6"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth="2"
  //                 d="M4 6h16M4 12h16M4 18h16"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //         <div className="hidden md:flex md:items-center md:space-x-2">
  //           <h3 className="text-white">Sign In</h3>
  //           <button className="text-gray-300 hover:text-white focus:outline-none">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={1.5}
  //               stroke="currentColor"
  //               className="w-6 h-6"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Learn Forex</span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
            <span className="text-2xl font-bold tracking-tighter">
              Learn Forex
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex ">
          {NavLink.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-semibold leading-6 text-primary px-3 py-2 hover:bg-gray-200 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Learn Forex</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              <span className="text-xl font-bold tracking-tighter">
                Learn Forex
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NavLink.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
