"use client";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import getProgress from "@/actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import CourseNavbar from "./_components/course-navbar";
import { useCallback, useEffect, useState } from "react";
import { GetCourseAndChapters } from "../../../../../utils/fetches/api.fetch";
import { Navbar } from "@/components";

const CourseLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { courseId } = params;


  const load = {
    courseId: courseId,
  };
  const [content, SetCourse] = useState({});
  const newsGot = useCallback(async () => {
    try {
      const newNews = await GetCourseAndChapters(load);
      SetCourse(newNews?.message);
    } catch (error: any) {
    }
  }, []);
  useEffect(() => {
    newsGot();
  }, []);
  

  if (!content) {
    return redirect("/");
  }

  const progressCount = 0;

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar course={content} progressCount={progressCount} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar course={content} progressCount={progressCount} />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default CourseLayout;
