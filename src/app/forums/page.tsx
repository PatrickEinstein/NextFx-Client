"use client";

import Banner from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import React from "react";

const TestPage = () => {
  // should be obtained from an API

  const router = useRouter();

  const categories = [
    {
      _id: 1,
      title: "General",
      description: "Open discussion on various topics.",
      bullet_points: [
        "No specific theme or focus.",
        "Encourages diverse discussions.",
      ],
      per_week: 100,
      new: 20,
    },
    {
      _id: 2,
      title: "Announcements",
      description: "Official announcements and updates.",
      bullet_points: [
        "Important information for all users.",
        "Highlights new features and changes.",
      ],
      per_week: 50,
      new: 10,
    },
    {
      _id: 3,
      title: "Feedback",
      description: "Provide feedback and suggestions.",
      bullet_points: [
        "Helps improve the platform.",
        "Your opinions matter to us.",
      ],
      per_week: 30,
      new: 5,
    },
    {
      _id: 4,
      title: "Help",
      description: "Get assistance and support.",
      bullet_points: [
        "Community-driven support.",
        "Share knowledge and solutions.",
      ],
      per_week: 40,
      new: 8,
    },
    {
      _id: 5,
      title: "Off-Topic",
      description: "Discussion unrelated to main topics.",
      bullet_points: ["Relaxed and informal.", "Explore diverse interests."],
      per_week: 20,
      new: 3,
    },
    {
      _id: 6,
      title: "Coding",
      description: "Discussion related to coding and programming.",
      bullet_points: [
        "Share code snippets and tips.",
        "Discuss programming languages and techniques.",
      ],
      per_week: 60,
      new: 12,
    },
    {
      _id: 7,
      title: "Design",
      description: "Discussion related to design principles and practices.",
      bullet_points: [
        "UI/UX design discussions.",
        "Graphic design trends and techniques.",
      ],
      per_week: 25,
      new: 4,
    },
    {
      _id: 8,
      title: "Marketing",
      description: "Discussion related to marketing strategies and tactics.",
      bullet_points: [
        "Digital marketing trends.",
        "SEO, social media, and content marketing.",
      ],
      per_week: 100,
      new: 20,
    },
    {
      _id: 9,
      title: "Business",
      description:
        "Discussion related to business management and entrepreneurship.",
      bullet_points: [
        "Startup advice and resources.",
        "Business growth strategies.",
      ],
      per_week: 100,
      new: 20,
    },
    {
      _id: 10,
      title: "Development",
      description:
        "Discussion related to software development processes and methodologies.",
      bullet_points: [
        "Agile, waterfall, and other methodologies.",
        "Version control, testing, and deployment.",
      ],
      per_week: 100,
      new: 20,
    },
    {
      _id: 11,
      title: "Product Management",
      description: "Discussion related to product planning and development.",
      bullet_points: [
        "Product roadmap and strategy.",
        "User feedback and prioritization.",
      ],
      per_week: 100,
      new: 20,
    },
    {
      _id: 12,
      title: "Sales",
      description: "Discussion related to sales strategies and techniques.",
      bullet_points: [
        "Sales prospecting and lead generation.",
        "Negotiation tactics and closing deals.",
      ],
      per_week: 100,
      new: 20,
    },
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
      title: "General",
      announcement_category: "General",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Announcements",
      announcement_category: "Announcements",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Feedback",
      announcement_category: "Feedback",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Help",
      announcement_category: "Help",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Off-Topic",
      announcement_category: "Off-Topic",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Coding",
      announcement_category: "Coding",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Design",
      announcement_category: "Design",
      comment: 40,
      duration: "50h",
    },
    {
      title: "General",
      announcement_category: "General",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Announcements",
      announcement_category: "Announcements",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Feedback",
      announcement_category: "Feedback",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Help",
      announcement_category: "Help",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Off-Topic",
      announcement_category: "Off-Topic",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Coding",
      announcement_category: "Coding",
      comment: 40,
      duration: "50h",
    },
    {
      title: "General",
      announcement_category: "General",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Announcements",
      announcement_category: "Announcements",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Feedback",
      announcement_category: "Feedback",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Help",
      announcement_category: "Help",
      comment: 40,
      duration: "50h",
    },
    {
      title: "Off-Topic",
      announcement_category: "Off-Topic",
      comment: 40,
      duration: "50h",
    },
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
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col gap-3">
          {/*Header*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-bold text-gray-500">Category</h4>
              <span className="text-base font-bold text-gray-500">Topics</span>
            </div>
            <Separator
              orientation="horizontal"
              className="w-full h-1 bg-gray-300"
            />
          </div>

          {/*Categories*/}
          {categories.map((category, index) => (
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
                        `/forums/c/${category.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`
                      );
                    }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                  <ul className="list-disc pl-5">
                    {category.bullet_points.map((point, index) => (
                      <li key={index} className="text-gray-600">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-end flex-col gap-2">
                  <p className="text-sm text-gray-400">
                    <span className="text-base font-bold font-monoSans text-primary">
                      {category?.per_week}
                    </span>{" "}
                    / week
                  </p>

                  <span className="text-[12px] text-gray-400">
                    {category?.new} new
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
