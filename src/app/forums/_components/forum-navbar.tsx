// import NavbarRoutes from "@/components/navbar-routes";
// import { Chapter, Course, UserProgress } from "@prisma/client";
import React from "react";
import ForumMobileSidebar from "./forum-mobile-sidebar";

interface ForumNavbarProps {
  categories: any;
}

const ForumNavbar = ({ categories }: ForumNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <ForumMobileSidebar categories={categories} />
      {/* <NavbarRoutes /> */}
    </div>
  );
};

export default ForumNavbar;
