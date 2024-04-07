import React from "react";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardSidebar } from "./dashboard-sidebar";

interface DashboardMobileSidebarProps {
  navData: any;
}

const DashboardMobileSidebar = ({ navData }: DashboardMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <DashboardSidebar navData={navData} />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileSidebar;
