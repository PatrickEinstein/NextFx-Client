import React from "react";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ForumSidebar } from "./forum-sidebar";

interface ForumMobileSidebarProps {
  categories: any;
}

const ForumMobileSidebar = ({
  categories,
}: ForumMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <ForumSidebar categories={categories}  />
      </SheetContent>
    </Sheet>
  );
};

export default ForumMobileSidebar;
