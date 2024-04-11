"use client";
import React, { useCallback, useEffect, useState } from "react";
import { coursesList } from "../../../constants";
import CourseSchemeBox from "@/components/CourseSchemeBox";
import {
  GetChapter,
  GetChaptersByCourseID,
  GetCourses,
} from "../../../utils/fetches/api.fetch";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

const CoursesListOverview = () => {
  const router = useRouter();
  const token = useUserStore((state) => state.token);

  const loadConfig = {
    page: 1,
    pageSize: 10,
    token,
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
          token,
        };
        const chapters = await GetChaptersByCourseID(chapterLoad);

        // const jsonMessage = await JSON.parse(chapters.message);

        if (chapters?.message === "Unauthorized") {
          // alert("Unauthorized");
          router.push("/login");
          return;
        }
        setFullCourse((prevState) => [...prevState, chapters.message]);
      }
    } catch (error) {
      console.error("Error finding courses:", error);
      alert(error);
    }
  }, []);

  useEffect(() => {
    FindAvailableCourses();
  }, []);

  return (
    <div className="w-full max-w-7xl px-5 md:px-0 mx-auto">
      {fullCourse.map(({ chapters, title, description }, index) => {
        // const validId = chapters[Number(index)]?.courseId;
        // console.log(`defineds`,validId)
        return (
          title !== "test" && (
            <CourseSchemeBox
              description={description}
              course={chapters}
              level={title}
              total={total}
              // total={totalnew}
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
