import React from "react";
import school_badge from "../../../public/badge2.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex-col justify-center mx-auto my-auto w-screen">
      <Image src={school_badge} alt="school badge" className="h-[500px]" />
      <h2>School of Pipsology</h2>
      <h2>
        Welcome! Are you new to trading forex? The School of Pipsology is our
        free online course that helps beginners learn how to trade forex. If you
        have always wanted to learn to trade but have no idea where to begin,
        then this course is for you.
      </h2>
    </div>
  );
};

export default Intro;
