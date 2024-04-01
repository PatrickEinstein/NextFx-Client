import React from "react";
import school_badge from "../../../public/badge2.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-7xl px-5 lg:px-0 py-7">
      <Image src={school_badge} alt="school badge" className="lg:h-[500px]" />
      <h2 className="text-3xl font-bold mb-4">School of Pipsology</h2>
      <span className="w-full text-base lg:max-w-3xl text-center">
        Welcome! Are you new to trading forex? The School of Pipsology is our
        free online course that helps beginners learn how to trade forex. If you
        have always wanted to learn to trade but have no idea where to begin,
        then this course is for you.
      </span>
    </div>
  );
};

export default Intro;
