"use client";

import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ForexpediaCategoriesProps = {
  categories: {
    topics: {
      [key: string]: {
        name: string;
        path: string;
        slug: string;
        terms: {
          title: string;
          path: string;
          slug: string;
        }[];
      }[];
    };
  };
};

// Data object

export default function ForexpediaCategories({
  categories,
}: ForexpediaCategoriesProps) {
  console.log("categories", categories);
  // Iterate through each key-value pair in the data object
  return (
    <div className="w-full py-12 px-5 lg:px-0 flex flex-col gap-6 lg:gap-8">
      {Object.entries(categories.topics).map(([key, value]) => (
        <div key={key} className="w-full flex flex-col gap-4">
          {/* Display the key */}
          <div className="w-full flex items-center gap-2">
            <h3 className="text-xl font-bold">{key.toUpperCase()}</h3>
            <Separator className="h-1 w-full bg-[#EAEAEA]" />
          </div>
          {/* Iterate through each item in the value array */}
          <ul className="px-0 lg:px-5 flex flex-col gap-5">
            {value?.map((item) => (
              <li key={item.slug} className="flex flex-col gap-4">
                {/* Display the name and the path */}
                <span
                  // href={item.path}
                  className="flex items-center"
                >
                  <span className="tracking-wide font-semibold">
                    {item.name}
                  </span>
                  <span className="p-1 rounded-full flex items-center justify-center bg-[#EAEAEA] ml-2">
                    <ArrowRight size={16} />
                  </span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {item.terms.map((term) => (
                    <span
                      key={term.slug}
                      //   href={term.path}
                      className="text-sm text-gray-800 hover:text-primary font-normal"
                    >
                      {term.title}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
