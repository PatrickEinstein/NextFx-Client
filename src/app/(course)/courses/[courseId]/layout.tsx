// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import getProgress from "@/actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import CourseNavbar from "./_components/course-navbar";

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  const course = {
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
      {
        id: "3",
        title: "Functions and Scope",
        description: "Learn how to define functions and understand scope.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "4",
        title: "Objects and Arrays",
        description: "Learn how to work with objects and arrays in JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "5",
        title: "Loops and Conditionals",
        description: "Learn how to use loops and conditionals in JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "6",
        title: "DOM Manipulation",
        description: "Learn how to manipulate the DOM with JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "7",
        title: "Events and Event Listeners",
        description:
          "Learn how to work with events and event listeners in JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "8",
        title: "ES6 Features",
        description: "Learn about the new features introduced in ES6.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "9",
        title: "TypeScript Basics",
        description: "Learn the basics of TypeScript programming language.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        id: "10",
        title: "TypeScript Advanced",
        description: "Learn advanced TypeScript concepts.",
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
  };

  if (!course) {
    return redirect("/");
  }

  const progressCount = 0;

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default CourseLayout;
