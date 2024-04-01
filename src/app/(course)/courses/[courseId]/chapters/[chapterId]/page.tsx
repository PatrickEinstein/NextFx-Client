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
import { GetCourseAndChapters } from "../../../../../../../utils/fetches/api.fetch";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
// import { CourseProgressButton } from "./_components/course-progress-button";

const ChapterIdPage = ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { courseId, chapterId } = params;
  const load = {
    courseId: courseId,
  };
  const [chapter, setChapter] = useState([{ title: "", description: "" }]);
  const [muxData, setMuxData] = useState({ playbackId: "1" });
  const [userProgress, setuserProgress] = useState([{ isCompleted: false }]);
  const [content, SetCourse] = useState<any>({ chapters: [], price: 5 });

  const newsGot = useCallback(async () => {
    try {
      console.log(`I am calling`);
      const newNews = await GetCourseAndChapters(load);
      // console.log(`courseContent==>`, newNews.message);
      SetCourse(newNews?.message);
      console.log(`I called`);
    } catch (error: any) {
      // console.error("Error fetching course data:", error.message);
    }
  }, [courseId, chapterId]);
  useEffect(() => {
    newsGot();
  }, [courseId, chapterId]);

  const purchase = false;

  useEffect(() => {
    if (Object.keys(content).length > 1) {
      const chapter = content?.chapters?.filter(
        (chapter: any) => chapter._id === params?.chapterId
      );
      setChapter(chapter);

      if (chapter?.length > 0) {
        const { muxData, userProgress } = chapter[0];
        setMuxData(muxData);
        setuserProgress(userProgress);
      }
    }
  }, [content, params.chapterId]);
  const scriptUri =
    content &&
    content.chapters &&
    content.chapters[0] &&
    content.chapters[0].script;
  const docs = [
    { uri: scriptUri }, // Remote file
  ];
  // const docs = [
  //   { uri: content?.chapters[0]?.script }, // Remote file
  // ];

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
            title={content?.chapters?.length ? content?.chapters[0]?.title : ""}
            courseId={params.courseId}
            nextChapterId={"1"}
            // playbackId={muxData?.playbackId!}
            playbackId={
              content?.chapters?.length ? content?.chapters[0]?.link : ""
            }
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">
              {chapter?.length && chapter[0]?.title}
            </h2>
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
                price={content?.price!}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview
              value={chapter?.length > 0 ? chapter[0]?.description! : ""}
            />
          </div>
          {content &&
            content.chapters &&
            content?.chapters[0]?.script?.length && (
              <>
                <Separator />
                <div className="p-4">
                  {/* {content?.attachments?.map((attachment: any) => ( */}
                  <a
                    href={content?.chapters[0]?.script}
                    target="_blank"
                    // key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">
                      {content?.chapters[0]?.title}
                    </p>
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
