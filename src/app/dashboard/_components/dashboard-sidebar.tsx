// import { auth } from "@clerk/nextjs";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
import { DashboardSidebarItem } from "./dashboard-sidebar-items";
// import CourseProgress from "@/components/course-progress";

interface ForumSidebarProps {
  navData: any;
}

export const DashboardSidebar = ({ navData }: ForumSidebarProps) => {
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
        <h1 className="font-semibold">{"Dashboard"}</h1>
        {/* {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )} */}
      </div>
      <div className="flex flex-col w-full">
        {navData.length > 0 &&
          navData?.map((nav: any, index: number) => (
            <DashboardSidebarItem
              key={index}
              link={nav.link}
              label={nav.item}
            />
          ))}
      </div>
    </div>
  );
};
