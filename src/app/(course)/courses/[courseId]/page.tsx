// import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
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

  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
};

export default CourseIdPage;
