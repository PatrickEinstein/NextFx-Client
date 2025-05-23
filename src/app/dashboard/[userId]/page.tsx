"use client";
import Banner from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  GetChaptersByCourseID,
  GetUserById,
  FetchUserRegisteredCourses,
} from "../../../../utils/fetches/api.fetch";
import { useUserStore } from "@/store";

const DashboardPage = () => {
  const router = useRouter();
  const token = useUserStore((state) => state.token);
  const userId = useUserStore((state) => state.user);

  const [reisteredCourses, setRegisteredCourses] = useState([
    {
      description: "Test",
      courseTitle: "Test",
      _id: "",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    DateOfBirth: "",
    email: "",
  });

  const Courses = useCallback(async () => {
    const regs = await FetchUserRegisteredCourses(token, userId);
    const currentUser = await GetUserById(token, userId);
    setCurrentUser(currentUser.message);
    setRegisteredCourses(regs.courses);
  }, [token, currentUser]);

  const viewCourse = useCallback(async (courseId: string) => {
    const load = {
      courseId: courseId,
      token,
    };
    const actualCourse = await GetChaptersByCourseID(load);

    // console.log({actualCourse})
    router.push(
      `/courses/${actualCourse.message.id}/chapters/${actualCourse.message.chapters[0]?._id}`
    );
  }, []);

  useEffect(() => {
    Courses();
  });

  return (
    <div className="px-5 w-full pb-9">
      {/* <Banner variant="success" label="See updated topics" /> */}
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col gap-3">
          {/*Header*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-bold text-gray-500">
                User Details
              </h4>
            </div>
            <Separator
              orientation="horizontal"
              className="w-full h-1 bg-gray-300"
            />
          </div>

          {/* User details */}

          <div className="w-full flex flex-col gap-4 items-start">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="firstname">Firstname</Label>
                <Input
                  id="firstname"
                  value={currentUser.firstName}
                  className="w-full"
                  name="firstname"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                id="lastname"
                value={currentUser.lastName}
                className="w-full"
                name="lastname"
                disabled={true}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <Label htmlFor="date">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  value={currentUser.DateOfBirth}
                  className="w-full"
                  name="dateOfBirth"
                  type="date"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={currentUser.email}
                className="w-full"
                name="email"
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          {/*Header*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-bold text-gray-500">Courses</h4>
            </div>
            <Separator
              orientation="horizontal"
              className="w-full h-1 bg-gray-300"
            />
          </div>

          {/* Courses */}

          {reisteredCourses?.map(
            ({ courseTitle, description, _id }, index: number) =>
              courseTitle != "Test" && (
                <div
                  className="w-full flex flex-row items-center gap-3"
                  key={index}
                >
                  <Separator
                    orientation="vertical"
                    className="h-full w-1 bg-primary"
                  />

                  <div
                    key={index}
                    className="w-full flex flex-row items-start justify-between gap-3 p-4 border border-gray-200 rounded-md"
                  >
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {courseTitle}
                      </h3>
                      <p className="text-gray-600">
                        {/* category: {course?.category?.name} */}
                      </p>
                    </div>

                    <div className="flex items-end justify-end flex-col gap-2">
                      <button
                        onClick={() => viewCourse(_id)}
                        className="flex items-center justify-center bg-primary py-2 px-4 rounded-lg cursor-pointer text-white"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
