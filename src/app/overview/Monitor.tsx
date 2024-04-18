import Image from "next/image";
import React from "react";
import school_badge from "../../../public/dash2.png";

const Monitor = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-7xl px-5 lg:px-0 py-7">
      <Image src={school_badge} alt="school badge" className="" />
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-3xl font-bold mb-">
          0 <span className="font-normal">of</span> 2
        </h2>
        <span className="py-2 px-6 bg-gray-400 text-white rounded-[40px]">
          Lessons Completed
        </span>
      </div>
      <h2 className="text-3xl font-bold my-6">Your Personal Progress</h2>
      <h3 className="text-base">
        One day or day one? You decide. Remember that the best way to get
        something done... is to begin.
      </h3>
    </div>
  );
};

export default Monitor;
