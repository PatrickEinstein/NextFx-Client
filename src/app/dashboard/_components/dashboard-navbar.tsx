// import NavbarRoutes from "@/components/navbar-routes";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import React from "react";
import DashboardMobileSidebar from "./dashboard-mobile-sidebar";

interface DashboardNavbarProps {
  navData: any;
}

const DashboardNavbar = ({ navData }: DashboardNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <DashboardMobileSidebar navData={navData} />
      {/* <NavbarRoutes /> */}
    </div>
  );
};

export default DashboardNavbar;
