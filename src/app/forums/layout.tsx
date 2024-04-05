import React from "react";
import ForumNavbar from "./_components/forum-navbar";
import { ForumSidebar } from "./_components/forum-sidebar";
import { Navbar } from "@/components";

const ForumPagesLayout = ({ children }: { children: React.ReactNode }) => {
  // Demo Categories Data
  // Patrick it could be an array of objects if you want but you would have to edit the ForumSidebar component (and any other components that is accepting categories as a prop) to handle that
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

  return (
    <div className="h-full">
      <div className="fixed inset-auto-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-[80px] md:pl-80 fixed inset-y-20 w-full z-50">
        <ForumNavbar categories={categories} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-20 z-50">
        <ForumSidebar categories={categories} />
      </div>
      <main className="md:pl-80 pt-[170px] h-full">{children}</main>
    </div>
  );
};

export default ForumPagesLayout;
