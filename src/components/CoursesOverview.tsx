"use client";
import { useCallback, useEffect, useState } from "react";
import { CoursesBox } from "./CoursesBox";
import { Courses } from "../../utils/fetches/api.fetch";

export const CoursesOverview = () => {
  const [forexCourses, SetCourses] = useState([]);
  const coursesTodisplay = forexCourses?.slice(0, 4);
  const load = {
    page: 1,
    pageSize: 10,
  };
  const newsGot = useCallback(async () => {
    const newNews = await Courses(load);
    console.log(`news==>`, newNews);
    SetCourses(newNews?.message);
  }, []);

  useEffect(() => {
    newsGot();
  }, []);

  return (
    <div className="w-full py-10 px-4 md:px-0">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">
        {/*Header Section*/}
        <div className="w-full flex flex-col lg:flex-row md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-4xl font-bold font-secularOne text-primary">
              Popular and trending courses
            </h2>
            <p className="text-lg text-gray-500">
              Learn from the best in the industry
            </p>
          </div>

          <button
            className="bg-primary text-white rounded-[30px] py-3 px-4"
            type="button"
          >
            All Courses
          </button>
        </div>

        {/*Courses Section*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {coursesTodisplay.map(
            (
              { _id, title, description, link, script, createdAt, updatedAt },
              index
            ) => (
              <div key={index}>
                <CoursesBox
                  name={title}
                  description={description}
                  video={link}
                  script={script}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  // price={course.price}
                  // duration={course.duration}
                  // students={course.students}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
