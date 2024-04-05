"use client";
import React, { useCallback, useEffect, useState } from "react";
import { coursesList } from "../../../constants";
import CourseSchemeBox from "@/components/CourseSchemeBox";
import {
  GetChapter,
  GetChaptersByCourseID,
  GetCourses,
} from "../../../utils/fetches/api.fetch";

const CoursesListOverview = () => {
  const loadConfig = {
    page: 1,
    pageSize: 10,
  };

  const [fullCourse, setFullCourse] = useState([
    {
      title: "test",
      description: "test",
      id: "",
      chapters: [],
    },
  ]);
  const total = fullCourse.length;

  const FindAvailableCourses = useCallback(async () => {
    try {
      const foundCourses = await GetCourses(loadConfig);
      for (let course of foundCourses.message) {
        const chapterLoad = {
          courseId: course._id,
        };
        const chapters = await GetChaptersByCourseID(chapterLoad);
        setFullCourse((prevState) => [...prevState, chapters.message]);
      }
    } catch (error) {
      console.error("Error finding courses:", error);
    }
  }, []);

  useEffect(() => {
    FindAvailableCourses();
  }, []);

  // console.log(`fullCourse==>`, fullCourse);

  return (
    <div className="w-full max-w-7xl px-5 md:px-0 mx-auto">
      {fullCourse.map(({ chapters, title, description }, index) => {
        return (
          title !== "test" && (
            <CourseSchemeBox
              description={description}
              course={chapters}
              level={title}
              total={total}
              key={index}
              indexNum={index}
            />
          )
        );
      })}
    </div>
  );
};

export default CoursesListOverview;
