import Image from "next/image";
import React, { useState } from "react";
import school_badge from "../../public/badge2.png";
import play from "../../public/play.svg";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { FetchUserRegisteredCourses } from "../../utils/fetches/api.fetch";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

type course = {
  title: string;
  courseId: string;
  _id: string;
};

type props = {
  course: Array<course>;
  level: string;
  indexNum?: number;
  description: string;
  total: Number;
  id: string;
};

const CourseSchemeBox = ({
  course,
  level,
  description,
  indexNum = 1,
  total,
  id,
}: props) => {
  const router = useRouter();
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);

  // const id = course[Number(indexNum)]?.courseId
  // console.log({ cid:id , indexNum, course });

  const onViewCourseOrPayFirst = async () => {
    console.log({ token, user });

    if (!user || !token) {
      router.push("/login");
    }

    const findIfRegistered = await FetchUserRegisteredCourses(token, user);
    const check = findIfRegistered.courses.find(
      (object: any) => object._id == id
      // (object: any) => object._id == course[Number(indexNum)]?.courseId
    );
    console.log({ check });
    if (check) {
      router.push(`/courses/${id}/chapters/${course[Number(indexNum)]?._id}`);
      // `/courses/${course[Number(indexNum)]?.courseId}/chapters/${
      //   course[Number(indexNum)]?._id
      // }`
    } else {
      // console.log({ cid: course[Number(indexNum)] });
      router.push(`/enroll/${id}`);
      // router.push(`/enroll/${course[Number(indexNum)]?.courseId}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={school_badge} alt="school badge" className="h-[400px]" />
        <div className="flex flex-col gap-3 items-start">
          <p className="text-sm font-normal">
            Course {Number(indexNum) + Number(0)} of {Number(total)}
          </p>
          <h2 className="text-2xl font-bold">{level}</h2>
          <span className="text-base">{description}</span>
          <button
            className="py-2 px-4 bg-secondary text-primary font-semibold rounded-[40px]"
            onClick={onViewCourseOrPayFirst}
          >
            Start Course
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-start py-6 w-full">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-bold">Your Progress</h2>
          <p>0 of 4 Lessons Completed</p>
          <div className="rounded-2xl bg-gray-200 h-2 md:max-w-[60%]" />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">Course Outline</h2>
          {course?.map(({ title, courseId, _id }, index) => (
            <div key={index} className="flex flex-row gap-4">
              <div className="flex items-center justify-center flex-col">
                {/* <Link href={`/courses/${courseId}/chapters/${_id}`}> */}
                <Image
                  src={play}
                  alt="play"
                  className="h-[30px] w-[30px] cursor-pointer"
                  onClick={async () => {
                    const findIfRegistered = await FetchUserRegisteredCourses(
                      token,
                      user
                    );
                    const check = findIfRegistered.courses.find(
                      (object: any) => object._id == id
                      // (object: any) => object._id == course[Number(indexNum)]?.courseId
                    );
                    if (check) {
                      router.push(
                        `/courses/${id}/chapters/${
                          course[Number(indexNum)]?._id
                        }`
                      );
                      // `/courses/${course[Number(indexNum)]?.courseId}/chapters/${
                      //   course[Number(indexNum)]?._id
                      // }`
                    } else {
                      // console.log({ cid: course[Number(indexNum)] });
                      router.push(`/enroll/${id}`);
                      // router.push(`/enroll/${course[Number(indexNum)]?.courseId}`);
                    }
                  }}
                />
                {/* </Link> */}
                {course.length - 1 !== index && (
                  <Separator
                    orientation="vertical"
                    className="h-5 w-[2px] bg-gray-500"
                  />
                )}
              </div>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSchemeBox;
