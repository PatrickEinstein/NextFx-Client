import React from "react";
import { ForumBlogBox } from "./ForumBlogBox";
import { Forums } from "../../constants";

export const ForumOverView = () => {
  return (
    <div className="mt-5 mb-5 justify-center md:w-3/5">
      <div className="shadow-sm shadow-gray-200 w-full p-4">
        <h2 className="text-secondary font-bold text-2xl">Recent</h2>
        <h2 className="text-primary font-bold text-4xl tracking-tighter">
          Forum Activity
        </h2>
        <h2 className="text-base tracking-tighter">
          Discuss your market views with other traders
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-2 md:gap-2 pt-4">
        {Forums.map(
          ({ title, lastAuthor, thread, views, replies }, index: number) => (
            <div key={index}>
              <ForumBlogBox
                title={title}
                lastAuthor={lastAuthor}
                thread={thread}
                views={views}
                replies={replies}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
