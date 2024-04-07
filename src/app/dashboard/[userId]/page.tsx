"use client";
import Banner from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const DashboardPage = () => {
  const router = useRouter();

  // Demo Courses Array
  const courses = [
    {
      id: "1",
      userId: "user1",
      title: "JavaScript Basics",
      description: "Learn the basics of JavaScript programming language.",
      imageUrl: "https://example.com/js.jpg",
      price: 29.99,
      isPublished: true,
      categoryId: "1",
      category: {
        id: "1",
        name: "Programming",
      },
      chapters: [
        {
          id: "1",
          title: "Introduction to JavaScript",
          description: "An overview of JavaScript language features.",
          videoUrl: "https://example.com/intro_video.mp4",
          position: 1,
          isPublished: true,
          isFree: true,
        },

        {
          id: "2",
          title: "Variables and Data Types",
          description: "Learn how to declare variables and use data types.",
          videoUrl: "https://example.com/intro_video.mp4",
          position: 1,
          isPublished: true,
          isFree: true,
        },
        // Other chapters for course 1
      ],
      attachments: [
        {
          id: "1",
          name: "Course Materials",
          url: "https://example.com/materials.pdf",
        },
        // Other attachments for course 1
      ],
      purchases: [
        {
          id: "1",
          userId: "user1",
        },
        // Other purchases for course 1
      ],
      createdAt: "2024-03-26T12:00:00Z",
      updatedAt: "2024-03-26T12:30:00Z",
    },
  ];

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
                  value={"Patrick"}
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
                value={"Doe"}
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
                  value={"1990-01-01"}
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
                value={"patrickeistein@gmail.com"}
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

          {courses.map((course, index: number) => (
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
                    {course?.title}
                  </h3>
                  <p className="text-gray-600">
                    category: {course?.category?.name}
                  </p>
                </div>

                <div className="flex items-end justify-end flex-col gap-2">
                  <button className="flex items-center justify-center bg-primary py-2 px-4 rounded-lg cursor-pointer text-white">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
