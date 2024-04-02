"use client";

import {
  CheckCircle,
  Lock,
  PlayCircle,
  AlignHorizontalDistributeCenter,
  ActivitySquare,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface ForumSidebarItemProps {
  label: string;
  id?: number;
}

export const ForumSidebarItem = ({ label, id }: ForumSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const actual_pathname_id = pathname?.split("/").pop();

  const Icon = id
    ? id % 2 === 0
      ? AlignHorizontalDistributeCenter
      : ActivitySquare
    : ActivitySquare;
  const isActive = true;

  const onClick = () => {};

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700"
        // isCompleted && "text-emerald-700 hover:text-emerald-700",
        // isCompleted && isActive && "bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4 text-black">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-slate-700"
            // isCompleted && "text-emerald-700"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100"
          // isCompleted && "border-emerald-700"
        )}
      />
    </button>
  );
};
