"use client";

type Props = {
  title?: string;
  lastAuthor?: string;
  thread?: string;
  views?: number;
  replies?: number;
  index?: number;
};

export const ForumBlogBox = ({
  title,
  lastAuthor,
  thread,
  views,
  replies,
  index,
}: Props) => {
  return (
    <div className="flex items-start justify-start w-full py-2 px-4 gap-3">
      <button className="text-gray-800 hover:text-white focus:outline-lime-300 w-50 pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </button>
      <div>
        <h2 className="font-bold text-1xl">{title}</h2>
        <h3 className="">
          Last post by{" "}
          <span className="text-yellow-500">
            {index === 0
              ? "Jeremy Thomas"
              : index === 1
              ? "Jane Clarkson"
              : index === 2
              ? "Gabriel Russell"
              : index === 3
              ? "Lindsay Walton"
              : index === 4
              ? "Shekinah"
              : index === 5
              ? "Mathew"
              : index === 6
              ? "Brian"
              : index === 6
              ? "Shane"
              : index === 7
              ? "Gatier"
              : index === 8
              ? "Makenzy"
              : index === 9
              ? "Grace Leo"
              : "Jon Freeman"}{" "}
            in {thread}
          </span>{" "}
        </h3>
        <h3>
          {views} views / {replies} replies
        </h3>
      </div>
    </div>
  );
};
