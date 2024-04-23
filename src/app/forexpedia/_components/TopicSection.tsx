"use client";

import Link from "next/link";
import path from "path";

type TopicSectionProps = {
  topic: {
    terms: {
      title: string;
      slug: string;
      path: string;
    }[];
  };
  param: string;
};

export default function TopicSection({ topic, param }: TopicSectionProps) {
  return (
    <div className="w-full py-12 px-5 lg:px-0">
      <h2 className="text-xl font-normal">
        Terms that start with{" "}
        <span className="font-bold">“{param.toUpperCase()}”</span>
      </h2>
      <div className="w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {topic.terms.map((term) => (
          <span
            key={term.slug}
            // href={term.path}
            className="text-sm text-gray-800 hover:text-primary font-semibold"
          >
            {term.title}
          </span>
        ))}
      </div>
    </div>
  );
}
