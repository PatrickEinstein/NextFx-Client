// import { auth } from "@clerk/nextjs";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
import { ForumSidebarItem } from "./forum-sidebar-items";
// import CourseProgress from "@/components/course-progress";

interface ForumSidebarProps {
  categories: any;
}

export const ForumSidebar = ({ categories }: ForumSidebarProps) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const purchase = await db.purchase.findUnique({
  //   where: {
  //     userId_courseId: {
  //       userId,
  //       courseId: course.id,
  //     },
  //   },
  // });

  // console.log(`Course-in-sidebar---->`,course)

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{"Categories"}</h1>
        {/* {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )} */}
      </div>
      <div className="flex flex-col w-full">
        {categories.length > 0 &&
          categories?.map((chapter: any) => (
            <ForumSidebarItem
              key={chapter._id}
              id={chapter._id}
              label={chapter.title}
            />
          ))}
      </div>
    </div>
  );
};
