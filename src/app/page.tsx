"use client";

import Footer from "@/components/NewFooter";
import {
  Navbar,
  Hero,
  AdminBlogs,
  NewsBlogsBox,
  ForumOverView,
  Calendar,
  New,
  CoursesOverview,
} from "../components";

export default function Home() {
  return (
    <div className="min-w-screen overflow-x-hidden font-monoSans">
      <Navbar />
      <Hero />
      <div className="flex w-full mt-10 gap-4 max-w-7xl mx-auto items-center justify-center">
        {/* <div className="w-full md:w-9/12"> */}
        <New />
        {/* <AdminBlogs /> */}
        {/* <NewsBlogsBox /> */}
        {/* </div> */}
        <div className="hidden md:flex md:font-bold md: text-black text-wrap w-3/12 overflow-hidden"></div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-0 pb-8">
        <ForumOverView />
        <Calendar />
      </div>
      <CoursesOverview />
      <Footer />
    </div>
  );
}
