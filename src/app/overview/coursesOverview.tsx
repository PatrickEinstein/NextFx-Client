"use client";
import React, { useCallback, useEffect, useState } from "react";
import { coursesList } from "../../../constants";
import CourseSchemeBox from "@/components/CourseSchemeBox";

const CoursesListOverview = () => {
  return (
    <div className="w-full max-w-7xl px-5 md:px-0 mx-auto">
      {coursesList.map(({ courses, level }, index) => {
        return (
          <CourseSchemeBox
            course={courses}
            level={level}
            key={index}
            indexNum={index}
          />
        );
      })}
    </div>
  );
};

export default CoursesListOverview;
