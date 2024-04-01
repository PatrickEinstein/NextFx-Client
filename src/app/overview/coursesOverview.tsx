"use client";
import React, { useCallback, useEffect, useState } from "react";
import { coursesList } from "../../../constants";
import CourseSchemeBox from "@/components/CourseSchemeBox";

const CoursesListOverview = () => {
  return (
    <div>
      {coursesList.map(({ courses, level }, index) => {
        return <CourseSchemeBox course={courses} level={level} key={index} indexNum={index} />;
      })}
    </div>
  );
};

export default CoursesListOverview;
