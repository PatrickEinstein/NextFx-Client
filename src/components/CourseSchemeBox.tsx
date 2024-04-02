import Image from "next/image";
import React, { useState } from "react";
import school_badge from "../../public/badge2.png";
import play from "../../public/play.svg";
import { Separator } from "./ui/separator";

type course = {
  title: string;
};

type props = {
  course: Array<course>;
  level: string;
  indexNum?: number;
};

const CourseSchemeBox = ({ course, level, indexNum }: props) => {
  return (
    <div className="max-w-3xl mx-auto py-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={school_badge} alt="school badge" className="h-[300px]" />
        <div className="flex flex-col gap-3 items-start">
          <p className="text-sm font-normal">
            Course {Number(indexNum) + Number(1)} of 11
          </p>
          <h2 className="text-2xl font-bold">{level}</h2>
          <span className="text-base">
            Currency trading? Forex trading? FX trading? Totally clueless about
            forex? Here is an introduction to the foreign exchange market.
          </span>
          <button className="py-2 px-4 bg-secondary text-primary font-semibold rounded-[40px]">
            Start Course
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-start py-6 w-full">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-bold">Your Progress</h2>
          <p>0 of 4 Lessons Completed</p>
          <div className="rounded-2xl bg-gray-200 h-2 md:max-w-[60%]" />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">Course Outline</h2>
          {course.map(({ title }, index) => (
            <div key={index} className="flex flex-row gap-4">
              <div className="flex items-center justify-center flex-col">
                <Image src={play} alt="play" className="h-[30px] w-[30px]" />
                {course.length - 1 !== index && (
                  <Separator
                    orientation="vertical"
                    className="h-5 w-[2px] bg-gray-500"
                  />
                )}
              </div>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSchemeBox;
