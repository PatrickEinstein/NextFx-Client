"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ForumBlogBox } from "./ForumBlogBox";
import { Threads } from "../../utils/fetches/api.fetch";

export const ForumOverView = () => {
  const [forum, SetForum] = useState([]);
  let load = {
    page: 1,
    pageSize: 10,
  };
  const ForumGot = useCallback(async () => {
    const newForum = await Threads(load);
    console.log(`newForum==>`, newForum.message);
    if (newForum.message === "Failed to fetch") {
      return;
    }
    SetForum(newForum.message);
  }, []);

  useEffect(() => {
    ForumGot();
  }, []);

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
        {forum.map(
          (
            {
              forum: { _id, title, picture, description, createdAt },
              replies: { forumId, author = "PAT", content, views = 10 },
              repliesNumber,
            },
            index: number
          ) => (
            <div key={index}>
              <ForumBlogBox
                title={title}
                lastAuthor={author}
                thread={description}
                views={views}
                replies={repliesNumber}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
