"use client";
import Banner from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import React, { useCallback, useEffect, useState } from "react";
import { Threads } from "../../../utils/fetches/api.fetch";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

const TestPage = () => {
  const token = useUserStore((state) => state.token);

  const [forum, SetForum] = useState([
    {
      forum: {
        _id: "",
        title: "",
        description: "",
      },
      repliesNumber: "",
    },
  ]);
  let load = {
    page: 1,
    pageSize: 10,
    token,
  };
  const ForumGot = useCallback(async () => {
    const newForum = await Threads(load);
    // console.log(`ForunForums==>`, newForum.message);
    if (newForum.message === "Failed to fetch") {
      return;
    }
    SetForum(newForum.message);
  }, []);

  useEffect(() => {
    ForumGot();
  }, []);

  const router = useRouter();

  const categories = [
    {
      _id: 13,
      title: "Customer Support",
      description: "Discussion related to customer service and support.",
      bullet_points: [
        "Effective communication with customers.",
        "Problem-solving and conflict resolution.",
      ],
      per_week: 100,
      new: 20,
    },
  ];

  const news = [
    {
      title: "Coding",
      announcement_category: "Coding",
      comment: 40,
      duration: "50h",
    },
  ];

  return (
    <div className="px-5 w-full pb-9">
      {/* <Banner variant="success" label="See updated topics" /> */}
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full flex flex-col gap-3">
          {forum.map((category, index) => (
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
                  <h3
                    className="text-xl font-semibold text-primary cursor-pointer"
                    onClick={() => {
                      router.push(
                        `/forums/c/${category.forum.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`
                      );
                    }}
                  >
                    {category.forum.title}
                  </h3>
                  <p className="text-gray-600">{category.forum.description}</p>
                  <ul className="list-disc pl-5"></ul>
                </div>

                <div className="flex items-end flex-col gap-2">
                  <p className="text-sm text-gray-400">
                    <span className="text-base font-bold font-monoSans text-primary">
                      {category?.repliesNumber}
                    </span>{" "}
                    / week
                  </p>

                  <span className="text-[12px] text-gray-400">
                    {/* {category?.new} new */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-3">
          {/*Header*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-bold text-gray-500">Latest</h4>
            </div>
            <Separator
              orientation="horizontal"
              className="w-full h-1 bg-gray-300"
            />
          </div>

          {/*News*/}
          {news.map((news_list, index) => (
            <div
              className="w-full flex flex-row items-center gap-3"
              key={index}
            >
              <Separator
                orientation="vertical"
                className="h-full w-1 bg-secondary"
              />

              <div
                key={index}
                className="w-full flex flex-row items-start justify-between gap-3 p-4 border border-gray-200 rounded-md"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {news_list?.title}
                  </h3>
                  <p className="text-gray-600">
                    category: {news_list?.announcement_category}
                  </p>
                </div>

                <div className="flex items-end flex-col gap-2">
                  <p className="text-sm text-gray-400">
                    <span className="text-base font-bold font-monoSans text-primary">
                      {news_list?.comment}
                    </span>
                  </p>

                  <span className="text-[12px] text-gray-400">
                    {news_list?.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
