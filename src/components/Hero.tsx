"use client";

import React from "react";
import Logo from "../../public/HeroPic.svg";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className=" bg-secondary justify-center align-middle py-[40px] lg:py-[90px] px-5 bg-heroImg">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex flex-col md:flex-row pt-10 justify-center">
          <div className="w-full lg:w-1/2 text-primary">
            <h3 className="font-bold text-5xl lg:text-7xl leading-[80px] pb-4 ">
              Are you Interested in Learning Forex?
            </h3>
            <h3 className="font-bold text-2xl pb-4 px-2 max-w-screen-md">
              Learn how to trade forex with our School of WebPips. It is the
              complete beginner&apos;s guide to forex trading.
            </h3>
            <button className="h-12 w-40 rounded-3xl bg-primary font-bold text-white">
              <Link href="/overview">Get Started</Link>
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={Logo} alt="Logo" className="h-[400px]" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between w-screen align-middle px-96 py-10">
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
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
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
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};
