"use client";

// import { useConfettiStore } from "@/hooks/use-confetti-store";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store";
import MuxPlayer from "@mux/mux-player-react";
import axios from "axios";
import { ArrowLeft, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { ToastBar } from "react-hot-toast";

interface VideoPlayerProps {
  playbackId: string;
  isLocked: boolean;
  nextChapterId?: string;
  chapterId: string;
  courseId: string;
  completeOnEnd: boolean;
  title: string;
}

const VideoPlayer = ({
  playbackId,
  isLocked,
  nextChapterId,
  chapterId,
  courseId,
  completeOnEnd,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  // const confetti = useConfettiStore();

  const user = useUserStore((state) => state.user);

//   <Link href={`/dashboard/${user}`} className="text-blue-600">
//   <ArrowLeft/> Back to dashboard
//  </Link>

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(
          `/api/courses/${courseId}/chapters/${chapterId}/progress`,
          {
            isCompleted: true,
          }
        );
        // if (!nextChapterId) {
        //   confetti.onOpen();
        // }

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }

        toast.success("Progress updated");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      <Link href={`/dashboard/${user}`} className="text-blue-600">
       <ArrowLeft/> Back to dashboard
      </Link>

      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}

      {!isLocked && (
        <MuxPlayer
          title={title}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          onEnded={() => {
            onEnd;
          }}
          autoPlay
          src={playbackId}
          // playbackId={playbackId}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
