type AnalysisHeroProps = {
  headerText: string;
  subText: string;
};

export const AnalysisHero = ({ headerText, subText }: AnalysisHeroProps) => {
  return (
    <div className="w-full bg-primary flex items-center justify-center py-10  sm:py-32 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {headerText}
        </h2>
        <p className="mt-2 text-lg leading-8">{subText}</p>
      </div>
    </div>
  );
};
