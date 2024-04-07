"use client";

// import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const DashboardIdPage = ({}) => {
  const user = sessionStorage.getItem("user");
  if (!user) {
    return redirect("/login");
  }

  return redirect(`/dashboard/${user}`);
};

export default DashboardIdPage;
