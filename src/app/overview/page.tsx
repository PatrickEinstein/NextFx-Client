import React from "react";
import Intro from "./Intro";
import Monitor from "./Monitor";
import CoursesListOverview from "./coursesOverview";
import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";

const Overview = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Monitor />
      <CoursesListOverview />
      <Footer />
    </div>
  );
};

export default Overview;
