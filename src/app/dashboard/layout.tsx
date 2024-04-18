import React from "react";
import DashboardNavbar from "./_components/dashboard-navbar";
import { DashboardSidebar } from "./_components/dashboard-sidebar";
import { Navbar } from "@/components";

const ForumPagesLayout = ({ children }: { children: React.ReactNode }) => {
  // Demo NavData Data

  const navData = [
    { item: "Home", link: "/dashboard" },
    // {
    //   item: "Courses",
    //   link: "/dashboard/courses",
    // },
  ];

  return (
    <div className="h-full">
      <div className="fixed inset-auto-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-[80px] md:pl-80 fixed inset-y-20 w-full z-50">
        <DashboardNavbar navData={navData} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-20 z-50">
        <DashboardSidebar navData={navData} />
      </div>
      <main className="md:pl-80 pt-[170px] h-full">{children}</main>
    </div>
  );
};

export default ForumPagesLayout;
