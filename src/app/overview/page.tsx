import React from "react";
import Intro from "./Intro";
import Monitor from "./Monitor";
import CoursesListOverview from "./coursesOverview";

const Overview = () => {
  return (
    <div>
      <Intro />
      <Monitor />
      <CoursesListOverview />
    </div>
  );
};

export default Overview;
