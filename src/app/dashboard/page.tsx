"use client";

import { useUserStore } from "@/store";
// import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const DashboardIdPage = ({}) => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return redirect("/login");
  }

  return redirect(`/dashboard/${user}`);
};

export default DashboardIdPage;
