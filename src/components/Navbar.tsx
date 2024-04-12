"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "../../constants";
import Logo from "../../public/FX.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserDropDownMenuContent } from "./UserDropDownMenuContent";
import { UserAvatar } from "./UserAvatar";
import { useUserStore } from "@/store";

export const Navbar = () => {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [user, setUser] = useState<string | null>(null);
  const user = useUserStore((state) => state.user);
  console.log(user);
  const isLoggedInUser = user === null ? false : true;

  // useEffect(() => {
  //   const user = sessionStorage.getItem("user");

  //   setUser(user);

  //   if (user !== null && (path === "/login" || path === "/register")) {
  //     // window.location.href = "/";
  //     // route
  //   }
  // }, []);

  return (
    <header className="bg-white w-full border-b border-b-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={cn(
              "-m-1.5 p-1.5",
              user === null ? "" : "hidden lg:inline"
            )}
          >
            <span className="sr-only">Learn Forex</span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
            <span className="text-2xl font-bold tracking-tighter">
              Learn Forex
            </span>
          </Link>

          {user !== null && <UserAvatar mobile />}
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
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "text-sm font-semibold leading-6 text-primary px-3 py-2 hover:bg-gray-200 rounded-lg",
                path === item.link && "bg-gray-200"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Visible section when user is not logged in */}

        {isLoggedInUser === false ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:flex-row lg:gap-1">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in
            </Link>{" "}
            |{" "}
            <Link
              href="/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Register
            </Link>
          </div>
        ) : (
          <UserAvatar />
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
          <div className="mt-6 flow-root relative z-50">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NavLink.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-200",
                      path === item.link && "bg-gray-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {user === null && (
                <div className="py-6 flex items-center flex-row gap-1">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>{" "}
                  |{" "}
                  <Link
                    href="/register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
