import { AnalysisSkeletonCard } from "./AnalysisSkeletonCard";

export const AnalysisSkeleton = () => {
  return (
    <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <AnalysisSkeletonCard />
        </div>
      ))}
    </div>
  );
};
