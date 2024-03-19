"use client";

import React from "react";
import Logo from "../../public/FX-nobg.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" bg-slate-900 justify-center align-middle">
      <div className="flex flex-col md:flex-row bg-slate-900 h-screen/2 pt-10 justify-center">
        <div className="h-80 w-96">
          <h3 className="text-white font-bold text-4xl pb-4 ">
            Are you Interested in Learning Forex?
          </h3>
          <h3 className="text-white font-bold text-2xl pb-4 px-2 max-w-screen-md">
            Learn how to trade forex with our School of WebPips. It is the
            complete beginner&apos;s guide to forex trading.
          </h3>
          <button className="h-12 w-40 rounded-3xl bg-yellow-300 font-bold ">
            Get Started
          </button>
        </div>
        <div className="h-80  w-screen/2 flex ">
          <Image
            src={Logo}
            alt="Logo"
            className="w-full max-h-screen/2 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between w-screen align-middle px-96 py-10">
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
      </div>
    </div>
  );
};
