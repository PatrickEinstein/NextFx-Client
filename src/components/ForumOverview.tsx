import React from "react";
import { ForumBlogBox } from "./ForumBlogBox";
import { Forums } from "../../constants";

export const ForumOverView = () => {
  return (
    <div className="mt-5 mb-5 justify-center md:w-3/5">
      <div className="shadow-2xl shadow-blue-500/50 w-full pl-6">
        <h2 className="text-yellow-400 font-bold text-3xl">Recent</h2>
        <h2 className="text-black font-bold text-5xl">Forum Activity</h2>
        <h2 className="">Discuss your market views with other traders</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-2 md:gap-2">
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
