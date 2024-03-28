import React from "react";
import { coursesList } from "../../../constants";
import CourseSchemeBox from "@/components/CourseSchemeBox";

const CoursesListOverview = () => {
  return (
    <div>
      {coursesList.map(({ courses, level }, index) => (
        <CourseSchemeBox course={courses} level={level} key={index} />
      ))}
    </div>
  );
};

export default CoursesListOverview;
