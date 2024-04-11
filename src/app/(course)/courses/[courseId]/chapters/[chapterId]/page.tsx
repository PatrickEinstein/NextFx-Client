"use client";
import { useCallback, useEffect, useState } from "react";
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
import {
  GetChapter,
  GetCourseAndChapters,
} from "../../../../../../../utils/fetches/api.fetch";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useUserStore } from "@/store";
// import { CourseProgressButton } from "./_components/course-progress-button";

const ChapterIdPage = ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { courseId, chapterId } = params;
  const token = useUserStore((state) => state.token);

  const load = {
    courseId: chapterId,
    token,
  };

  const [chapter, setChapter] = useState({
    title: "",
    description: "",
    muxData: {},
    userProgress: {
      isCompleted: false,
    },
    link: "",
    script: "",
  });
  const purchase = false;

  const newsGot = useCallback(async () => {
    try {
      const newNews = await GetChapter(load);
      setChapter(newNews?.message);
      console.log(`chapter-callback::`, chapter);
    } catch (error: any) {}
  }, [chapterId]);
  useEffect(() => {
    newsGot();
  }, [chapterId]);

  const { muxData, userProgress } = chapter;

  const docs = [{ uri: chapter.script }];

  const isLocked = false;
  const completeOnEnd = true;

  return (
    <div>
      {userProgress?.isCompleted && (
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
            title={chapter?.title}
            courseId={params.courseId}
            nextChapterId={"1"}
            playbackId={chapter.link}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
            {purchase ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={`${Number(params?.chapterId) + 1}`}
                isCompleted={userProgress?.isCompleted}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                // price={content?.price!}
              />
            )}
          </div>

          <Separator />
          <div>
            <Preview value={chapter?.description} />
          </div>
          {chapter?.script?.length && (
            <>
              <Separator />
              <div className="p-4">
                {/* {content?.attachments?.map((attachment: any) => ( */}
                <a
                  href={chapter?.script}
                  target="_blank"
                  // key={attachment.id}
                  className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                >
                  <File />
                  <p className="line-clamp-1">{chapter?.title}</p>
                </a>
                {/* ))} */}
                <DocViewer
                  documents={docs}
                  pluginRenderers={DocViewerRenderers}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
