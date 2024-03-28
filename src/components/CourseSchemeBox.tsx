import Image from "next/image";
import React from "react";
import school_badge from "../../public/badge2.png";
import play from "../../public/play.svg";

type course = {
  title: string;
};

type props = {
  course: Array<course>;
  level: string;
};

const CourseSchemeBox = ({ course, level }: props) => {
  return (
    <div>
      <div className="flex flex-col">
        <Image src={school_badge} alt="school badge" className="h-[500px]" />
        <div className="flex flex-col">
          <h2>Course 1 of 11</h2>
          <h2>{level}</h2>
          <h2>
            Currency trading? Forex trading? FX trading? Totally clueless about
            forex? Here is an introduction to the foreign exchange market.
          </h2>
          <button>Start Course</button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <div>
          <h2>Your Progress</h2>
          <p>0 of 4 Lessons Completed</p>
          <div className="w-screen rounded-2xl bg-orange-600" />
        </div>
        <div>
          <hr />
          <h2>Course Outline</h2>
          {course.map(({ title }, index) => (
            <div key={index} className="flex flex-row gap-8">
              <Image src={play} alt="play" className="h-[50px]"/>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSchemeBox;
