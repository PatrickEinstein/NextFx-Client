import { Skeleton } from "@/components/ui/skeleton";

export const TradingSkeletonCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="w-full flex flex-col gap-3">
        <Skeleton className="h-5 w-full md:w-3/4" />
        <Skeleton className="h-3 w-full md:w-1/2" />
        <Skeleton className="h-3 w-full md:w-1/2" />
        <Skeleton className="h-3 w-full md:w-1/2" />
        <Skeleton className="h-3 w-full md:w-1/2" />
      </div>
    </div>
  );
};
