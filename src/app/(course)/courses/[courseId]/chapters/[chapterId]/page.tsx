// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { File } from "lucide-react";

// import { getChapter } from "@/actions/get-chapter";
import Banner from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";

import VideoPlayer from "./_components/video-player";
import CourseEnrollButton from "./_components/course-enroll-button";
import CourseProgressButton from "./_components/course-progress-button";
// import { CourseProgressButton } from "./_components/course-progress-button";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const {
  //   chapter,
  //   course,
  //   muxData,
  //   attachments,
  //   nextChapter,
  //   userProgress,
  //   purchase,
  // } = await getChapter({
  //   userId,
  //   chapterId: params.chapterId,
  //   courseId: params.courseId,
  // });

  // if (!chapter || !course) {
  //   return redirect("/");
  // }

  const purchase = false;

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
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "2",
        title: "Variables and Data Types",
        description: "Learn how to declare variables and use data types.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "3",
        title: "Functions and Scope",
        description: "Learn how to define functions and understand scope.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "4",
        title: "Objects and Arrays",
        description: "Learn how to work with objects and arrays in JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "5",
        title: "Loops and Conditionals",
        description: "Learn how to use loops and conditionals in JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "6",
        title: "DOM Manipulation",
        description: "Learn how to manipulate the DOM with JavaScript.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
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
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "8",
        title: "ES6 Features",
        description: "Learn about the new features introduced in ES6.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: true,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "9",
        title: "TypeScript Basics",
        description: "Learn the basics of TypeScript programming language.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: false,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
      },
      {
        id: "10",
        title: "TypeScript Advanced",
        description: "Learn advanced TypeScript concepts.",
        videoUrl: "https://example.com/intro_video.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "1",
        course: {
          id: "1",
          userId: "user1",
          title: "JavaScript Basics",
        },
        muxData: {
          id: "1",
          assetId: "asset_123",
          playbackId: "playback_456",
        },
        userProgress: [
          {
            id: "1",
            userId: "user1",
            isCompleted: false,
          },
          // Other user progress for chapter 1
        ],
        createdAt: "2024-03-26T12:00:00Z",
        updatedAt: "2024-03-26T12:30:00Z",
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

  // Patrick you should create an endpoint that gets the specific chapter data in a given course and it should look like the data bellow

  // const chapter = {
  //   id: "1",
  //   title: "Introduction to JavaScript",
  //   description: "An overview of JavaScript language features.",
  //   videoUrl: "https://example.com/intro_video.mp4",
  //   position: 1,
  //   isPublished: true,
  //   isFree: true,
  //   courseId: "1",
  //   course: {
  //     id: "1",
  //     userId: "user1",
  //     title: "JavaScript Basics",
  //   },
  //   muxData: {
  //     id: "1",
  //     assetId: "asset_123",
  //     playbackId: "playback_456",
  //   },
  //   userProgress: [
  //     {
  //       id: "1",
  //       userId: "user1",
  //       isCompleted: true,
  //     },
  //     // Other user progress for chapter 1
  //   ],
  //   createdAt: "2024-03-26T12:00:00Z",
  //   updatedAt: "2024-03-26T12:30:00Z",
  // };

  const {
    muxData,

    userProgress,
  } = course.chapters[Number(params?.chapterId)];

  const chapter = course.chapters.find(
    (chapter: any) => chapter.id === params.chapterId
  );

  const isLocked = false;
  const completeOnEnd = true;

  return (
    <div>
      {userProgress[0]?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter." />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter?.title!}
            courseId={params.courseId}
            nextChapterId={"1"}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{chapter?.title}</h2>
            {purchase ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={`${Number(params?.chapterId) + 1}`}
                isCompleted={!!userProgress[0]?.isCompleted}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter?.description!} />
          </div>
          {!!course?.attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {course?.attachments?.map((attachment: any) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
