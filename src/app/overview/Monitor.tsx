import Image from "next/image";
import React from "react";
import school_badge from "../../../public/dash2.png";

const Monitor = () => {
  return (
    <div className="flex-col justify-center mx-auto my-auto w-screen">
      <Image src={school_badge} alt="school badge" className="h-[500px] w-[500px]" />
      <h2>0 of 361 Lessons Completed</h2>
      <h2>Your Personal Progress</h2>
      <h3>
        One day or day one? You decide. Remember that the best way to get
        something done... is to begin.
      </h3>
    </div>
  );
};

export default Monitor;
