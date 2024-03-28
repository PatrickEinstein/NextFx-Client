import { TradingSkeletonCard } from "./TradingSkeletonCard";

export const TradingSkeleton = () => {
  return (
    <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <TradingSkeletonCard />
        </div>
      ))}
    </div>
  );
};
