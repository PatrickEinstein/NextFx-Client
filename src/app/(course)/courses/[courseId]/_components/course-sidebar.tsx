// import { auth } from "@clerk/nextjs";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
import { CourseSidebarItem } from "./course-sidebar-items";
// import CourseProgress from "@/components/course-progress";

interface CourseSidebarProps {
  course: any;
  progressCount: number;
}

export const CourseSidebar = ({
  course,
  progressCount,
}: CourseSidebarProps) => {

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
        {/* {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )} */}
      </div>
      <div className="flex flex-col w-full">
        {Object?.keys(course).length > 0 &&
          course?.chapters?.map((chapter: any) => (
            <CourseSidebarItem
              key={chapter._id}
              id={chapter._id}
              label={chapter.title}
              isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
              courseId={course.id}
              isLocked={false}
            />
          ))}
      </div>
    </div>
  );
};
