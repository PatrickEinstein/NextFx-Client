"use client";

import { Separator } from "@/components/ui/separator";
import { TableComponent } from "./_components/TableComponent";
import { usePathname } from "next/navigation";

type categoriesType = {};

const CategoriesPage = () => {
  // The Api to call the forum categories based on the id params would be called here

  const categories = [
    {
      title: "About the General Category",
      description:
        "This forum is for general forex traders. If you have a question about forex trading, this is the place to ask it.",
      replies: 10,
      views: 20,
      activity: "2h",
      category: "General",
    },
    {
      title: "Announcements",
      replies: 10,
      views: 20,
      activity: "2h",
      category: "General",
    },
    {
      title: "Help",
      replies: 10,
      views: 20,
      activity: "2h",
      category: "General",
    },
    {
      title: "Feedback",
      replies: 10,
      views: 20,
      activity: "2h",
      category: "General",
    },
  ];

  return (
    <div className="w-full flex flex-col  px-5 lg:px-8">
      {/* Header Section
      <div className="w-full flex flex-col">
        <div className="grid grid-cols-4 gap-8 py-2">
          <h4 className="col-span-3 text-base font-bold text-gray-400">
            Topic
          </h4>
          <div className="col-span-1 grid grid-cols-3 gap-8">
            <span className="text-base font-bold text-gray-400">Replies</span>
            <span className="text-base font-bold text-gray-400">Views</span>
            <span className="text-base font-bold text-gray-400">Activity</span>
          </div>
        </div>
        <Separator
          orientation="horizontal"
          className="w-full h-[3px] bg-gray-300"
        />
      </div> */}

      {/*Categories Section*/}

      <TableComponent categories={categories} />
    </div>
  );
};

export default CategoriesPage;
