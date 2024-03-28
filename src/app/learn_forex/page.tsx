"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Courses } from "../../../utils/fetches/api.fetch";
import glossary from "../../../public/glossary.png";
import test_yourself from "../../../public/test-yourself.png";
import school_badge from "../../../public/school-badge.png";
import Image from "next/image";


const Items = [
  {
    title: "HOW TO TRADE FOREX",
    desc: "The School of Pipsology is the most popular forex trading course on planet Earth. Maybe even on Mars. Our online course is made for beginners to help them learn how to trade the currency markets. Did we mention it’s totally free?",
    buttonLink: "overview",
    buttonName:"START",
    image: school_badge,
  },
  {
    title: "TRADING QUIZZES",
    desc: "Want to challenge yourself with some fun trading quizzes? Test your knowledge on a variety of market-related topics and learn some new facts along the way! Your brain will love these quizzes as much as your face loves selfies.",
    buttonLink: "test",
    buttonName:"TEST YOURSELF",
    image: test_yourself,
  },
  {
    title: "GLOSSARY",
    desc: "Forexpedia is the original online forex glossary made specifically for forex traders. Enhancing your trading vocabulary is crucial if you want to able to follow the financial markets. Not only can you use it as a reference, but it’ll help you sound really smart at parties.",
    buttonLink: "learn",
    buttonName:"LEARN",
    image: glossary,
  },
];




const NEWS = () => {
  return (
    <div className="w-full">
      {Items.map(({ title, desc, buttonLink, image,buttonName }, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row lg:gap-8 md:gap-20 px-3 lg:px-8 py-10"
        >
          <div className="h-1/2 w-90">
            <Image src={image} alt="Logo" className="h-[400px]" />
          </div>
          <div className="group relative py-10">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {desc}
            </p>
            <button className="h-20 w-60 rounded-3xl bg-orange-400 font-bold text-white mt-5">
              <h3 className="mt-auto mb-auto text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                <a href={buttonLink}>
                  <span className="absolute inset-0" />
                  {buttonName}
                </a>
              </h3>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NEWS;
